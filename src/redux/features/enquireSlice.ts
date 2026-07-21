import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnquiryState {
  industry: string;
  service: string;
}

const initialState: EnquiryState = {
  industry: "",
  service: "",
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    setEnquiry: (state, action: PayloadAction<EnquiryState>) => {
      state.industry = action.payload.industry;
      state.service = action.payload.service;
    },
    clearEnquiry: (state) => {
      state.industry = "";
      state.service = "";
    },
  },
});

export const { setEnquiry, clearEnquiry } = enquirySlice.actions;
export default enquirySlice.reducer;