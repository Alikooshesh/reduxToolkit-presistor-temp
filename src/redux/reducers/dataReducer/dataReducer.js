import {createSlice} from "@reduxjs/toolkit";

const init = {
    dataList : []
}

const dataReducer = createSlice({
    name: 'dataReducer',
    initialState: init,
    reducers: {
        add: (state, action) => {
            state.dataList.push('added')
        },
        remove: (state, action) => {
            state.dataList = []
        }

    }
})

export const {add,remove} = dataReducer.actions
export default dataReducer.reducer