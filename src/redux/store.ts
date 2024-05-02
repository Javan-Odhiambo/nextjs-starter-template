import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { baseApi } from "./features/baseApi";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	devTools: process.env.NODE_ENV !== "production",
	middleware:getDefaultMiddleware =>getDefaultMiddleware().concat(baseApi.middleware)
});

export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];