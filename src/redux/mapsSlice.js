import { createSlice } from "@reduxjs/toolkit";

export const mapsSlice= createSlice({
    name:"mapsOut",
    initialState:{
        value:{
            indications:"Ottieni Indicazioni",
            visualize:"Visualizza su Maps"
          },
    },
    reducers:{
        changeLanguageMaps:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        indications:"Get Directions",
                        visualize:"View on Maps"
                      }
                    break;
                case "cn":
                    state.value={
                        indications:"获取路线",
                        visualize:"在地图上查看"
                      }
                    break;
                case "it":
                    state.value={
                        indications:"Ottieni Indicazioni",
                        visualize:"Visualizza su Maps"
                      }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguageMaps}= mapsSlice.actions

export const mapsReducer=mapsSlice.reducer