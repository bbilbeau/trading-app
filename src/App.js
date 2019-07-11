import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles.css';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import Home from "./components/Home";
import Assets from "./components/Assets";
import Details from "./components/Details";
import BuySellModal from './components/BuySellModal';
import { connect } from "react-redux"
import {
  fetchStockList, 
  fetchAllocationsAndWatchList,
  fetchLiquidity,
  fetchTransactions
} from "./actions/actions" 

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        displayBuySell: false,
        userId: "benjamin"
      };
      

      this.openBuySellModal = this.openBuySellModal.bind(this);
      this.closeBuySellModal = this.closeBuySellModal.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchStockList());
    this.props.dispatch(fetchLiquidity(this.state.userId))
    this.props.dispatch(fetchAllocationsAndWatchList(this.state.userId));
    this.props.dispatch(fetchTransactions(this.state.userId));
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
    return (
      <Router>
          <header className="main-header">
            <nav>
              <ul className="menu">
                <li className="menu__list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu__list-item">
                  <Link to="/assets">Assets</Link>
                </li>
                <li className="menu__list-item">
                  <Link to="/details">Details</Link>
                </li>
              </ul>
            </nav>
          </header>
        <div>
          <Route path="/" exact render={(props) => <Home {...props} openBuySell={this.openBuySellModal} closeBuySell={this.closeBuySellModal} />} />
          <Route path="/assets/" render={(props) => <Assets {...props} openBuySell={this.openBuySellModal} />} />
          <Route path="/details/:stock?" component={Details} />
        </div>
        <div className="modal" style={{display: this.state.displayBuySell ? "block" : "none"}}>
            <BuySellModal action={this.state.buySellAction} stock={this.state.buySellStock} closeModal={this.closeBuySellModal}/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
