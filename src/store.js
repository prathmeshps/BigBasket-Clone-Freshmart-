import { configureStore, createSlice } from "@reduxjs/toolkit";

// Products Slice
const ProductsSlice = createSlice({
  name: 'Product',
  initialState: {
    Veg: [
      { name: 'Tomato', price: 220.5, img: "/ImagesVeg/tomato.jpeg" },
      { name: 'patoto', price: 110.5, img: "/ImagesVeg/potato.jpeg" },
      { name: 'Beans', price: 100.5, img: "/ImagesVeg/beans.jpg" },
      { name: 'Carrot', price: 56.5, img: "/ImagesVeg/carrot.jpeg" },
      { name: 'Brocoli', price: 222.5, img: "/ImagesVeg/brocoll.jpeg" },
      { name: 'Lady Finger', price: 65.5, img: "/ImagesVeg/Lady.jpeg" },
      { name: 'Garlic', price: 220.5, img: "/ImagesVeg/garlic.jpg" },
      { name: 'Ginger', price: 220.5, img: "/ImagesVeg/ginger.jpg" },
      { name: 'Onion', price: 220.5, img: "/ImagesVeg/onion.jpeg" },
      { name: 'capsicum', price: 220.5, img: "capsicum.jpeg" },
      { name: 'cucumber', price: 220.5, img: "/ImagesVeg/cucumber.jpg" },
      { name: 'cauliflower', price: 220.5, img: "/ImagesVeg/cauliflower.jpg" },
    ],
    Nonveg: [
      { name: 'chiken', price: 220.2, img: "chiken.jpeg" },
      { name: 'Fish', price: 320.2, img: "/ImagesNon/fish.jpeg" },
      { name: 'Mutton', price: 500.2, img: "/ImagesNon/mutton.jpg" },
      { name: 'Egg', price: 100.2, img: "/ImagesNon/egg.jpeg" },
      { name: 'Crab', price: 750.2, img: "/ImagesNon/crab.jpeg" },
      { name: 'chicken65', price: 200.2, img: "/ImagesNon/chicken65.jpeg" },
      { name: 'rabbit', price: 750.2, img: "/ImagesNon/rabbit.jpg" },
      { name: 'prawn', price: 750.2, img: "/ImagesNon/prawn.jpg" },
    ],
    Fruits: [
      { name: "Apple", price: 100, img: "/ImagesFruits/th.jpeg" },
      { name: "Banana", price: 50, img: "/ImagesFruits/banana.jpeg" },
      { name: "watermelon", price: 100, img: "/ImagesFruits/watermelon.jpeg" },
      { name: "Mango", price: 250, img: "/ImagesFruits/mango.jpeg" },
      { name: "Grapes", price: 100, img: "/ImagesFruits/grapes.jpeg" },
      { name: "Orange", price: 150, img: "/ImagesFruits/orange.jpeg" },
      { name: "Papaya", price: 60, img: "/ImagesFruits/papaya.jpeg" },
      { name: "Guava", price: 60, img: "/ImagesFruits/guava.jpg" },
      { name: "Strawberry", price: 300, img: "/ImagesFruits/strawberry.jpeg" },
      { name: "Coconut", price: 50, img: "/ImagesFruits/coconut.jpg" },
      { name: "Pineapple", price: 100, img: "/ImagesFruits/pine.jpeg" },
      { name: "Blueberry", price: 100, img: "/ImagesFruits/blueberry.jpeg" },
      { name: "Lemon", price: 100, img: "/ImagesFruits/lemon.jpeg" },
      { name: "Cherry", price: 100, img: "/ImagesFruits/cherry.jpg" },
      { name: "Kiwi", price: 100, img: "/ImagesFruits/kiwi.jpg" },
      { name: "Jackfriut", price: 100, img: "/ImagesFruits/jackfriut.jpeg" },
    ],
    Milk: [
      { name: "Milk", price: 85.65, img: "/ImagesMilk/milk.jpeg" },
      { name: "Butter", price: 100.65, img: "/ImagesMilk/butter.jpg" },
      { name: "Ghee", price: 850.25, img: "/ImagesMilk/ghee.jpg" },
      { name: "Cheese", price: 600.65, img: "/ImagesMilk/cheese.jpeg" },
      { name: "Paneer", price: 950.65, img: "/ImagesMilk/paneer.jpg" },
      { name: "Curd", price: 50.65, img: "/ImagesMilk/curd.jpg" },
      { name: "Khoa", price: 250.68, img: "/ImagesMilk/khoa.jpeg" },
      { name: "Lassi", price: 60.63, img: "/ImagesMilk/lassi.jpeg" },
      { name: "Cream", price: 220.65, img: "/ImagesMilk/cream.jpeg" },
      { name: "ButterMilk", price: 93.65, img: "/ImagesMilk/milks.jpg" },
      { name: "Whipped Cream", price: 110.65, img: "/ImagesMilk/whipped.jpg" },
      { name: "Sour Cream", price: 450.65, img: "/ImagesMilk/sour.jpeg" },
    ],
  },
  reducers: {},
});

// Cart Slice
const cartSlice = createSlice({
  name: 'Cart',
  initialState: [],
  reducers: {
    addTocart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const index = state.findIndex(i => i.name === action.payload.name);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }
    },
    remove: (state, action) => {
      const index = state.findIndex(i => i.name === action.payload.name);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart: () => []
  }
});

// Order Slice (for purchases)
const orderSlice = createSlice({
  name: 'Orders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return [...state, ...action.payload];
    }
  }
});

// Export actions
export const { addTocart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { addOrder } = orderSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    Product: ProductsSlice.reducer,
    Cart: cartSlice.reducer,
    Orders: orderSlice.reducer
  }
});

export default store;
  