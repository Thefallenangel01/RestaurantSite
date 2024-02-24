import { createSlice } from "@reduxjs/toolkit";

export const findusSlice= createSlice({
    name:"findusOut",
    initialState:{
        value:{
            ourLocation:"Dove ci troviamo",
            visitUs:"Vieni a trovarci a",
            contactUs:" Contattaci con (Seleziona il modo)",
            weAreHere:"Noi siamo qui:"
          },
    },
    reducers:{
        changeLanguageFindUs:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        ourLocation:"Our Location",
                        visitUs:"Visit us at",
                        contactUs:" Contact us (Chose the way)",
                        weAreHere:"We are here:"
                      }
                    break;
                case "cn":
                    state.value={
                        ourLocation:"我们在哪里",
                        visitUs:"我们在",
                        contactUs:" 请通过这些联系我们 (选择您想要的方式)",
                        weAreHere:"我们在这:"
                      }
                    break;
                case "it":
                    state.value={
                        ourLocation:"Dove ci troviamo",
                        visitUs:"Vieni a trovarci a",
                        contactUs:" Contattaci con (Seleziona il modo)",
                        weAreHere:"Noi siamo qui:"
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