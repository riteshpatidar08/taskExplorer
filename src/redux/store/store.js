import {configureStore} from '@reduxjs/toolkit' ;
import FileExpoReducer from './../slices/FileExpoSlice'
const store = configureStore({
reducer : {
    file : FileExpoReducer 
}
})


export default store