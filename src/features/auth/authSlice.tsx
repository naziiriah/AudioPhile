import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialType } from "../../utils/Types";
import authService from "./authService";

// get user from localStorage

const user = JSON.parse(typeof(localStorage.getItem('user') != null && localStorage.getItem('user')));

const initialState= {
    user: user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading: false,
    message: "" ,
} as initialType;

// register the users
;
export const register = createAsyncThunk(
    'auth/register',
      async( user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch(error:any){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
             return thunkAPI.rejectWithValue(message)
        }
})

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout()
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
      async( user, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch(error:any){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() 
             return thunkAPI.rejectWithValue(message)
        }
})

 

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset : (state:any) => {
            state.isError =false
            state.isSuccess = false
            state.isLoading =  false
            state.message =  ""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase( register.pending, state => {
            state.isLoading = true
        })
        .addCase( register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase( register.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
        .addCase( loginUser.pending, state => {
            state.isLoading = true
        })
        .addCase( loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase( loginUser.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer


