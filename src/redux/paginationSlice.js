import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    totalPage: 0 
}

export const paginationSlice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {
        increment: (state) => {
            state.page += 1
        },
        decrement: (state) => {
            state.page -= 1
        },
        setTotalPage: (state, action) => {
            state.totalPage = action.payload
        }
    }
})

export const { increment, decrement } = paginationSlice.actions

export default paginationSlice.reducer