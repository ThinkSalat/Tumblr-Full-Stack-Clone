import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {
  render() {
    const { user } = this.props
    return <li className="search-result-item" key={user.id}> 
      <Link to={`/users/${user.id}`}>
        {user.title} {user.username} <img src={user.avatar} className="search-result-avatar"/> 
      </Link>
    </li>
  }
}

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { focused: false }
  }

  search(e) {
    e.preventDefault();
    this.setState({focused: true})
    this.props.search(e.currentTarget.value)
  }

  displayResults() {
    if (!this.state.focused) return null;
    let { results } = this.props;
    if (!Object.keys(results).length) {
      return <li>no results for this search</li>;
    } else {
      return Object.values(results).map ( user => {
        return <SearchResultItem user={user}/>
      })
    }
  }

  render() {
    return(
      <div>
        <input onInput={this.search.bind(this)} className='searchbar' type="text" placeholder='Search Trendr (in progress)'/>
        <i className="fas fa-search searchbar-icon"></i>
        <div className="search-results">
          <ul className='search-results'>
            {this.displayResults()}
          </ul>
        </div>
      </div>
    );
  }
}