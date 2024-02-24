import { createSlice } from "@reduxjs/toolkit";

import MenuIt from "../components/MenuIt";
import MenuCn from "../components/MenuCn";
import MenuEn from "../components/MenuEn";

export const menuSlice= createSlice({
    name:"menu",
    initialState:{
        value:{
            menu:MenuIt,
            name:"Il Nostro Menu"
        },
    },
    reducers:{
        changeLanguage:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        menu:MenuEn,
                        name:"Our Menu"
                    }
                    break;
                case "cn":
                    state.value={
                        menu:MenuCn,
                        name:"我们的菜单"
                    }
                    break;
                case "it":
                    state.value={
                        menu:MenuIt,
                        name:"Il Nostro Menù"
                    }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguage}= menuSlice.actions

export const menuReducer=menuSlice.reducer