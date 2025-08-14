import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./homeSlice";
import { menuReducer } from "./menuSlice";
import { navReducer } from "./navSlice";
import { findusReducer } from "./findusSlice";
import { deliveryReducer } from "./deliverySlice";
import { footerReducer } from "./footerSlice";

export default configureStore(
    {
        reducer:{
            home:homeReducer,
            menu:menuReducer,
            nav:navReducer,
            findus:findusReducer,
            delivery:deliveryReducer,
            footer:footerReducer,
        },
    }
)
