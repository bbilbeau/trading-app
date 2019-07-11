import React, {Component} from "react";
import { connect } from "react-redux";
import Transaction from "./Transaction";
import {fetchTransactions} from "../actions/actions" 
import {AgGridReact} from 'ag-grid-react';

class TransactionList extends Component {

    /*
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "Date", field: "date", valueFormatter: dateFormatter},
                {headerName: "Stock", field: "symbol"},
                {headerName: "Amount", field: "amount"},
                {headerName: "Direction", field: "side"},
                {headerName: "Price", field: "tickPrice"},
                {headerName: "Total", field: "cost"}
            ]};
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    
        params.api.sizeColumnsToFit();
      };*/

    componentDidMount() {
        
    }

    filterTransactions(transactions) {
        if (typeof(this.props.stockFilter) !== 'undefined' && this.props.stockFilter !== '') 
            return transactions.filter(t => t.symbol.toUpperCase() == this.props.stockFilter.toUpperCase());

        return transactions;
    }

    render(){

        return <div>
        <div className="stock-transactions__grid-row">
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Date</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Stock</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Amount</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Direction</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Price</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Total</span></div>
    </div>
    {this.filterTransactions(this.props.transactions).map(transaction => 
        <Transaction key={transaction.date} {...transaction} />)}
    </div>;

    /*
        return <div style={{height:"350px"}} className="ag-theme-balham">
            <AgGridReact columnDefs={this.state.columnDefs} rowData={() => this.filterTransactions(this.props.transactions)} suppressColumnVirtualisation="true" ></AgGridReact>
        </div>;*/
    }
}

function dateFormatter(params) {
    return (new Date(params.value)).toString('MM/dd/yyyy');
}

TransactionList.defaultProps = {
    transactions: []
}

function mapStateToProps(state) {
    return { transactions: state.transactionState.transactions }
}

export default connect(mapStateToProps)(TransactionList);