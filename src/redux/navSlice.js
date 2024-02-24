import { createSlice } from "@reduxjs/toolkit";

export const navSlice= createSlice({
    name:"navOut",
    initialState:{
        value:{
            home:"Home",
            menu:"Menu",
            delivery:"Consegne",
            findus:"Come Trovarci"
          },
    },
    reducers:{
        changeLanguageNav:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        home:"Home",
                        menu:"Menu",
                        delivery:"Delivery",
                        findus:"Find Us"
                      }
                    break;
                case "cn":
                    state.value={
                        home:"主页",
                        menu:"菜单",
                        delivery:"送包",
                        findus:"怎么找到我们"
                      }
                    break;
                case "it":
                    state.value={
                        home:"Home",
                        menu:"Menu",
                        delivery:"Consegne",
                        findus:"Come Trovarci"
                      }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguageNav}= navSlice.actions

export const navReducer=navSlice.reducer