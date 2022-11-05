import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {api, base, searchUrl} from "../api/const";
import {getSearchSuccess} from "./searchSlice";

export const asyncSearch = createAsyncThunk(
    'search/fetchMaterial',
    async (value, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios({
                method: 'post',
                url: api + '/search/',
                data: {
                    body: `${value}`,
                },
            });
            dispatch(getSearchSuccess(response.data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const asyncHeaders = createAsyncThunk(
    'get/fetchHeaders',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(api + "/direction/")
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);




