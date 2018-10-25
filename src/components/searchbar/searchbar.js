import React from 'react';
import './searchbar.css';

const sortByOptions = {
    "Best Match":"best_match",
    "Highest Rated":"rating",
    "Most Reviewed":"review_count",
    "Shortest Distance":"distance"
};

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term:'',
            location:'',
            sortBy:'best_match',
            distance:''
        };

        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption =>{
           let sortByOptionValue = sortByOptions[sortByOption];
           return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    
    getSortByClass(sortByOption){
        return (this.state.sortBy === sortByOption ? 'active' : '');
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy:sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handleLocationChange(event){
        this.setState({location: event.target.value});
    }

    handleDistanceChange(event){
        this.setState({distance: event.target.value});
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy,this.state.distance);
        event.preventDefault();
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                    <input onChange={this.handleDistanceChange} placeholder="Distance" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}