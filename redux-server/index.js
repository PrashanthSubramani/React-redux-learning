const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const logger = reduxLogger.createLogger();
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ""
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action creators
const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state, // Spread the existing state
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state, // Spread the existing state
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
};

// Thunk function for fetching users
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(fetchUserSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};

// Create Redux store with thunk middleware applied
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

// Subscribe to the store to see updates (optional)
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch the fetchUsers action to initiate the data fetching process
store.dispatch(fetchUsers());
