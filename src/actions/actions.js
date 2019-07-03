import fetch from 'cross-fetch'

export const REQUEST_WATCH = 'REQUEST_WATCH'
export const RECEIVE_WATCH = 'RECEIVE_WATCH'
export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'

function receiveWatch(json) {
    return {
        type: RECEIVE_WATCH,
        items: json.data
      }
}

function requestWatch(userId) {
    return {
        type: REQUEST_WATCH,
        userId
      }
}

export function fetchWatch(userId) {
    return function(dispatch) {
        dispatch(requestWatch(userId))
        return fetch(`http://demomocktradingserver.azurewebsites.net/userdata/watchlist`,
        {
          headers: { "userid": userId }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json => dispatch(receiveWatch(json)))
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
