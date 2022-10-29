const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
}

const reducerIF = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false,
        }
    } else if (action.type === 'CONFIRM') {
        return {
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        }
    } else {
        return {
            ...state,
        }
    }
 }

const reducerSWITCH = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CONFIRM':
            return {
                ...state,
                error: false,
                loading: false,
                confirmed: true,
            };
        default:
            return {
                ...state,
            };
    }
 }

const reducerOBJECT = (state) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
 })
  
 const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state)[action.type];
    } else {
        return {
            ...state,
        }
    }
 }