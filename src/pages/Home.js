import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselMulti from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import cn from 'classnames';

import '../assets/css/home.css';
import drops from '../assets/img/new_home/drops.png';
import tools from '../assets/img/new_home/tools.png';
import liveAuctions from '../assets/img/new_home/live-auction.png';
import featuredArt from '../assets/img/new_home/featured-art.png';
import printNft from '../assets/img/new_home/print-nft.png';
import learnMore from '../assets/img/new_home/learn-more.png';
import topArtists from '../assets/img/new_home/top-artists.png';
import topCollectors from '../assets/img/new_home/top-collectors.png';
import verticalCarousel from '../assets/img/new_home/vertical-carousel.png';
import verticalCarouselTopArrow from '../assets/img/new_home/vertical-carousel-top-arrow.png';
import verticalCarouselDownArrow from '../assets/img/new_home/vertical-carousel-down-arrow.png';
import verticalCarouselDesc from '../assets/img/new_home/vertical-carousel-des.png';
import author1 from '../assets/img/home/author.png';
import author2 from '../assets/img/new_home/auction-2-avatar.png';
import author3 from '../assets/img/new_home/auction-3-avatar.png';
import drop1 from '../assets/img/new_home/drops-1.png';
import drop2 from '../assets/img/new_home/drops-2.png';
import drop3 from '../assets/img/new_home/drops-3.png';
import auction1 from '../assets/img/new_home/auction-1.png';
import auction2 from '../assets/img/new_home/auction-2.png';
import auction3 from '../assets/img/new_home/auction-3.png';
import carousel1 from '../assets/img/new_home/sec-carousel-1.png';
import carousel2 from '../assets/img/new_home/sec-carousel-2.png';
import carousel3 from '../assets/img/new_home/sec-carousel-3.png';
import carousel4 from '../assets/img/new_home/sec-carousel-4.png';
import carousel5 from '../assets/img/new_home/sec-carousel-5.png';
import featured1 from '../assets/img/home/photo1.png';
import artist1 from '../assets/img/new_home/top-artists-1.png';
import artist2 from '../assets/img/new_home/top-artists-2.png';
import artist3 from '../assets/img/new_home/top-artists-3.png';
import avatar1 from '../assets/img/new_home/top-artists-1-avatarc.png';
import avatar2 from '../assets/img/new_home/top-artists-2-avatarc.png';
import avatar3 from '../assets/img/new_home/top-artists-3-avatarc.png';
import collector1 from '../assets/img/new_home/top-collectors-1.png';
import collector2 from '../assets/img/new_home/top-collectors-2.png';
import collector3 from '../assets/img/new_home/top-collectors-3.png';
import collector4 from '../assets/img/new_home/top-collectors-4.png';
import slide1 from '../assets/img/new_home/header.png';
import home_feature_2 from '../assets/img/home/home-feature-2.png';

