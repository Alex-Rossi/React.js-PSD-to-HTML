import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import cn from 'classnames';

import '../assets/css/home.css';
import live_auctions from '../assets/img/home/live-auctions.png';
import featured_art from '../assets/img/home/featured-art.png';
import top_artist from '../assets/img/home/top-artist.png';
import top_collectors from '../assets/img/home/top-collectors.png';
import author from '../assets/img/home/author.png';
import item1 from '../assets/img/home/home1.png';
import item2 from '../assets/img/home/home2.png';
import item3 from '../assets/img/home/home3.png';
import featured1 from '../assets/img/home/photo1.png';
import artist1 from '../assets/img/home/artist1.png';
import artist2 from '../assets/img/home/artist2.png';
import artist3 from '../assets/img/home/artist3.png';
import collector1 from '../assets/img/home/collector1.png';
import collector2 from '../assets/img/home/top-collector2.png';
import collector3 from '../assets/img/home/top-collector3.png';
import collector4 from '../assets/img/home/top-collector4.png';
import slide1 from '../assets/img/home/slide1.png';
import home_feature_2 from '../assets/img/home/home-feature-2.png';

const auction_list = [
    {
        id: 1,
        profile_image: item1,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 2,
        realPrice: "7,809",
        endBlocks: 571,
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
    {
        id: 2,
        profile_image: item2,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 2,
        realPrice: "7,809",
        endBlocks: 571,
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
    {
        id: 3,
        profile_image: item3,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 2,
        realPrice: "7,809",
        endBlocks: 571,
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
];

class Home extends Component {
    constructor() {
        super();
    }

    render_auction_item = (props) => {
        return (
            <div className="auction-item">
                <div className={cn("reserve-met", 
                                    {"reserve-met-background-first" : props.id === 1}, 
                                    {"reserve-met-background-second" : props.id === 2}, 
                                    {"reserve-met-background-third" : props.id === 3})}>
                    <div>
                    RESERVE MET
                    </div>
                </div>
                <div>
                    <img className="img-responsive" src={props.profile_image} />
                </div>
                <div className="auction-title">
                    <div>{props.title}</div>
                </div>
                <div className={cn("auction-detail", 
                                    {"reserve-met-background-first" : props.id === 1}, 
                                    {"reserve-met-background-second" : props.id === 2}, 
                                    {"reserve-met-background-third" : props.id === 3})}>
                    <div className="author-avatar">
                        <img className="img-responsive" src={author} />
                    </div>
                    <div className="price">
                        <span>{props.coinPrice}</span>
                        <span className="real-price">[${props.realPrice}]</span>
                    </div>
                    <div className="end-block">
                        AUCTION ENDS IN {props.endBlocks}BLOCKS
                        <i className="fa fa-exclamation-circle"></i>
                    </div>
                    <div className="auction-time">
                        <div className="time-item">
                            <div className="time-value">{props.days}</div>
                            <div className="time-caption">DAYS</div>
                        </div>
                        <div className="time-item">
                            <div className="time-value">{props.hours}</div>
                            <div className="time-caption">HOURS</div>
                        </div>
                        <div className="time-item">
                            <div className="time-value">{props.minutes}</div>
                            <div className="time-caption">MINUTES</div>
                        </div>
                        <div className="time-item">
                            <div className="time-value">{props.seconds}</div>
                            <div className="time-caption">SECONDS</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="home font-family-2">
                <Carousel showThumbs={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true} showIndicators={false}>
                    <div className="slide-item">
                        <img className="img-responsive" src={slide1} />
                    </div>
                    <div className="slide-item">
                        <img className="img-responsive" src={slide1} />
                    </div>
                    <div className="slide-item">
                        <img className="img-responsive" src={slide1} />
                    </div>
                </Carousel>
                <div className="live-auctions">
                    <div className="img-container">
                        <img className="img-responsive" src={live_auctions} />
                    </div>
                    <div className="auction-date">
                        <span>28 JUN</span>
                    </div>
                </div>
                <div className="auction-content">
                    {
                        auction_list.map(auction => {
                            return this.render_auction_item(auction);
                        })
                    }
                </div>
                <div className="featured-art">
                    <div className="img-container">
                        <img className="img-responsive" src={featured_art} />
                    </div>
                    <div className="auction-date">
                        <span>28 JUN</span>
                    </div>
                </div>
                <div className="featured-content">
                    <div className="featured-item">
                        <div>
                            <img className="img-responsive" src={featured1} />
                        </div>
                        <div className="color-pink text-bold">EQUINOX THE PERCUEL</div>
                    </div>
                    <div className="featured-item">
                        <div>
                            <img className="img-responsive" src={home_feature_2} />
                        </div>
                        <div className="color-brown text-bold">HACKATAO X CHRISTIE'S: HACK OF A BEAR</div>
                    </div>
                </div>
                <div className="top-art">
                    <div className="img-container">
                        <img className="img-responsive" src={top_artist} />
                    </div>
                </div>
                <div className="top-content">
                    <div className="top-item">
                        <div>
                            <img className="img-responsive" src={artist1} />
                        </div>
                        <div className="top-item-caption">
                            <div className="top-item-author author-first">
                                <img className="img-responsive" src={author} />
                            </div>
                            <div>BARABASILAB</div>
                        </div>
                    </div>
                    <div className="top-item">
                        <div>
                            <img className="img-responsive" src={artist2} />
                        </div>
                        <div className="top-item-caption">
                            <div className="top-item-author author-second">
                                <img className="img-responsive" src={author} />
                            </div>
                            <div>BARABASILAB</div>
                        </div>
                    </div>
                    <div className="top-item">
                        <div>
                            <img className="img-responsive" src={artist3} />
                        </div>
                        <div className="top-item-caption">
                            <div className="top-item-author author-third">
                                <img className="img-responsive" src={author} />
                            </div>
                            <div>BARABASILAB</div>
                        </div>
                    </div>
                </div>
                <div className="top-collectors">
                    <div className="img-container">
                        <img className="img-responsive" src={top_collectors} />
                    </div>
                </div>
                <div className="top-collectors-content">
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector1} />
                        </div>
                        <div className="collector-item-caption">
                            <div>VK_CRYPTO SAID:</div>
                        </div>
                    </div>
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector2} alt="collector item" />
                        </div>
                        <div className="collector-item-caption">
                            <div className="text-align-center">SUPERRARE PRIMARY NETWORK</div>
                        </div>
                    </div>
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector3} />
                        </div>
                        <div className="collector-item-caption">
                            <div>TIMBER ART WHALE</div>
                        </div>
                    </div>
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector4} />
                        </div>
                        <div className="collector-item-caption">
                            <div>PL STIC DIGESTI N A.7</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;