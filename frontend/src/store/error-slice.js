import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        error:null
    },
    reducers: {
        showError(state, action) {
            state.error = action.payload.message;
        },
        clearErrors(state, action) {
            state.error = null  
        }
    }
});

export const errorActions = errorSlice.actions; // Destructure actions directly

export default errorSlice; // Exporting the reducer directly
