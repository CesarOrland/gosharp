import { configureStore } from "@reduxjs/toolkit";
import { imageActions, imagesReducer } from "./images";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const actions = {
  image: imageActions,
};

const reducers = {
  image: imagesReducer,
};

export const store = configureStore({
  reducer: reducers
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelectos: TypedUseSelectorHook<RootState> = useSelector;
