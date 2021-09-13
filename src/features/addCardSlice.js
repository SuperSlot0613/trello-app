import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  doing: [],
  done: [],
  showForm: false,
};

export const addCardSlice = createSlice({
  name: "addcard",
  initialState,
  reducers: {
    TODO: (state, action) => {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    },
    DOING: (state, action) => {
      return {
        ...state,
        doing: [...state.doing, action.payload],
      };
    },
    DONE: (state, action) => {
      return {
        ...state,
        done: [...state.done, action.payload],
      };
    },
    REMOVE_FROM_LIST: (state, action) => {
      const index = state.todo.findIndex(
        (todoItem) => todoItem.id === action.payload
      );
      const index1 = state.doing.findIndex(
        (doingItem) => doingItem.id === action.payload
      );
      const index2 = state.done.findIndex(
        (doneItem) => doneItem.id === action.payload
      );
      let newList;

      if (index >= 0) {
        newList = [...state.todo];
        newList.splice(index, 1);
        return {
          ...state,
          todo: newList,
        };
      } else if (index1 >= 0) {
        newList = [...state.doing];
        newList.splice(index, 1);
        return {
          ...state,
          doing: newList,
        };
      } else {
        newList = [...state.done];
        newList.splice(index2, 1);
        return {
          ...state,
          done: newList,
        };
      }
    },
    SHOWFORM: (state, action) => {
      state.showForm = action.payload;
    },
  },
});

export const { DONE, DOING, TODO ,REMOVE_FROM_LIST,SHOWFORM} = addCardSlice.actions;

export const selectTODO = (state) => state.addcard.todo;
export const selectDOING = (state) => state.addcard.doing;
export const selectDONE = (state) => state.addcard.done;
export const selectForm = (state) => state.addcard.shoForm;

export default addCardSlice.reducer;
