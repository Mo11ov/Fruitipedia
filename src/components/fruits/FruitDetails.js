import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getById, deleteFruit } from '../../services/dataService';

function FruitDetails() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    // u can get user from UserContext too
    const user = JSON.parse(localStorage.getItem('userData'));


    useEffect(() => {
        getById(id)
            .then(result => {
                setFruit(result);
            });
    }, [id]);

    async function onDeleteClick() {
        await deleteFruit(id);
        navigate('/fruits');
    };

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
                    {user._id === fruit._ownerId &&
                        <div id="action-buttons">
                            <Link to={`/fruits/${fruit._id}/edit`} id="edit-btn">
                                Edit
                            </Link>
                            <Link to="#" onClick={onDeleteClick} id="delete-btn">
                                Delete
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default FruitDetails;