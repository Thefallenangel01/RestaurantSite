import { createSlice } from "@reduxjs/toolkit";

export const footerSlice= createSlice({
    name:"footerOut",
    initialState:{
        value:{
            copyresName:"Ristorante La Felicità",
            place:"Pontedera (PI)",
            rights:"Tutti i diritti riservati"
          },
    },
    reducers:{
        changeLanguageFooter:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        copyresName:"Restaurant La Felicità",
                        place:"Pontedera (PI)",
                        rights:"All rights reserved"
                      }
                    break;
                case "cn":
                    state.value={
                        copyresName:"悦来餐馆",
                        place:"蓬泰代拉 (比萨)",
                        rights:"版權所有"
                      }
                    break;
                case "it":
                    state.value={
                        copyresName:"Ristorante La Felicità",
                        place:"Pontedera (PI)",
                        rights:"Tutti i diritti riservati"
                      }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguageFooter}= footerSlice.actions

export const footerReducer=footerSlice.reducer