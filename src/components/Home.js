import React, {Component} from "react";
import AddWatchModal from './AddWatchModal'
import WatchList from './WatchList'
import TransactionList from "./TransactionList"
import { connect } from "react-redux";
import {fetchStockList} from "../actions/actions" 

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {displayAddWatch: false};

        this.toggleAddWatchDisplay = this.toggleAddWatchDisplay.bind(this);
        this.closeAddWatchModal = this.closeAddWatchModal.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchStockList());
    }

    toggleAddWatchDisplay() {
        this.setState(state => ({
            displayAddWatch: !this.state.displayAddWatch
          }));
    }

    closeAddWatchModal() {
        this.setState(state => ({
            displayAddWatch: false
          }));
    }

    render() {
        return <div>
                <section className="stock-list">
                <h2 className="stock-list__title">Stocks that I follow <a><span className="stock-list__btn stock-list__btn--add" onClick={this.toggleAddWatchDisplay}>+</span></a></h2>
                <div className="modal" style={{display: this.state.displayAddWatch ? "block" : "none"}}>
                    <AddWatchModal closeModal={this.closeAddWatchModal}/>
                </div>
                <div className="stock-list__grid">
                    <WatchList />
                </div>
                </section>

                <section className="stock-graph">
                    <div id="stockGraphContainer" className="stock-graph__container"></div>
                </section>
                <section className="stock-transactions full-width">
                    <TransactionList />
                </section>

            <div className="modal modal__buy">
                <div className="modal__overlay"></div>
                <div className="modal__content modal__content--large">
                    <div className="modal__close">x</div>
                    <h2 className="modal__h2">Buy stock</h2>
                    <select className="modal__dropdown">
                        <option value="AMZN">Amazon</option>
                        <option value="DSNY">Disney</option>
                        <option value="HULU">Hulu</option>
                        <option value="NTFLX">Netflix</option>
                    </select>

                    <input className="modal__number-box" type="number" name="quantity" placeholder="enter amount" />

                    <button className="modal__btn">Buy</button>
                </div>
            </div>

            <div className="modal modal__sell">
                <div className="modal__overlay"></div>
                <div className="modal__content modal__content--large">
                    <div className="modal__close">x</div>
                    <h2 className="modal__h2">Sell stock</h2>
                    <select className="modal__dropdown">
                        <option value="AMZN">Amazon</option>
                        <option value="DSNY">Disney</option>
                        <option value="HULU">Hulu</option>
                        <option value="NTFLX">Netflix</option>
                    </select>

                    <input className="modal__number-box" type="number" name="quantity" placeholder="enter amount" />

                    <button className="modal__btn">Sell</button>
                </div>
            </div>
        </div>;
    }
  }

  export default connect()(Home);