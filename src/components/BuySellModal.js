import React, {Component} from "react";
import { connect } from "react-redux";
import { postTransaction} from '../actions/actions'

class BuySellModal extends Component {

    constructor(props){
        super(props);

        this.state = { transactionAmount: 0.00 }
        this.handleChange = this.handleChange.bind(this);
        this.postTransaction = this.postTransaction.bind(this);
    }

    handleChange(e) {
        this.setState({transactionAmount: e.target.value});
    }

    postTransaction() {
        var transaction = {
            symbol: this.props.stock,
            side: this.props.action,
            amount: this.state.transactionAmount
        };

        this.props.dispatch(postTransaction("benjamin", transaction));
        this.props.closeModal();
    }

    render() {
        return <div>
            <div className="modal__overlay"></div>
            <div className="modal__content modal__content--large">
                <div className="modal__close" onClick={this.props.closeModal}>x</div>
                <h2 className="modal__h2">{this.props.action == 'buy' ? "Buy" : "Sell"} stock for {this.props.stock}</h2>

                <input className="modal__number-box" type="number" name="quantity" placeholder="enter amount" onChange={this.handleChange} />

                <button className="modal__btn" onClick={this.postTransaction}>{this.props.action == 'buy' ? "Buy" : "Sell"}</button>
            </div>
        </div>;
    }
}

export default connect()(BuySellModal);