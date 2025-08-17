import { createSlice } from "@reduxjs/toolkit";

export const findusSlice= createSlice({
    name:"findusOut",
    initialState:{
        value:{
            contactUs:"Dove Siamo",
            weAreHere:"Noi siamo qui:",
            getDirections:"Ottieni indicazioni",
            sendMessage:"Inviaci una Email",
            chatWithUs:"Chatta con noi",
            followUs:"Seguiteci per gli aggiornamenti",
            openingHours:"Orari di Apertura",
            everyday:"Tutti i giorni",
            lunch:"Pranzo: 12:00 - 15:00",
            dinner:"Cena: 19:00 - 23:00",
            location:"Posizione"
          },
    },
    reducers:{
        changeLanguageFindUs:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        contactUs:"Find Us",
                        weAreHere:"We are here:",
                        getDirections:"Get directions",
                        sendMessage:"Send us an Email",
                        chatWithUs:"Chat with us",
                        followUs:"Follow us for updates",
                        openingHours:"Opening Hours",
                        everyday:"Everyday",
                        lunch:"Lunch: 12:00 - 15:00",
                        dinner:"Dinner: 19:00 - 23:00",
                        location:"Our Location"
                      }
                    break;
                case "cn":
                    state.value={
                        contactUs:"我们在哪里",
                        weAreHere:"我们在这:",
                        getDirections:"获取路线",
                        sendMessage:"给我们发电子邮件",
                        chatWithUs:"与我们聊天",
                        followUs:"关注我们以获取更新",
                        openingHours:"营业时间",
                        everyday:"每天",
                        lunch:"午餐: 12:00 - 15:00",
                        dinner:"晚餐: 19:00 - 23:00",
                        location:"我们的位置"
                      }
                    break;
                case "it":
                    state.value={
                        contactUs:"Dove Siamo",
                        weAreHere:"Noi siamo qui:",
                        getDirections:"Ottieni indicazioni",
                        sendMessage:"Inviaci una Email",
                        chatWithUs:"Chatta con noi",
                        followUs:"Seguiteci per gli aggiornamenti",
                        openingHours:"Orari di Apertura",
                        everyday:"Tutti i giorni",
                        lunch:"Pranzo: 12:00 - 15:00",
                        dinner:"Cena: 19:00 - 23:00",
                        location:"Posizione"
                      }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguageFindUs}= findusSlice.actions

export const findusReducer=findusSlice.reducer