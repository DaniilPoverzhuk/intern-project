import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: { hours: 0, minutes: 0, seconds: 0 },
};

const TimeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTimeRx: (state, action) => {
      const { hours, minutes, seconds } = action?.payload;

      console.log(seconds);

      state.time = {
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      };
    },
  },
});

export const { setTimeRx } = TimeSlice.actions;
export default TimeSlice.reducer;
