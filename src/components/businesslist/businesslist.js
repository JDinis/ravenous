import React from 'react';
import Business from '../business/business';
import './businesslist.css';

export default class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        );
    }
}