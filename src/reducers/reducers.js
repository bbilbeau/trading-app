import { combineReducers } from 'redux'

import {
    REQUEST_WATCHLIST,
    RECEIVE_WATCHLIST,
    REQUEST_ALLOCATIONS,
    RECEIVE_ALLOCATIONS,
    REQUEST_TRANSACTIONS,
    RECEIVE_TRANSACTIONS
} from '../actions/actions'

function watchListReducer(state = {watchList:[]}, action) {
  switch (action.type) {
    case REQUEST_WATCHLIST:
      return state
    case RECEIVE_WATCHLIST:
      return Object.assign({}, state, {
        watchList: action.items
      })
    default:
      return state
  }
}

function allocationsReducer(state = {allocations:[]}, action) {
  switch (action.type) {
    case REQUEST_ALLOCATIONS:
      return state
    case RECEIVE_ALLOCATIONS:
      return Object.assign({}, state, {
        allocations: action.items
      })
    default:
      return state
  }
}

function transactionsReducer(state = {transactions:[]}, action) {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return state
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        transactions: action.items
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    watchState: watchListReducer,
    allocationState: allocationsReducer,
    transactionState: transactionsReducer
})

export default rootReducer