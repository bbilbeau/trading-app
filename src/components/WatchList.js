import React, {Component} from "react";
import { connect } from "react-redux";
import Watch from "./Watch";
import {fetchAllocationsAndWatchList} from "../actions/actions" 

class WatchList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchAllocationsAndWatchList("benjamin"));
    }

    lookupQuantity(symbol) {
        return this.props.allocations[symbol];
    }

    render(){
        return <div>
        {this.props.watchList.map(w => 
            <Watch key={w.symbol} symbol={w.symbol} quantity={this.lookupQuantity(w.symbol)} openBuySell={this.props.openBuySell} />
        )}
        </div>
    }
}

WatchList.defaultProps = {
    watchList: [],
    allocations: {}
}

function mapStateToProps(state) {

    var allocations = {};
    state.allocationState.allocations.map(a => allocations[a.symbol] = a.amount);

    return { 
        watchList: state.watchState.watchList,
        allocations: allocations 
    }
}

export default connect(mapStateToProps)(WatchList);
