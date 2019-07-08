import fetch from 'cross-fetch'

export const REQUEST_WATCHLIST = 'REQUEST_WATCHLIST'
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST'
export const REQUEST_ALLOCATIONS = 'REQUEST_ALLOCATIONS'
export const RECEIVE_ALLOCATIONS = 'RECEIVE_ALLOCATIONS'
export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'

export function fetchAllocationsAndWatchList(userId) {
    return dispatch => {
        dispatch(fetchWatchList(userId))
        dispatch(fetchAllocations(userId))
    }
}

function receiveWatchList(json) {
    console.log('receive watch');
    return {
        type: RECEIVE_WATCHLIST,
        items: json
      }
}

function requestWatchList(userId) {
    console.log('request watch');
    return {
        type: REQUEST_WATCHLIST,
        userId
      }
}

export function fetchWatchList(userId) {
    return function(dispatch) {
        dispatch(requestWatchList(userId))
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
    console.log('receive allocations');
    return {
        type: RECEIVE_ALLOCATIONS,
        items: json
      }
}

function requestAllocations(userId) {
    console.log('request allocations');
    return {
        type: REQUEST_ALLOCATIONS,
        userId
      }
}

export function fetchAllocations(userId) {
    return function(dispatch) {
        dispatch(requestAllocations(userId))
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

function requestTransactions(userId) {
    return {
        type: REQUEST_TRANSACTIONS,
        userId
      }
}

export function fetchTransactions(userId) {
    return function(dispatch) {
        dispatch(requestTransactions(userId))
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
