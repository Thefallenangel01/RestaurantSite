import { createSlice } from "@reduxjs/toolkit";

import MenuIt from "../components/MenuIt";
import MenuCn from "../components/MenuCn";
import MenuEn from "../components/MenuEn";

export const menuSlice= createSlice({
    name:"menu",
    initialState:{
        value:{
            menu:MenuIt,
            all:"Tutto",
            name:"Il Nostro Menù"
        },
    },
    reducers:{
        changeLanguage:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        menu:MenuEn,
                        all:"All",
                        name:"Our Menu"
                    }
                    break;
                case "cn":
                    state.value={
                        menu:MenuCn,
                        all:"所有",
                        name:"我们的菜单"
                    }
                    break;
                case "it":
                    state.value={
                        menu:MenuIt,
                        all:"Tutto",
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