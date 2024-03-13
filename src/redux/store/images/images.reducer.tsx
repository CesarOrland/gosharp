import { PayloadAction } from "@reduxjs/toolkit";
import { ImageEntity, ImageState } from "./images.entity";

export default {
    'images/load': (state: ImageState, action: PayloadAction<ImageEntity[]> ) => {
        state.listImage = action.payload
    },
    'images/delete':(state: ImageState, action: PayloadAction<number>) => {
        state.listImage = state.listImage.filter(
            (images: ImageEntity) => images.id !== action.payload
        )
    }
}