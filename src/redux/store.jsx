import { configureStore } from "@reduxjs/toolkit";
import TimeSlice from "./slices/TimeSlice";

const store = configureStore({
  reducer: { TimeSlice },
});

export default store;
