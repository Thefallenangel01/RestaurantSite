import { createSlice } from "@reduxjs/toolkit";

export const homeSlice= createSlice({
    name:"homeOut",
    initialState:{
        value:{
            welcome:"Benvenuti a ",
            resName:"La Felicità",
            description:"Siaomo noi"
          },
    },
    reducers:{
        changeLanguageHome:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        welcome:"Welcome to ",
                        resName:"La Felicità",
                        description:"We are"
                      }
                    break;
                case "cn":
                    state.value={
                        welcome:"欢迎来到",
                        resName:"悦来餐馆",
                        description:"我们是"
                      }
                    break;
                case "it":
                    state.value={
                        welcome:"Benvenuti a ",
                        resName:"La Felicità",
                        description:"Siaomo noi"
                      }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguageHome}= homeSlice.actions

export const homeReducer=homeSlice.reducer