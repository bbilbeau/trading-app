import React, {Component} from "react"
import AddWatchModal from './AddWatchModal'
import WatchList from './WatchList'
import BuySellModal from './BuySellModal'
import TransactionList from "./TransactionList"
import PriceChart from './PriceChart'
import { connect } from "react-redux"
import {fetchStockList} from "../actions/actions" 

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayAddWatch: false,
            displayBuySell: false
        };

        this.openAddWatchModal = this.openAddWatchModal.bind(this);
        this.closeAddWatchModal = this.closeAddWatchModal.bind(this);
        this.openBuySellModal = this.openBuySellModal.bind(this);
        this.closeBuySellModal = this.closeBuySellModal.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchStockList());
    }

    openAddWatchModal() {
        this.setState(state => ({
            ...state,
            displayAddWatch: true
          }));
    }

    closeAddWatchModal() {
        this.setState(state => ({
            ...state,
            displayAddWatch: false
          }));
    }

    openBuySellModal(buySellAction, buySellStock) {
        this.setState(state => ({
            ...state,
            displayBuySell: true,
            buySellAction: buySellAction,
            buySellStock: buySellStock
          }));
    }

    closeBuySellModal() {
        this.setState(state => ({
            ...state,
            displayBuySell: false
          }));
    }

    render() {
        return <div>
                <section className="stock-list">
                <h2 className="stock-list__title">Stocks that I follow <a><span className="stock-list__btn stock-list__btn--add" onClick={this.openAddWatchModal}>+</span></a></h2>
                <div className="modal" style={{display: this.state.displayAddWatch ? "block" : "none"}}>
                    <AddWatchModal closeModal={this.closeAddWatchModal}/>
                </div>
                <div className="stock-list__grid">
                    <WatchList openBuySell={this.openBuySellModal} />
                </div>
                </section>
                <section className="stock-graph">
                    <div id="stockGraphContainer" className="stock-graph__container">
                        <PriceChart stock="ACME" />
                    </div>
                </section>
                <section className="stock-transactions full-width">
                    <TransactionList />
                </section>

                <div className="modal" style={{display: this.state.displayBuySell ? "block" : "none"}}>
                    <BuySellModal action={this.state.buySellAction} stock={this.state.buySellStock} closeModal={this.closeBuySellModal}/>
                </div>
        </div>;
    }
  }

  export default connect()(Home);