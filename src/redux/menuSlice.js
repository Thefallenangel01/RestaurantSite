import { createSlice } from "@reduxjs/toolkit";

import MenuIt from "../components/MenuIt";
import MenuCn from "../components/MenuCn";
import MenuEn from "../components/MenuEn";

export const menuSlice= createSlice({
    name:"menu",
    initialState:{
        value:{
            menu:MenuIt,
            all:"Tutto",
            name:"Il Nostro Menù",
            search:"Cerca per nome del piatto",
            dishesNotFound:"Nessun piatto trovato",
            dishesNotFound1:"Nessun piatto trovato in",
            dishesNotFound2:"categoria.",
            nodishmatch:"Nessun piatto corrisponde a",
            nodishmatch1:"Prova parole chiave diverse o naviga per categoria.",
            clearSearch:"Cancella ricerca"
        },
    },
    reducers:{
        changeLanguage:(state,action)=>{
            switch (action.payload) {
                case "en":
                    state.value={
                        menu:MenuEn,
                        all:"All",
                        name:"Our Menu",
                        search:"Search by dish name",
                        dishesNotFound:"No dishes found",
                        dishesNotFound1:"No dishes found in",
                        dishesNotFound2:"category.",
                        nodishmatch:"No dishes match",
                        nodishmatch1:"Try different keywords or browse by category.",
                        clearSearch:"Clear search"
                    }
                    break;
                case "cn":
                    state.value={
                        menu:MenuCn,
                        all:"所有",
                        name:"我们的菜单",
                        search:"按菜名搜索",
                        dishesNotFound:"未找到菜品",
                        dishesNotFound1:"在",
                        dishesNotFound2:"类别中未找到任何菜品。",
                        nodishmatch:"没有菜品与",
                        nodishmatch1:"尝试使用不同关键词或按分类浏览.",
                        clearSearch:"清除搜索"
                    }
                    break;
                case "it":
                    state.value={
                        menu:MenuIt,
                        all:"Tutto",
                        name:"Il Nostro Menù",
                        search:"Cerca per nome del piatto",
                        dishesNotFound:"Nessun piatto trovato",
                        dishesNotFound1:"Nessun piatto trovato in",
                        dishesNotFound2:"categoria.",
                        nodishmatch:"Nessun piatto corrisponde a",
                        nodishmatch1:"Prova parole chiave diverse o naviga per categoria.",
                        clearSearch:"Cancella ricerca"
                    }
                    break;
                default:
                    break;
            }
        }
    },
})

export const {changeLanguage}= menuSlice.actions

export const menuReducer=menuSlice.reducer