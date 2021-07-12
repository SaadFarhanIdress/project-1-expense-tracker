import { createContext, useReducer } from "react"
import appSettings from "../appSettings";
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    error: null,
    loading: true,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function getTransactions() {
        axios.get(`${appSettings.url}/posts`)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: 'GET_TRANSACTIONS',
                        payload: res.data.docs
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: 'TRANSACTION_ERROR',
                    payload: err
                })
            })
    }

    function deleteTransaction(id) {
        axios.delete(`${appSettings.url}/posts/${id}`)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: 'DELETE_TRANSACTION',
                        payload: id
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: 'TRANSACTION_ERROR',
                    payload: err
                });
            })
    }

    function addTransaction(transaction) {
        axios.post(`${appSettings.url}/posts`, transaction)
            .then(res => {
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: res.data.doc
                })
            })
            .catch(err => {
                dispatch({
                    type: 'TRANSACTION_ERROR',
                    payload: err
                });
            })
    }

    return (
        <GlobalContext.Provider value={{
            // functions
            deleteTransaction,
            addTransaction,
            getTransactions,
            // states
            transactions: state.transactions,
            loading: state.loading,
            error: state.error
        }}>
            {children}
        </GlobalContext.Provider>
    )
}