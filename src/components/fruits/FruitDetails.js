import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getById } from '../../services/dataService';

function FruitDetails() {

    const { id } = useParams();
    const [fruit, setFruit] = useState({});

    useEffect(() => {
        getById(id)
            .then(result => {
                setFruit(result);
            });
    },[id]);

    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={fruit.imageUrl} alt="example1" />
                <p id="details-title">{fruit.name}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p>
                            {fruit.description}
                        </p>
                        <p id="nutrition">Nutrition</p>
                        <p id="details-nutrition">
                            {fruit.nutrition}
                        </p>
                    </div>
                    {/*Edit and Delete are only for creator*/}
                    <div id="action-buttons">
                        <a href="" id="edit-btn">
                            Edit
                        </a>
                        <a href="" id="delete-btn">
                            Delete
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FruitDetails;