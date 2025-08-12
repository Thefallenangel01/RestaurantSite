import { createSlice } from "@reduxjs/toolkit";

export const navSlice= createSlice({
    name:"navOut",
    initialState:{
        value:{
            home:"Home",
            menu:"Menu",
            delivery:"Consegne",
            findus:"Come Trovarci",
            changelanguage:"Lingue disponibili"
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
                        findus:"Find Us",
                        changelanguage:"Available Languages"
                      }
                    break;
                case "cn":
                    state.value={
                        home:"主页",
                        menu:"菜单",
                        delivery:"外卖服务",
                        findus:"我们在哪里",
                        changelanguage:"可选语言"
                      }
                    break;
                case "it":
                    state.value={
                        home:"Home",
                        menu:"Menu",
                        delivery:"Consegne",
                        findus:"Come Trovarci",
                        changelanguage:"Lingue disponibili"
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