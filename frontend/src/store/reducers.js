import {TYPES} from './types'

export const initialState = {  
    devices: [],
    curpage: 1,
    pages: 1,
    isLoading: false
  }

const reducers = (state, action) => {
    const { type, payload } = action
    switch(type){
        case TYPES.GET_DEVICES:
            return {
                ...state,
                devices: payload.devices,
                curpage: payload.curpage,
                pages: payload.pages,
                isLoading: false
            };

        case TYPES.SEARCH_DEVICES:
            return {
                ...state,
                devices: payload.devices,
                curpage: payload.curpage,
                pages: payload.pages,
                isLoading: false
            };

        case TYPES.FILTER_DEVICE:
            return {
                ...state,
                devices: payload.devices,
                curpage: payload.curpage,
                pages: payload.pages,
                isLoading: false
            };

        case TYPES.LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state
    }
}

export default reducers