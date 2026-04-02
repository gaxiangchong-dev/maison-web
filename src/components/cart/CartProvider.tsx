"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

export type CartItem = {
  slug: string;
  name: string;
  priceLabel: string;
  unitPriceRm: number;
  imageSrc?: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "hydrate"; state: CartState }
  | { type: "add"; item: Omit<CartItem, "qty">; qty?: number }
  | { type: "remove"; slug: string }
  | { type: "setQty"; slug: string; qty: number }
  | { type: "clear" };

const CART_STORAGE_KEY = "mojaMaison.cart.v1";

function clampQty(qty: number) {
  if (!Number.isFinite(qty)) return 1;
  return Math.max(1, Math.min(99, Math.floor(qty)));
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return action.state;
    case "add": {
      const qty = clampQty(action.qty ?? 1);
      const existing = state.items.find((i) => i.slug === action.item.slug);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === action.item.slug ? { ...i, qty: clampQty(i.qty + qty) } : i,
          ),
        };
      }
      return { items: [...state.items, { ...action.item, qty }] };
    }
    case "remove":
      return { items: state.items.filter((i) => i.slug !== action.slug) };
    case "setQty":
      return {
        items: state.items.map((i) =>
          i.slug === action.slug ? { ...i, qty: clampQty(action.qty) } : i,
        ),
      };
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotalRm: number;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as CartState;
      if (!parsed?.items || !Array.isArray(parsed.items)) return;
      dispatch({ type: "hydrate", state: parsed });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0);
    const subtotalRm = state.items.reduce((sum, i) => sum + i.unitPriceRm * i.qty, 0);

    return {
      items: state.items,
      itemCount,
      subtotalRm,
      addItem: (item, qty) => dispatch({ type: "add", item, qty }),
      removeItem: (slug) => dispatch({ type: "remove", slug }),
      setQty: (slug, qty) => dispatch({ type: "setQty", slug, qty }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

