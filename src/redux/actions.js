import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getDetails = createAsyncThunk("covid/getDetails", async (code) => {
  const res = (await api.get("/country/code", { params: { code } })).data[0];
  return res;
});
