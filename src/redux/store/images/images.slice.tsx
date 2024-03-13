import { createSlice } from "@reduxjs/toolkit";
import { ImageState } from "./images.entity";
import imagesReducer from "./images.reducer";

export const initialState: ImageState = {
    listImage: []
};

const imagesSlice = createSlice({
    name: 'images',
    initialState: initialState,
    reducers: imagesReducer
});

export const {actions, reducer} = imagesSlice