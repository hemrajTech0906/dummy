

// import {createSlice ,PayloadAction} from '@reduxjs/toolkit'

// export interface Item{
    
//     id:number,
//     name:string,
//     title:string,
//     price:number,
//     description:string,
//     category:string,
//     image:string,



// }

// interface itemState{
//     items:Item[],
// }

// let initialState:itemState={
//     items:[]
// }

// let itemSlice = createSlice({
//     name:'items',
//     initialState,
//     reducers:{

//         addItem:(state,action:PayloadAction<Item>)=>{
//             state.items.push(action.payload)

//         },
//         removeItem:(state,action:PayloadAction<number>)=>{
//             state.items=state.items.filter(item => item.id !==action.payload)

//         }

//     }
// })

// export const {addItem,removeItem} = itemSlice.actions
// export default itemSlice.reducer


// Example: src/Redux/CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  
  id: number;
  name: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
