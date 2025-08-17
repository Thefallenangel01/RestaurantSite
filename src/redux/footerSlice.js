import { createSlice } from "@reduxjs/toolkit";

export const footerSlice= createSlice({
    name:"footerOut",
    initialState:{
        value:{
            copyresName:"Ristorante La Felicità",
            place:"Pontedera (PI)",
            rights:"Tutti i diritti riservati",
            lunch:"Pranzo",
            dinner:"Cena",
            lunchTime:"12:00-15:00",
            dinnerTime:"19:00-23:00",
            contact:"Contatti",
            openingHours:"Orari",
            everyday:"Tutti i giorni"
          },
    },
    reducers:{
        changeLanguageFooter:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        copyresName:"Restaurant La Felicità",
                        place:"Pontedera (PI)",
                        rights:"All rights reserved",
                        lunch:"Lunch",
                        dinner:"Dinner",
                        lunchTime:"12:00-15:00",
                        dinnerTime:"19:00-23:00",
                        contact:"Contacts",
                        openingHours:"Opening Hours",
                        everyday:"Everyday"
                      }
                    break;
                case "cn":
                    state.value={
                        copyresName:"悦来餐馆",
                        place:"蓬泰代拉 (比萨)",
                        rights:"版權所有",
                        lunch:"午餐",
                        dinner:"晚餐",
                        lunchTime:"12:00-15:00",
                        dinnerTime:"19:00-23:00",
                        contact:"联系方式",
                        openingHours:"营业时间",
                        everyday:"每天"
                      }
                    break;
                case "it":
                    state.value={
                        copyresName:"Ristorante La Felicità",
                        place:"Pontedera (PI)",
                        rights:"Tutti i diritti riservati",
                        lunch:"Pranzo",
                        dinner:"Cena",
                        lunchTime:"12:00-15:00",
                        dinnerTime:"19:00-23:00",
                        contact:"Contatti",
                        openingHours:"Orari",
                        everyday:"Tutti i giorni"
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