import React, { Component } from 'react';
import "../assets/css/filter.css";

class Filter extends Component {
    render() {
        return (
            <div className="filter font-family-1">
                <div className="title">FILTER</div>
                <div className="status">STATUS</div>
                <div className="status-grid-system">
                    <div className="horizontal-line"></div>
                    <div className="status-left">
                        <div className="status-property">BUY NOW</div>
                        <div className="status-property">NOW</div>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="status-right">
                        <div className="status-property">AUCTION</div>
                        <div className="status-property">HAS OFFERS</div>
                    </div>
                </div>
                <div className="market-price">PRICE</div>
                <div className="price-grid-system">
                    <div className="price-top">
                        <div className="price-property">MIN</div>
                        <div className="price-horizontal-line"></div>
                        <div className="price-property">MAX</div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="price-property">APPLY</div>
                </div>
                <div className="market-collecitons">COLLECTIONS</div>
                <div className="status-property">SEARCH BOX</div>
                <div className="space"></div>
                <div className="status-property">TOP SELLER 1</div>
                <div className="collection-horizontal-line"></div>
                <div className="force-letter">THOUSIMGRL</div>
                <div className="status-property font-family-2 mt-17">TOP SELLER 2</div>
                <div className="collection-horizontal-line"></div>
                <div className="force-letter">CATLAND METAVERSE</div>
                <div className="status-property mt-17">TOP SELLER 3</div>
                <div className="collection-horizontal-line"></div>
                <div className="force-letter">ZEEKAY7</div>
                <div className="status-property mt-17">TOP SELLER 4</div>
                <div className="collection-horizontal-line"></div>
                <div className="force-letter">DCRYPTO88</div>
                <div className="status-property mt-17">TOP SELLER 5</div>
                <div className="collection-horizontal-line"></div>
                <div className="force-letter">NOT BORED LIONS</div>
                <div className="market-chains">CHAINS</div>
                <div className="market-chain-property">ETHEREUM</div>
                <div className="market-chain-property">POLYGON</div>
                <div className="market-chain-property">KLAYTN</div>
                <div className="market-sale">ON SALE IN</div>
                <div className="market-chain-property">ETH</div>
                <div className="market-chain-property">WETH</div>
                <div className="market-chain-property">DAI</div>
                <div className="market-chain-property">USDC</div>
                <div className="market-sale">SIZE</div>
                <div className="market-sale">TYPE</div>
            </div>
        );
    }
}

export default Filter;