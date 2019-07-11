import { combineReducers } from 'redux'

import {
    RECEIVE_WATCHLIST,
    WATCH_REMOVED,
    WATCH_ADDED,
    TRANSACTION_POSTED,
    RECEIVE_ALLOCATIONS,
    RECEIVE_LIQUIDITY,
    RECEIVE_TRANSACTIONS,
    RECEIVE_STOCKLIST,
    RECEIVE_TODAYSTOCKPRICE,
    RECEIVE_CURRENTSTOCKPRICE,
    UPDATE_SELECTEDSTOCK,
    UPDATE_SELECTEDSTOCKFROMWATCHLIST
} from '../actions/actions'

function watchListReducer(state = {watchList:[]}, action) {
  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return Object.assign({}, state, {
        watchList: action.items
      })
    case WATCH_ADDED:
      return {
        ...state,
        watchList: [...state.watchList, action.item]
      }
    case WATCH_REMOVED:
      return {
        ...state,
        watchList: state.watchList.filter(w => w.symbol != action.item)
      }
    default:
      return state
  }
}

function allocationsReducer(state = {allocations:[], liquidity:0}, action) {
  switch (action.type) {
    case RECEIVE_ALLOCATIONS:
      return Object.assign({}, state, {
        allocations: action.items
      })
    case RECEIVE_LIQUIDITY:
      return Object.assign({}, state, { 
        liquidity: action.amount
      })
    default:
      return state
  }
}

function transactionsReducer(state = {transactions:[]}, action) {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        transactions: action.items
      })
    default:
      return state
  }
}

function stockReducer(state = {stockList:[], stockPriceToday:[], selectedStock: null, symbol: null}, action) {
  switch (action.type) {
    case RECEIVE_STOCKLIST:
      return Object.assign({}, state, {
        stockList: action.items
      })
    case RECEIVE_TODAYSTOCKPRICE:
      return Object.assign({}, state, {
        symbol: action.symbol,
        stockPriceToday: action.items
      })
    case UPDATE_SELECTEDSTOCK:
        return Object.assign({}, state, {
          selectedStock: action.item
        })
    case UPDATE_SELECTEDSTOCKFROMWATCHLIST:
      if (state.selectedStock != null || typeof(action.items) === 'undefined' || action.items.length == 0) return state;
      return Object.assign({}, state, {
        selectedStock: action.items.items[0].symbol
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
    watchState: watchListReducer,
    allocationState: allocationsReducer,
    transactionState: transactionsReducer,
    stockState: stockReducer
})

export default rootReducer