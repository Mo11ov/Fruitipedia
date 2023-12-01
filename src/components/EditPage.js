import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { updateFruit, getById } from '../services/dataService';

function EditPage() {
    const { id } = useParams();
    const [fruit, setFruit] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getById(id)
            .then(result => {
                setFruit(result);
            });
    }, [id]);

    async function onEditSubmit(e) {
        e.preventDefault();

        const { name, imageUrl, description, nutrition } = Object.fromEntries(new FormData(e.target));

        await updateFruit(id, { name, imageUrl, description, nutrition });
        navigate('/fruits');
    };

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit Fruit</h2>
                <form className="edit-form" onSubmit={onEditSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Fruit Name"
                        defaultValue={fruit.name} />
                    <input
                        type="text"
                        name="imageUrl"
                        id="Fruit-image"
                        placeholder="Fruit Image URL"
                        defaultValue={fruit.imageUrl}
                    />
                    <textarea
                        id="fruit-description"
                        name="description"
                        placeholder="Description"
                        rows={10}
                        cols={50}
                        defaultValue={fruit.description}
                    />
                    <textarea
                        id="fruit-nutrition"
                        name="nutrition"
                        placeholder="Nutrition"
                        rows={10}
                        cols={50}
                        defaultValue={fruit.nutrition}
                    />
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
};

export default EditPage;