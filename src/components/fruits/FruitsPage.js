import { useState, useEffect } from 'react';

import { getAll } from '../../services/dataService';
import FruitItem from './FruitItem';

function FruitsPage() {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => {
                setFruits(result);
            });
    }, []);

    return (
        <>
            <section id="dashboard">
                {/* Display a div with information about every post (if any)*/}
                {fruits.length ? fruits.map(fruit => <FruitItem key={fruit._id} fruit={fruit} />) : <h2>No fruit info yet.</h2>}
            </section>
        </>
    );
};

export default FruitsPage;