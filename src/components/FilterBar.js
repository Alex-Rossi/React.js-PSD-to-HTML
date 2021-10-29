import React, { Component } from 'react';
import "../assets/css/filterbar.css";
import layout1 from "../assets/img/layout1.png";
import layout2 from "../assets/img/layout2.png";
import arrow_down from "../assets/img/arrow-down.png";
import arrow_up from "../assets/img/arrow-up.png";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class FilterBar extends Component {
    render() {
        const options = [
            'one', 'two', 'three'
        ];

        return (
            <div className="filter-bar font-family-1">
                <div className="result-count">
                    <span>15616358</span>
                    <span>RESULTS</span>
                </div>
                <div className="filter-fields">
                    <div>
                        <Dropdown 
                            className="all-items" 
                            controlClassName="all-item-control" 
                            menuClassName="all-item-menu" 
                            options={options} 
                            placeholder="ALL ITEMS" 
                            arrowClosed={
                                <span className="arrow-closed">
                                    <img src={arrow_down} />
                                </span>
                            }  
                            arrowOpen={
                                <span className="arrow-open">
                                    <img src={arrow_up} />
                                </span>
                            } 
                        />
                    </div>
                    <div>
                        <Dropdown 
                            className="sort-by" 
                            controlClassName="sort-by-control" 
                            menuClassName="sort-by-menu" 
                            options={options} 
                            placeholder="SORT BY" 
                            arrowClosed={
                                <span className="arrow-closed">
                                    <img src={arrow_down} />
                                </span>
                            }  
                            arrowOpen={
                                <span className="arrow-open">
                                    <img src={arrow_up} />
                                </span>
                            } 
                        />
                    </div>
                    <div className="layout-icon">
                        <img className="img-responsive" src={layout1} />
                    </div>
                    <div className="layout-icon">
                        <img className="img-responsive" src={layout2} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;