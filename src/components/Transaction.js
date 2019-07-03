import React, {Component} from "react";

class Transaction extends Component{

    render() {
        return <div className="stock-transactions__grid-row">
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.symbol}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.amount}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-cell-sell">{this.props.side}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.tickPrice}</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.cost}</span></div>
        </div>;
    }
}

export default Transaction