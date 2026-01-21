import { create } from "zustand";

//create : is a function , include Arrow function(set) , return object
//set : is a return of currrent state
//filter : using search in the Array , the same forEach , include Arrow function , return New Array (بها عنصر حققت الشرط)
//find : ({object} بترجع اول عنصر حقق الشرط على هيئه)
//findIndex : (Array بترجع مكان العنصر في ال )
//Some : (boolean بترد عليا ب اه او لا زي ال )

export const useCart = create((set) => ({
  items: [
    { name: "iphone", price: 500 },
    { name: "iphone 12", price: 700 },
    { name: "samsung", price: 300 },
    { name: "samsung S", price: 400 },
    { name: "oppo", price: 200 },
    { name: "oppo reno", price: 250 },
  ],
  
  addToCart: (newProduct) =>
    set((state) => {
      let products = state.items;
      let final = products.some((el) => el.name.includes("oppo"));
      console.log(final);
      return { items: state.items };
    }),
}));
