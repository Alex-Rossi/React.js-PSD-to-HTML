import React, { Component } from 'react';
import '../assets/css/artists.css';
import artistsBrand from '../assets/img/artists/artists1.png';
import artist1 from '../assets/img/artists/artists2.png';

const artists_list = [
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
    },
    {
        title: "ESPEN KLUGE",
        sale: "35",
        editions: "12",
        total: "6.05($23,946)" 
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
                    <img className="img-responsive" src={artist1} />
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
            <div className="artists">
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