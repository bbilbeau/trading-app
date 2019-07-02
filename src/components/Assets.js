import React from "react";

function Assets() {
    return (
        <div>
            <section class="stock-transactions full-width">
                <div class="stock-transactions__grid-row">
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">current price</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
                    <div class="stock-transactions__grid-cell"></div>
                </div>
                <div class="stock-transactions__grid-row">
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">AAPL</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">35</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">253.4</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">8869</span></div>
                    <div class="stock-transactions__grid-cell center">
                        <a><span class="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                </div>
                <div class="stock-transactions__grid-row">
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">GOOG</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">12</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">1005.3</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">12063.6</span></div>
                    <div class="stock-transactions__grid-cell center">
                        <a><span class="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                </div>
                <div class="stock-transactions__grid-row">
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">Liquidity</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">100000</span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text"></span></div>
                    <div class="stock-transactions__grid-cell"><span class="stock-transactions__grid-text">100000</span></div>
                    <div class="stock-transactions__grid-cell center"></div>
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

export default Assets;