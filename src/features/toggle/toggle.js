import { createSlice } from "@reduxjs/toolkit";

const toggle = createSlice({
    name: 'toggle',
    initialState: {
        openDrawer: false, isLoading: true, isError: false
    },
    reducers: {
        toggleDrawer(state){
            state.openDrawer = !state.openDrawer
        },
        toggleLoading(state){
            state.isLoading = false
        }, 
        toggleError(state){
            state.isError = !state.isError
        }
    }
})

export const {toggleDrawer, toggleLoading} = toggle.actions
export default toggle.reducer