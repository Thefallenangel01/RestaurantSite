import { createSlice } from "@reduxjs/toolkit";

export const deliverySlice= createSlice({
    name:"deliveryOut",
    initialState:{
        value:{
            options:"Opzioni di Consegna",
            deliveryHours:"Orari di Consegna",
            deliveryTime:"12:00-15:00 • 19:00-23:00",
            deliveryArea:"Zone di Consegna",
            deliveryPlaces:"Pontedera & Dintorni",
            deliveryFee:"Costo della Consegna",
            deliveryFeeDesc:"Tempi e costi di consegna dipendono dalla piattaforma",
            deliverydep:"Varia per servizio e distanza",
            our:"Personale Nostro",
            ourDelivery:"Chiama per gli orari di consegna; €2,90 fino a 10 km, +€0,50/km oltre.",
            orderNow:"Ordina Ora",
            chooseService:"Scegli il tuo servizio di consegna preferito per effettuare un ordine. Tutti i servizi offrono il nostro menu completo. I tempi di consegna e le tariffe possono variare in base alla tua posizione e al servizio selezionato."
          },
    },
    reducers:{
        changeLanguageDelivery:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        options:"Delivery Options",
                        deliveryHours:"Delivery Hours",
                        deliveryTime:"12:00-15:00 • 19:00-23:00",
                        deliveryArea:"Delivery Area",
                        deliveryPlaces:"Pontedera & Surroundings",
                        deliveryFee:"Delivery Fee",
                        deliverydep:"Varies by service & distance",
                        deliveryFeeDesc:"Delivery time and cost depend on the platform",
                        our:"Restaurant Staff",
                        ourDelivery:"Call to check delivery timing; €2.90 for up to 10 km, plus €0.50/km thereafter.",
                        orderNow:"Order Now",
                        chooseService:"Choose your preferred delivery service to place an order. All services offer our complete menu. Delivery times and fees may vary depending on your location and the selected service."
                      }
                    break;
                case "cn":
                    state.value={
                        options:"送餐选择",
                        deliveryHours:"服务时间", 
                        deliveryTime:"12:00-15:00 • 19:00-23:00",
                        deliveryArea:"服务区域",
                        deliveryPlaces:"蓬泰代拉及周边地区",
                        deliveryFee:"服务费用",
                        deliveryFeeDesc:"送达时间和费用取决于平台",
                        deliverydep:"取决于服务类型和距离",
                        our:"餐馆员工",
                        ourDelivery:"请致电确认配送时间; 10公里内 €2.90,超出每公里加收 €0.50",
                        orderNow:"立即下单",
                        chooseService:"选择您首选的配送服务以下单。所有服务均提供我们的完整菜单。配送时间和费用可能因您的位置和所选服务而变动。"
                      }
                    break;
                case "it":
                    state.value={
                        options:"Opzioni di Consegna",
                        deliveryHours:"Orari di Consegna",
                        deliveryTime:"12:00-15:00 • 19:00-23:00",
                        deliveryArea:"Zone di Consegna",
                        deliveryPlaces:"Pontedera & Dintorni",
                        deliveryFee:"Costo della Consegna",
                        deliverydep:"Varia per servizio e distanza",
                        deliveryFeeDesc:"Tempi e costi di consegna dipendono dalla piattaforma",
                        our:"Personale Nostro",
                        ourDelivery:"Chiama per gli orari di consegna; €2,90 fino a 10 km, +€0,50/km oltre.",
                        orderNow:"Ordina Ora",
                        deliveryFeeDesc:"Dipende da",
                        chooseService:"Scegli il tuo servizio di consegna preferito per effettuare un ordine. Tutti i servizi offrono il nostro menu completo. I tempi di consegna e le tariffe possono variare in base alla tua posizione e al servizio selezionato."
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