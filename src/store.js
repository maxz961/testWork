import { createStore } from 'redux';

const initialState = {
    isSearchBool: null,
    startAnimation: null,
    bottomSearchPanel: null,
}

function navAction(state = initialState, action) {
    switch(action.type) {
        case 'INPUTSEARCH_CHANGE': {
            return {
                ...state,
                isSearchBool: action.boolean
            }
        }

        case 'STARTANIMATION_CHANGE': {
            return {
                ...state,
                startAnimation: action.boolean
            }
        }

        case 'SEARCHBOTTOM_CHANGE': {
            return {
                ...state,
                bottomSearchPanel: action.boolean
            }
        }

        default: 
            return state
    }
}

const store = createStore(navAction)
export default store