import fetch from 'cross-fetch'

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST'
export const WATCH_REMOVED = 'WATCH_REMOVED'
export const WATCH_ADDED = 'WATCH_ADDED'
export const TRANSACTION_POSTED = 'TRANSACTION_POSTED'
export const RECEIVE_ALLOCATIONS = 'RECEIVE_ALLOCATIONS'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
export const RECEIVE_STOCKLIST = 'RECEIVE_STOCKLIST'

export function fetchAllocationsAndWatchList(userId) {
    return dispatch => {
        dispatch(fetchWatchList(userId))
        dispatch(fetchAllocations(userId))
    }
}

function receiveWatchList(json) {
    return {
        type: RECEIVE_WATCHLIST,
        items: json
      }
}

export function fetchWatchList(userId) {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/userdata/watchlist',
        {
          headers: { "userid": userId }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json => dispatch(receiveWatchList(json)))
    }
}

function receiveAllocations(json) {
    return {
        type: RECEIVE_ALLOCATIONS,
        items: json
      }
}

export function fetchAllocations(userId) {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/userdata/allocations',
        {
          headers: { "userid": userId }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json => dispatch(receiveAllocations(json)))
    }
}

function receiveTransactions(json) {
    return {
        type: RECEIVE_TRANSACTIONS,
        items: json
      }
}

export function fetchTransactions(userId) {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/transactions',
        {
            headers: { 
                "userid": userId 
            }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json => dispatch(receiveTransactions(json)))
    }
}

function watchRemoved(symbol) {
    return {
        type: WATCH_REMOVED,
        item: symbol
    }
}

export function removeWatch(userId, symbol) {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/userdata/watchlist',
        {
            headers: { "userid": userId, 'Content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify({
                symbol: symbol,
                action: 'REMOVE'
            })
        })
        .then(dispatch(watchRemoved(symbol)))
    }
}

function watchAdded(symbol) {
    return {
        type: WATCH_ADDED,
        item: { symbol: symbol } 
    }
}

export function addWatch(userId, symbol) {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/userdata/watchlist',
        {
            headers: { "userid": userId, 'Content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify({
                symbol: symbol,
                action: 'ADD'
            })
        })
        .then(dispatch(watchAdded(symbol)))
    }
}

function transactionPosted() {
    return {
        type: TRANSACTION_POSTED
    }
}

export function postTransaction(userId, transaction) {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/transactions',
        {
            headers: { "userid": userId, 'Content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify({
                symbol: transaction.symbol,
                side: transaction.side.toUpperCase(),
                amount: transaction.amount
            })
        })
        .then(dispatch(transactionPosted))
    }
}

function receiveStockList(json) {
    return {
        type: RECEIVE_STOCKLIST,
        items: json
    }
}

export function fetchStockList() {
    return function(dispatch) {
        return fetch('http://demomocktradingserver.azurewebsites.net/stocks')
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json => dispatch(receiveStockList(json)))
    }
}