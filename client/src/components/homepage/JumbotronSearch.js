import React from 'react';
import Autocomplete from './Autocomplete'
const JumbotronSearch = () => {
    return (
        <div className="jumbotron-search d-flex align-items-center container-fluid">

            <div className="container col-sm-5 text-center">
                <h2>Help me find a clinic</h2>
                    <label htmlFor="search-by-procedure">I am looking for</label>
                    <Autocomplete />
            </div>
        </div>
     );
};

export default JumbotronSearch;