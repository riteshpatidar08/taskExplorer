import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEdit: false,
};

const FileExpoSlice = createSlice({
  name: 'FileExpo',
  initialState,
  reducers: {
    isFileFolderEdit: function (state, action) {
      state.isEdit = true;
    },
    disableEdit : function(state,action){
        state.isEdit = false
    }
  },
});

export default FileExpoSlice.reducer;
export const { isFileFolderEdit , disableEdit } = FileExpoSlice.actions;
