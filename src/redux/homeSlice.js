import { createSlice } from "@reduxjs/toolkit";

export const homeSlice= createSlice({
    name:"homeOut",
    initialState:{
        value:{
            welcome:"Benvenuti a ",
            resName:"La Felicità",
            description:"Celebre e storico ristorante cinese a Pontedera. Siamo orgogliosi di offrire un'esperienza culinaria completa, con opzioni sia per pranzi di lavoro che cene, oltre a servizio d'asporto e consegna a domicilio per chi preferisce gustare i nostri piatti comodamente a casa propria. La nostra cucina offre una vasta e autentica selezione di piatti cinesi e tailandesi, preparati con ingredienti freschi.",
            ourdishes:"I Nostri Piatti",
            ourmenu:"Vedi il Menu Completo",
            completemenu:"Menu Completo",
            contattaci:"Dove Siamo",
          },
    },
    reducers:{
        changeLanguageHome:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        welcome:"Welcome to ",
                        resName:"La Felicità",
                        description:"Famous and historic Chinese restaurant in Pontedera. We take pride in providing a comprehensive culinary experience, catering to both business lunches and dinners, along with takeaway and home delivery services for those who prefer to enjoy our dishes in the comfort of their own homes. Our kitchen boasts a diverse and authentic array of Chinese and Thai dishes, crafted using fresh, genuine ingredients.",
                        ourdishes:"Our Dishes",
                        ourmenu:"View Complete Menu",
                        completemenu:"Complete Menu",
                        contattaci:"Find Us",

                      }
                    break;
                case "cn":
                    state.value={
                        welcome:"欢迎来到",
                        resName:"悦来餐馆",
                        description:"蓬泰代拉著名且历史悠久的中餐厅。我们很自豪能够为那些喜欢在舒适的家中享用我们菜肴的人们提供完整的用餐体验，包括商务午餐和晚餐以及外卖和送货上门服务。我们的美食提供种类繁多的正宗中式和泰式菜肴，均采用新鲜、地道的食材烹制而成。",
                        ourdishes:"我们的菜肴",
                        ourmenu:"查看完整菜单",
                        completemenu:"完整菜单",
                        contattaci:"联系我们",
                      }
                    break;
                case "it":
                    state.value={
                        welcome:"Benvenuti a ",
                        resName:"La Felicità",
                        description:"Celebre e storico ristorante cinese Pontedera. Siamo orgogliosi di offrire un'esperienza culinaria completa, con opzioni sia per pranzi di lavoro che cene, oltre a servizio d'asporto e consegna a domicilio per chi preferisce gustare i nostri piatti comodamente a casa propria. La nostra cucina offre una vasta e autentica selezione di piatti cinesi e tailandesi, preparati con ingredienti freschi e autentici.",
                        ourdishes:"I Nostri Piatti",
                        ourmenu:"Vedi il Menu Completo",
                        completemenu:"Menu Completo",
                        contattaci:"Dove Siamo",
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