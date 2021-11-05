import * as actionTypes from './ActionTypes'

export const addItem = () => {
    return{ 
        type: actionTypes.ADD_ITEM, 
    }
}

export const deleteItem = (item: Record<string, unknown>) => {
    return{ 
        type: actionTypes.DELETE_ITEM, 
        item: item 
    }
}

export const editItem = (item: Record<string, unknown>) => {
    return{ 
        type: actionTypes.EDIT_ITEM, 
        item: item 
    }
}
export const setTitle = (title: Record<string, unknown>) => {
    return{ 
        type: actionTypes.SET_TITLE, 
        title: title 
    }
}
export const setError = (error: Record<string, unknown>) => {
    return{ 
        type: actionTypes.SET_ERROR, 
        error: error 
    }
}
export const setItem = (item: Record<string, unknown>) => {
    return{ 
        type: actionTypes.SET_ITEM, 
        item: item 
    }
}
export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}
