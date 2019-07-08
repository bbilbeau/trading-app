import React, {Component} from "react";

class Watch extends Component{

    render() {
        return <div className="stock-list__grid-row">
            <div className="stock-list__grid-cell"><a><span className="stock-list__btn stock-list__btn--remove">-</span></a></div>
            <div className="stock-list__grid-cell">{this.props.symbol}</div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && this.props.quantity}</div>
            <div className="stock-list__grid-cell"><a><span className="btn-transaction btn-transaction--buy">buy</span></a></div>
            <div className="stock-list__grid-cell">{this.props.quantity > 0 && <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
            }
            </div>
            <div className="stock-list__grid-cell">35</div>
        </div>;
    }
}

export default Watch