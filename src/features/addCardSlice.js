import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  todo: [],
  doing:[],
  done:[],
  showForm:false,
};


export const addCardSlice = createSlice({
  name: 'addcard',
  initialState,
  reducers: {
    TODO: (state, action) => {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    },
    DOING: (state,action) => {
      return {
        ...state,
        doing: [...state.doing, action.payload],
      };
    },
    DONE: (state, action) => {
      return {
        ...state,
        doing: [...state.doing, action.payload],
      };
    },
    SHOWFORM:(state,action)=>{
      state.showForm=action.payload;
    }
  },
});

export const { DONE,DOING,TODO } = addCardSlice.actions;

export const selectTODO = (state) => state.addcard.todo;
export const selectDOING = (state) => state.addcard.doing;
export const selectDONE = (state) => state.addcard.done;
export const selectForm = (state) => state.addcard.shoForm;


export default addCardSlice.reducer;
