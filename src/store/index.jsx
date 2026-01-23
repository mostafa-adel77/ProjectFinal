import toast from "react-hot-toast";
import { create } from "zustand";

const cartStore = "furniCart";
export const useCart = create((set) => ({
  items: JSON.parse(sessionStorage.getItem(cartStore) || "[]"),
  total: 0,

  addToCart: (newProduct) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex(
        (el) => el.documentId === newProduct.documentId,
      );

      if (index === -1) {
        products.push({ ...newProduct, qty: 1 });
        toast.success("Added To Cart");
      } else {
        products[index] = {
          ...products[index],
          qty: products[index].qty + 1,
        };
        toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      }

      const total = products.reduce((sum, el) => sum + el.qty * el.price, 0);
      sessionStorage.setItem(cartStore, JSON.stringify(products));

      return { items: products, total };
    }),

  incrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);

      products[index] = {
        ...products[index],
        qty: products[index].qty + 1,
      };

      const total = products.reduce((sum, el) => sum + el.qty * el.price, 0);
      sessionStorage.setItem(cartStore, JSON.stringify(products));

      toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      return { items: products, total };
    }),

  decrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);

      if (products[index].qty > 1) {
        products[index] = {
          ...products[index],
          qty: products[index].qty - 1,
        };
        toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      } else {
        products.splice(index, 1);
        toast.success("Item Removed From Cart");
      }

      const total = products.reduce((sum, el) => sum + el.qty * el.price, 0);
      sessionStorage.setItem(cartStore, JSON.stringify(products));
      return { items: products, total };
    }),

  removeItemFromCart: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId == documentId);

      products.splice(index, 1);
      toast.success("Item Removed From Cart");

      const total = products.reduce((sum, el) => sum + el.qty * el.price, 0);
      sessionStorage.setItem(cartStore, JSON.stringify(products));
      return { items: products, total };
    }),

  clearCart: () => {
    set(() => {
      sessionStorage.removeItem(cartStore);
      return { items: [], total: 0 };
    });
  },
}));
