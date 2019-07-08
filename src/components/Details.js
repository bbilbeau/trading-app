import React, {Component} from "react";
import TransactionList from "./TransactionList";

class Details extends Component {

    render() {
        return <div>
                <section className="stock-list">
                <div className="stock-list__grid">
                    <div className="stock-list__grid-row">
                        <div className="stock-list__grid-cell stock-list__grid-cell--txt-blue">&#x25BC;</div>
                        <div className="stock-list__grid-cell">AAPL</div>
                        <div className="stock-list__grid-cell">253.4</div>
                        <div className="stock-list__grid-cell">
                            <a><span className="btn-transaction btn-transaction--buy">buy</span></a>
                        </div>
                        <div className="stock-list__grid-cell">
                            <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
                        </div>
                        <div className="stock-list__grid-cell">35</div>
                    </div>
                </div>
            </section>
            <section className="stock-graph full-width">
                <div id="stockGraphContainer" className="stock-graph__container"></div>
            </section>
            <section className="stock-transactions full-width">
                <TransactionList stockFilter={this.props.match.params.stock} />
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

export default Details;