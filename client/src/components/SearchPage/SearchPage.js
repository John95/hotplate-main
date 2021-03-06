import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-materialize';

// Import pages 
import SearchForm from '../SearchForm';
import SearchResults from '../SearchResults';
import About from '../About';

// Import styles
import './SearchPage.css';
import '../../css/full-width.css';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      isOpen: false
    };
  }

  handleSearch = async (searchQuery) => {
    console.log(`Search page got query: ${searchQuery}`);
    const searchGetUrl = `/api/projects?s=${searchQuery}`;
    try {
      const response = await axios.get(searchGetUrl);
      const searchResults = response.data;
      this.setState({
        searchResults: searchResults
      });
    } catch(error) {
      console.error(error);
    }

    // toggles search results visibility
    this.setState({
      isOpen: true
    });
    console.log(this.state);
  }

  render() {
    return (
        <Container>
          <div className="full-width-bar search-theme">
            <Row>
              <Col s={12}>
                <SearchForm handleSearch={ this.handleSearch }/>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <SearchResults 
                  searchResults={ this.state.searchResults } 
                  show={ this.state.isOpen }
                />
              </Col>
            </Row>
        
            <div>
              <About />
            </div>
          </div>
        </Container>

    );
  }
}

export default SearchPage;
