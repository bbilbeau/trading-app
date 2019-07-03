import { combineReducers } from 'redux'

import {
    REQUEST_WATCH,
    RECEIVE_WATCH,
    REQUEST_TRANSACTIONS,
    RECEIVE_TRANSACTIONS
} from '../actions/actions'

const initialState = {
    transactions: []
};

function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        transactions: action.items
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    transactionState: transactionsReducer
})

export default rootReducer