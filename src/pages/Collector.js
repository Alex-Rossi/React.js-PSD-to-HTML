import React, { Component } from 'react';
import '../assets/css/collector.css';
import top_collector from '../assets/img/collector/top-collector.png';
import collector1 from '../assets/img/collector/collector1.png';

const collector_list = [
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00" 
    }
]

class Collector extends Component {
    constructor() {
        super();
    }

    render_collector_item = (props) => {
        return (
            <div className="collector-item">
                <div>
                    <img className="img-responsive" src={collector1} />
                </div>
                <div className="collector-tag">
                    <div>COLLECTOR</div>
                </div>
                <div className="collector-detail">
                    <div className="collector-title">
                        <span>{props.title}</span>
                    </div>                    
                    <div className="collection-calculation">
                        <div className="division"></div>
                        <div className="collections">
                            <div className="property">COLLECTIONS</div>
                            <div className="value">{props.collections}</div>
                        </div>
                        <div className="editions">
                            <div className="property">EDITIONS</div>
                            <div className="value">{props.editions}</div>
                        </div>
                        <div className="total">
                            <div className="property">TOTAL</div>
                            <div className="value">{props.total}</div>
                        </div>
                    </div>
                </div>
                <div className="collector-description">
                    DESCRIPTION OF ARTIST
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="collector">
                <div className="top-collectors">
                    <div className="img-container">
                        <img className="img-responsive" src={top_collector} />
                    </div>
                </div>
                <div className="collector-content">
                    {
                        collector_list.map((collector) => {
                            return (
                                this.render_collector_item(collector)
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Collector;