import React, {Component} from "react";
import { connect } from "react-redux";
import {removeWatch} from "../actions/actions" 

class Watch extends Component{

    constructor(props) {
        super(props);
        this.removeWatch = this.removeWatch.bind(this);
    }

    removeWatch() {
        this.props.dispatch(removeWatch("benjamin", this.props.symbol))
    }

    render() {
        return <div className="stock-list__grid-row">
            <div className="stock-list__grid-cell"><a><span className="stock-list__btn stock-list__btn--remove" onClick={this.removeWatch}>-</span></a></div>
            <div className="stock-list__grid-cell">{this.props.symbol}</div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && this.props.quantity}</div>
            <div className="stock-list__grid-cell"><a><span className="btn-transaction btn-transaction--buy">buy</span></a></div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
            }
            </div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && this.props.quantity}</div>
        </div>;
    }
}

export default connect()(Watch);