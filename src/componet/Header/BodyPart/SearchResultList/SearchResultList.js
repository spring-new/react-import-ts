import React, {Component} from 'react';
import SearchResult from "./SearchResult/SearchResult";

const arr = ["吃饭", "睡觉", "喝水", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]

class SearchResultList extends Component {
    render() {
        return (
            arr.map((item, index) => {

                return <p key={index}>{<SearchResult/>}</p>

            })
        );
    }
}

export default SearchResultList;