const drop_list = [
    {
        id: 1,
        profile_image: drop1,
        author: author1,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 2,
        realPrice: "7,809",
        endBlocks: "571",
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
    {
        id: 2,
        profile_image: drop2,
        author: author2,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 1.2,
        realPrice: "7,809",
        endBlocks: "1,151",
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
    {
        id: 3,
        profile_image: drop3,
        author: author3,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 5,
        realPrice: "7,809",
        endBlocks: "571",
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
];

const auction_list = [
    {
        id: 1,
        profile_image: auction1,
        author: author1,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 2,
        realPrice: "7,809",
        endBlocks: "571",
        days: 0,
        hours: 0,
        minutes: 44,
        seconds: 40
    },
    {
        id: 2,
        profile_image: auction2,
        author: author2,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 1.2,
        realPrice: "4,686",
        endBlocks: "1,151",
        days: 0,
        hours: 4,
        minutes: 11,
        seconds: 40
    },
    {
        id: 3,
        profile_image: auction3,
        author: author3,
        title: "CRYPTOWHALE IS RISING",
        coinPrice: 5,
        realPrice: "19,524",
        endBlocks: "571",
        days: 2,
        hours: 1,
        minutes: 38,
        seconds: 40
    },
];

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
};

class Home extends Component {
    constructor() {
        super();
    }

    render_auction_item = (props) => {
        return (
            <div className="auction-item">
                <div className={cn("reserve-met", 
                                    {"reserve-met-background" : props.id === 1}, 
                                    {"reserve-met-background" : props.id === 2}, 
                                    {"reserve-met-background" : props.id === 3})}>
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
                                    {"reserve-met-background" : props.id === 1}, 
                                    {"reserve-met-background" : props.id === 2}, 
                                    {"reserve-met-background" : props.id === 3})}>
                    <div className="author-avatar">
                        <img className="img-responsive" src={props.author} />
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
                <Carousel showThumbs={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true} showIndicators={false} showArrows={false}>
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
                <div className="drop-subscription">
                    <div className="img-container">
                        <img className="img-responsive" src={drops} />
                    </div>
                    <div className="subscription">
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="auction-content">
                    {
                        drop_list.map(drop => {
                            return this.render_auction_item(drop);
                        })
                    }
                </div>
                <div className="live-auctions">
                    <div className="img-container">
                        <img className="img-responsive" src={liveAuctions} />
                    </div>
                </div>
                <div className="auction-content">
                    {
                        auction_list.map(auction => {
                            return this.render_auction_item(auction);
                        })
                    }
                </div>
                <div className="tools">
                    <div className="img-container">
                        <img className="img-responsive" src={tools} />
                    </div>
                </div>
                <div className="featured-art-title">
                    <div className="img-container">
                        <img className="img-responsive" src={featuredArt} />
                    </div>
                </div>
                <div className="featured-content">
                    <div className="featured-item">
                        <div>
                            <img className="img-responsive" src={featured1} />
                        </div>
                        <div className="color-light-yellow featured-art-name">EQUINOX THE PERCUEL</div>
                    </div>
                    <div className="featured-item">
                        <div>
                            <img className="img-responsive" src={home_feature_2} />
                        </div>
                        <div className="color-light-yellow featured-art-name">HACKATAO X CHRISTIE'S: HACK OF A BEAR</div>
                    </div>
                </div>
                <div className="nfts">
                    <div className="img-container">
                        <img className="img-responsive" src={printNft} />
                    </div>
                        <CarouselMulti 
                            responsive={responsive}
                            arrows={true}
                            autoPlay={true}
                        >
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel1} />
                                <div className="carousel-name"><span>BITBONES</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel2} />
                                <div className="carousel-name"><span>RIVERMEN</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel3} />
                                <div className="carousel-name"><span>CRYPTOWHALEIS RISING</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel4} />
                                <div className="carousel-name"><span>FOLIA</span></div>
                            </div>                        
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel5} />
                                <div className="carousel-name"><span>ATARI ZED</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel1} />
                                <div className="carousel-name"><span>BITBONES</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel2} />
                                <div className="carousel-name"><span>RIVERMEN</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel3} />
                                <div className="carousel-name"><span>CRYPTOWHALEIS RISING</span></div>
                            </div>
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel4} />
                                <div className="carousel-name"><span>FOLIA</span></div>
                            </div>                        
                            <div className="img-container carousel-colulmn">
                                <img className="img-responsive width-100" src={carousel5} />
                                <div className="carousel-name"><span>ATARI ZED</span></div>
                            </div>
                        </CarouselMulti>                        
                </div>
                <div className="top-artists">
                    <div className="img-container">
                        <img className="img-responsive" src={topArtists} />
                    </div>
                </div>
                <div className="top-content">
                    <div className="top-item">
                        <div>
                            <img className="img-responsive" src={artist1} />
                        </div>
                        <div className="top-item-caption">
                            <div>
                                <img className="img-responsive" src={avatar1} />
                            </div>
                        </div>
                    </div>
                    <div className="top-item">
                        <div>
                            <img className="img-responsive" src={artist2} />
                        </div>
                        <div className="top-item-caption">
                            <div>
                                <img className="img-responsive" src={avatar2} />
                            </div>
                        </div>
                    </div>
                    <div className="top-item">
                        <div>
                            <img className="img-responsive" src={artist3} />
                        </div>
                        <div className="top-item-caption">
                            <div>
                                <img className="img-responsive" src={avatar3} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="learn-more">
                    <div className="img-container">
                    <img className="img-responsive" src={learnMore} />
                    </div>
                    <div className="learn-more-subscription">                        
                        <button>LEARN MORE</button>
                    </div>
                </div>
                <div className="top-collectors-title">
                    <div className="img-container">
                        <img className="img-responsive" src={topCollectors} />
                    </div>
                </div>
                <div className="top-collectors-content">
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector1} />
                        </div>
                        <div className="collector-item-caption">
                            <div>NFT_CRY</div>
                        </div>
                    </div>
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector2} alt="collector item" />
                        </div>
                        <div className="collector-item-caption">
                            <div className="text-align-center">SUPERWORK</div>
                        </div>
                    </div>
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector3} />
                        </div>
                        <div className="collector-item-caption">
                            <div>ART</div>
                        </div>
                    </div>
                    <div className="collector-item">
                        <div>
                            <img className="img-responsive" src={collector4} />
                        </div>
                        <div className="collector-item-caption">
                            <div>DI_487</div>
                        </div>
                    </div>
                </div>
                <div className="create-nft">
                    <div class="vertical-carousel">
                        <div className="img-container">
                            <img className="img-responsive" src={verticalCarousel} />
                        </div>
                        <div className="up-down">
                            <button><img className="img-responsive" src={verticalCarouselTopArrow} /></button>
                            <button><img className="img-responsive" src={verticalCarouselDownArrow} /></button>
                        </div>
                    </div>
                    <div className="img-container">
                        <img className="img-responsive" src={verticalCarouselDesc} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;