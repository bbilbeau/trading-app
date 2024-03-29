import React, {Component} from "react";
import {formatDate, formatPrice} from './Utils';

class Transaction extends Component {

    render() {

        var sideClassName = "stock-transactions__grid-text";
        sideClassName += this.props.side.toUpperCase() == 'SELL' ? " stock-transactions__grid-cell-sell" : " stock-transactions__grid-cell-buy";

        return <div className="stock-transactions__grid-row">
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{formatDate(this.props.date)}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.symbol}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.amount}</span></div>
            <div className="stock-transactions__grid-cell"><span className={sideClassName}>{this.props.side}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{formatPrice(this.props.tickPrice)}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{formatPrice(this.props.cost)}</span></div>
        </div>;
    }
}

export default Transaction