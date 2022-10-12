import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    zoom: false,
    carrouselVisible: false 
}

const { actions, reducer } = createSlice({
    name: 'zoom',
    initialState,
    reducers: {
        projectZooming: {
            reducer: (draft, action) => {
                if(draft.zoom === true){
                    return draft.zoom = true
                }
                if(draft.zoom === false){
                    return initialState
                }
            }
        }
    }
})

export { actions }
export default reducer