import React, { Component } from 'react';
import '../assets/css/artists.css';
import artistsBrand from '../assets/img/artists/artists1.png';
import artist1 from '../assets/img/artists/artists2.png';
import artist2 from '../assets/img/artists/artists3.png';
import artist3 from '../assets/img/artists/artists4.png';
import artist4 from '../assets/img/artists/artists5.png';
import artist5 from '../assets/img/artists/artists6.png';
import artist6 from '../assets/img/artists/artists7.png';
import artist7 from '../assets/img/artists/artists8.png';
import artist8 from '../assets/img/artists/artists9.png';
import artist9 from '../assets/img/artists/artists10.png';

const artists_list = [
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist1 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist2  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist3  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist4  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist5  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist6  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist7  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist8  
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)",
        owner: artist9  
    }
]

class Artists extends Component {
    constructor() {
        super();
    }

    render_artists_item = (props) => {
        return (
            <div className="artist-item">
                <div className="artist-item-img">
                    <img className="img-responsive" src={props.owner} />
                </div>
                <div className="artist-detail">
                    <div className="artist-title">
                        <span>{props.title}</span>
                    </div>
                    <div className="artist-calculation">
                        <div className="division"></div>
                        <div className="original-sale">
                            <div className="property">SALE</div>
                            <div className="value">{props.sale}</div>
                        </div>
                        <div className="editions">
                            <div className="property">EDITIONS</div>
                            <div className="value">{props.editions}</div>
                        </div>
                        <div className="total-sale">
                            <div className="property">SALE</div>
                            <div className="value">{props.total}</div>
                        </div>
                    </div>                    
                    <div className="artist-description">
                        DESCRIPTION OF ARTIST
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="artists font-family-2">
                <div className="artist-espen-kluge">
                    <img className="img-responsive" src={artistsBrand} />
                </div>
                <div className="artist-content">
                    {
                        artists_list.map((artist) => {
                            return (
                                this.render_artists_item(artist)
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Artists;