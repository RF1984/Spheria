import React from 'react';
import './Search.css'
import axios from 'axios';
import ToysApi from '../../api/ToysApi';


class Search extends React.Component {

        constructor( props ) {
            super ( props );

            this.state = {
                query: '', 
                results: [],
                //loading: false,
                //message: 'n'
                
            };

            this.cancel ='';
        }

        fetchSearch = (query) => {
            ToysApi.getToyByName(query)
            .then(({data}) => this.setState({results: data}))
            .catch(err => console.error(err));

           
        }

        /*fetchSearchResults = ( updatedPageNo = '', query  ) => {
            const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
            const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
                if (this.cancel) {
                    this.cancel.cancel();
                }
                this.cancel = axios.CancelToken.source();
                axios.get(searchUrl, {cancelToken: this.cancel.token,})
                .then((res) => {const resultNotFoundMsg = !res.data.hits.lenght
                    ? 'There no more results.' :'';
                                    this.state({
                                        results: res.data.hits,
                                        message: resultNotFoundMsg,
                                        loading: false,
                                    })
                })
                .catch((error) => {
                    if (axios.isCancel(error) || error) {
                        this.setState({
                            loading: false,
                            message: 'Failed to fetch results.Please check network',
                        });
                    }
                });
        }; */
        
        
        

        handleOnInputChange = (event) => {
            const query = event.target.value;
            //console.warn(this.state);
            this.setState({ query});
            this.fetchSearch(query);
        };
    
    render () {
        const { query } = this.state;
        return (
            <div>
                <div className="container">
                    {/*Heading*/}
                    <h2 className="heading"> Live Search</h2>
                    {/*SearchInput*/}
                    <label className="search label" htmlFor="search-input">
                        <input
                            type="text"
                            name="query"
                            value={query} 
                            id="search-input"
                            placeholder="Search..."
                            onChange= {e => this.handleOnInputChange(e)}
                        />
                        <i className="fa fa-search search-icon" aria-hidden="true"/>
                </label>
                <ul>
                    {
                        this.state.results.map (result => 
                        <li>{result.toy_Name}</li>
                            ) 
                    }
                </ul>
                </div>
            </div>
        )
    }
}

export default Search;
