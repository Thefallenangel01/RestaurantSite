import { createSlice } from "@reduxjs/toolkit";

export const deliverySlice= createSlice({
    name:"deliveryOut",
    initialState:{
        value:{
            options:"Opzioni di Consegna",
            deliveryOptions:"Scegli tra le opzioni disponibili",
            our:"Personale Nostro"
          },
    },
    reducers:{
        changeLanguageDelivery:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        options:"Delivery Options",
                        deliveryOptions:"Choose from the following delivery options",
                        our:"Restaurant Staff"
                      }
                    break;
                case "cn":
                    state.value={
                        options:"送餐选择",
                        deliveryOptions:"请选择以下的送餐选项",
                        our:"餐馆员工"
                      }
                    break;
                case "it":
                    state.value={
                        options:"Opzioni di Consegna",
                        deliveryOptions:"Scegli tra le opzioni disponibili",
                        our:"Personale Nostro"
                      }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguageDelivery}= deliverySlice.actions

export const deliveryReducer=deliverySlice.reducer