import React, {Component} from "react";
import { connect } from "react-redux";
import Watch from "./Watch";

class WatchList extends Component {

    lookupQuantity(symbol) {
        return this.props.allocations[symbol];
    }

    lookupPrice(symbol) {
        return this.props.prices[symbol];
    }

    render(){
        return <div>
        {this.props.watchList.map(w => 
            <Watch key={w.symbol} symbol={w.symbol} price={this.lookupPrice(w.symbol)} quantity={this.lookupQuantity(w.symbol)} openBuySell={this.props.openBuySell} />
        )}
        </div>
    }
}

WatchList.defaultProps = {
    watchList: [],
    allocations: {},
    prices: {}
}

function mapStateToProps(state) {

    var allocations = {};
    state.allocationState.allocations.map(a => allocations[a.symbol] = a.amount);

    var prices = {};
    state.stockState.stockList.map(s => prices[s.symbol] = s.lastTick.price);
    
    return { 
        watchList: state.watchState.watchList,
        allocations: allocations,
        prices: prices
    }
}

export default connect(mapStateToProps)(WatchList);
