import React from 'react';
import Business from '../business/business';
import './businesslist.css';

export default class BusinessList extends React.Component {
    render(){
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => { 
                            return <Business business={business}/>
                        }
                    )
                }
            </div>
        )
    }
}