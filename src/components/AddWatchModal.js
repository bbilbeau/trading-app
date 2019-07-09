import React, {Component} from "react";
import { connect } from "react-redux";
import { addWatch } from '../actions/actions'

class AddWatchModal extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addWatch = this.addWatch.bind(this);
    }

    handleChange(e) {
        this.setState({selectedStock: e.target.value});
    }

    addWatch() {
        this.props.dispatch(addWatch("benjamin", this.state.selectedStock));
        this.props.closeModal();
    }

    render() {
        return <div>
        <div className="modal__overlay"></div>
        <div className="modal__content">
            <div className="modal__close" onClick={this.props.closeModal}>x</div>
            <h2 className="modal__h2">Select a new stock to follow</h2>
            <select className="modal__dropdown" onChange={this.handleChange}>{this.props.stockList.map(s => {
                return <option key={s.symbol} value={s.symbol}>{s.name}</option>
            })}
            </select>
            <button className="modal__btn" onClick={this.addWatch}>Add</button>
        </div>
    </div>;
    }
}

AddWatchModal.defaultProps = {
    stockList: []
}

function mapStateToProps(state) {
    return { 
        stockList: state.stockState.stockList
    }
}

export default connect(mapStateToProps)(AddWatchModal);