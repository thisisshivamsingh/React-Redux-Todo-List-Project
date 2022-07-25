import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

// const [list, setList] = useState([]);

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addTextList: (state, action) => {
      state.list.push({
        ...state.list,
        id: action.payload.id,
        data: action.payload.data,
      });
    },
    deleteTextList: (state, action) => {
      const deleted = state.list.filter(
        (elem) => elem.id !== action.payload.id
      );
      state.list = deleted;
    },
    removeAllList: (state) => {
      state.list = [];
    },
  },
});

export default addSlice.reducer;
export const { addTextList, deleteTextList, removeAllList } = addSlice.actions;
