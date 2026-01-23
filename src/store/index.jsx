import toast from "react-hot-toast";
import { create } from "zustand";

//create : is a function , include Arrow function(set) , return object
//set : is a return of currrent state
//filter : using search in the Array , the same forEach , include Arrow function , return New Array (بها عنصر حققت الشرط)
//find : ({object} بترجع اول عنصر حقق الشرط على هيئه)
//findIndex : (Array بترجع مكان العنصر في ال )
//Some : (boolean بترد عليا ب اه او لا زي ال )

export const useCart = create((set) => ({
  items: [],
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
        products[index] = { ...products[index], qty: products[index].qty + 1 };
        toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      }
      state.calcTotal();
      return { items: products };
    }),

  incrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);

      products[index] = { ...products[index], qty: products[index].qty + 1 };

      toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      state.calcTotal();

      return { items: products };
    }),

  decrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((el) => el.documentId === documentId);

      if (products[index].qty > 1) {
        products[index] = { ...products[index], qty: products[index].qty - 1 };
        toast.success(`Item Quantity Changed To : ${products[index].qty}`);
      } else {
        products.splice(index, 1);
        toast.success("Item Removed From Cart");
      }

      state.calcTotal();
      return { items: products };
    }),

  removeItemFromCart: (documentId) =>
    set((state) => {
      let products = state.items;
      let index = products.findIndex((el) => el.documentId == documentId);
      products.splice(index, 1);
      toast.success(`Item Removed From Cart`);
      state.calcTotal();
      return { items: products };
    }),

  calcTotal: () =>
    set((state) => {
      let finalTotal = 0;
      state.items.forEach((el) => {
        finalTotal += el.qty * el.price;
      });
      return { total: finalTotal };
    }),

  clearCart: () =>
    set(() => ({
      items: [],
      total: 0,
      subtotal: 0,
    })),
}));
