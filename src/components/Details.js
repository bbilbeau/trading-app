import React from "react";

function Details() {
    return(
        <div>
            <section class="stock-list">
            <div class="stock-list__grid">
                <div class="stock-list__grid-row">
                    <div class="stock-list__grid-cell stock-list__grid-cell--txt-blue">&#x25BC;</div>
                    <div class="stock-list__grid-cell">AAPL</div>
                    <div class="stock-list__grid-cell">253.4</div>
                    <div class="stock-list__grid-cell">
                        <a><span class="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                    <div class="stock-list__grid-cell">
                        <a><span class="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                    <div class="stock-list__grid-cell">35</div>
                </div>
            </div>
        </section>
        <section class="stock-graph full-width">
            <div id="stockGraphContainer" class="stock-graph__container"></div>
        </section>
        <section class="stock-transactions full-width">
            <div class="stock-transactions__grid-row">
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">Transaction ID</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">direction</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">price</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
            </div>
            <div class="stock-transactions__grid-row">
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">tr3</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">AAPL</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">1</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-cell-sell">SELL</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">256</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">256</span></div>
            </div>
            <div class="stock-transactions__grid-row">
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">tr1</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">AAPL</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">10</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-cell-buy">BUY</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">245</span></div>
                <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">2450</span></div>
            </div>
        </section>

        <div class="modal modal__buy">
            <div class="modal__overlay"></div>
            <div class="modal__content modal__content--large">
                <div class="modal__close">x</div>
                <h2 class="modal__h2">Buy stock</h2>
                <select class="modal__dropdown">
                    <option value="AMZN">Amazon</option>
                    <option value="DSNY">Disney</option>
                    <option value="HULU">Hulu</option>
                    <option value="NTFLX">Netflix</option>
                </select>

                <input class="modal__number-box" type="number" name="quantity" placeholder="enter amount" />

                <button class="modal__btn">Buy</button>
            </div>
        </div>

        <div class="modal modal__sell">
            <div class="modal__overlay"></div>
            <div class="modal__content modal__content--large">
                <div class="modal__close">x</div>
                <h2 class="modal__h2">Sell stock</h2>
                <select class="modal__dropdown">
                    <option value="AMZN">Amazon</option>
                    <option value="DSNY">Disney</option>
                    <option value="HULU">Hulu</option>
                    <option value="NTFLX">Netflix</option>
                </select>

                <input class="modal__number-box" type="number" name="quantity" placeholder="enter amount" />

                <button class="modal__btn">Sell</button>
            </div>
        </div>
        </div>
    );
}

export default Details;