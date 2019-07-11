import React, {Component} from "react";
import {formatPrice} from "./Utils";

class Asset extends Component {

    render() {
        return <div className="stock-transactions__grid-row">
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.symbol}</span></div>
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.quantity}</span></div>
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.price > 0 && this.props.symbol !== 'Liquidity' && formatPrice(this.props.price)}</span></div>
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{this.props.price > 0 && formatPrice(this.props.price * this.props.quantity)}</span></div>
                    <div className="stock-transactions__grid-cell center">{this.props.quantity > 0 && <a><span className="btn-transaction btn-transaction--sell" onClick={() => this.props.openBuySell('sell', this.props.symbol)}>sell</span></a>}</div>
                </div>;
    }
}

export default Asset;