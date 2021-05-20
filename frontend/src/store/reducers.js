import {TYPES} from './types'

export const initialState = {  
    devices: [],
  }

const reducers = (state, action) => {
    const { type, payload } = action
    switch(type){
        case TYPES.GET_DEVICES:
            return {
                ...state,
                devices: payload
            };

        default:
            return state
    }
}

export default reducers