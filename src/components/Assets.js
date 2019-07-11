import React, {Component} from "react";
import { connect } from "react-redux";
import Asset from './Asset';

class Assets extends Component {

    lookupPrice(symbol) {
        if (symbol === 'Liquidity') return 1;
        return this.props.prices[symbol];
    }

    render() {
        return <div>
            <section className="stock-transactions full-width">
                <div className="stock-transactions__grid-row">
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Stock</span></div>
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Amount</span></div>
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Current Price</span></div>
                    <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Total</span></div>
                    <div className="stock-transactions__grid-cell"></div>
                </div>
                {this.props.allocations.map(a => 
                <Asset key={a.symbol} symbol={a.symbol} price={this.lookupPrice(a.symbol)} quantity={a.amount} openBuySell={this.props.openBuySell} />
                 )}
            </section>
        </div>;
    }
}

Assets.defaultProps = {
    allocations: [],
    prices: {}
}

function mapStateToProps(state) {

    var prices = {};
    state.stockState.stockList.map(s => prices[s.symbol] = s.lastTick.price);

    var liquidity = {
        symbol: 'Liquidity',
        amount: state.allocationState.liquidity
    }

    return {
        allocations: [...state.allocationState.allocations, liquidity],
        prices: prices
    }
}

export default connect(mapStateToProps)(Assets);