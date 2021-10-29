import React, { Component } from 'react';
import '../assets/css/collector.css';
import top_collector from '../assets/img/collector/top-collector.png';
import collector1 from '../assets/img/collector/collectors2.png';
import collector2 from '../assets/img/collector/collectors3.png';
import collector3 from '../assets/img/collector/collectors4.png';
import collector4 from '../assets/img/collector/collectors5.png';
import collector5 from '../assets/img/collector/collectors6.png';
import collector6 from '../assets/img/collector/collectors7.png';
import collector7 from '../assets/img/collector/collectors8.png';
import collector8 from '../assets/img/collector/collectors9.png';
import collector9 from '../assets/img/collector/collectors10.png';
import collector10 from '../assets/img/collector/collectors11.png';
import collector11 from '../assets/img/collector/collectors12.png';
import collector12 from '../assets/img/collector/collectors13.png';
import collector13 from '../assets/img/collector/collectors14.png';
import collector14 from '../assets/img/collector/collectors15.png';
import collector15 from '../assets/img/collector/collectors16.png';
import collector16 from '../assets/img/collector/collectors17.png';

const collector_list = [
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector1 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector2 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector3 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector4 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector5 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector6 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector7 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector8 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector9 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector10 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector11 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector12 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector13 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector14 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector15 
    },
    {
        title: "68 COLLECTOR",
        collections: "35",
        editions: "12",
        total: "15:00",
        collector_image: collector16 
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
                    <img className="img-responsive" src={props.collector_image} />
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
            <div className="collector font-family-2">
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