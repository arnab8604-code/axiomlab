import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import enquiryReducer from "@/redux/features/enquireSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
     enquiry: enquiryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;