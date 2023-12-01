import { useState } from 'react';

import SearchFruitItem from './fruits/SearchFruitItem';
import { searchFruits } from '../services/dataService';

function SearchPage() {
    const [fruits, setFruits] = useState([]);

    async function onSearch(e) {
        e.preventDefault();
        const { search } = Object.fromEntries(new FormData(e.target));

        const result = await searchFruits(search);
        setFruits(result);
    };

    return (
        <section id="search">
            <div className="form">
                <h2>Search</h2>
                <form className="search-form" onSubmit={onSearch}>
                    <input type="text" name="search" id="search-input" />
                    <button className="button-list">Search</button>
                </form>
            </div>
            <h4>Results:</h4>
            <div className="search-result">
                {/*If there are matches display a div with information about every fruit*/}
                {fruits.length
                    ? fruits.map(x => <SearchFruitItem key={x._id} fruit={x} />)
                    : <p className="no-result">No result.</p>}
            </div>
        </section>

    );
};

export default SearchPage;