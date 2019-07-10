import React, {Component} from "react";
import { connect } from "react-redux";
import {removeWatch} from "../actions/actions" 
import {selectStock} from "../actions/actions"
import {formatPrice} from './Utils';

class Watch extends Component{

    constructor(props) {
        super(props);
        this.removeWatch = this.removeWatch.bind(this);
    }

    removeWatch() {
        this.props.dispatch(removeWatch("benjamin", this.props.symbol))
    }

    updateSelectedStock(symbol)
    {
        this.props.dispatch(selectStock(symbol))
    }

    render() {
        return <div className="stock-list__grid-row">
            <div className="stock-list__grid-cell"><a><span className="stock-list__btn stock-list__btn--remove" onClick={this.removeWatch}>-</span></a></div>
            <div className="stock-list__grid-cell" onClick={() => this.updateSelectedStock(this.props.symbol)}>{this.props.symbol}</div>
            <div className="stock-list__grid-cell">{this.props.price > 0 && formatPrice(this.props.price)}</div>
            <div className="stock-list__grid-cell"><a><span className="btn-transaction btn-transaction--buy" onClick={() => this.props.openBuySell('buy', this.props.symbol)}>buy</span></a></div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && <a><span className="btn-transaction btn-transaction--sell" onClick={() => this.props.openBuySell('sell', this.props.symbol)}>sell</span></a>}</div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && this.props.quantity}</div>
        </div>;
    }
}

export default connect()(Watch);