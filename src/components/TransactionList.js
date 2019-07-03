import React, {Component} from "react";
import { connect } from "react-redux";
import Transaction from "./Transaction";
import {fetchTransactions} from "../actions/actions" 

class TransactionList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchTransactions("benjamin"));
    }

    render(){
        return <div>
        <div className="stock-transactions__grid-row">
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">direction</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">price</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
    </div>
    {this.props.transactions.map(transaction => 
        <Transaction key={transaction.date} {...transaction} />)}
    </div>;

    }
}

TransactionList.defaultProps = {
    transactions: []
}

function mapStateToProps(state) {
    return { transactions: state.transactionState.transactions }
}

export default connect(mapStateToProps)(TransactionList);