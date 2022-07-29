import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface IProductState {
    value: any[]
}

const initialState : IProductState = {
    value:[]
}

export const getProducts = createAsyncThunk('product/getProduct', async ()=>{
    const data = await ( await fetch(`http:localhost:8000/products`)).json()
    return data;
})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state, action)=>{
            state.value = action.payload
        })
    }
        
})

export default productSlice.reducer;