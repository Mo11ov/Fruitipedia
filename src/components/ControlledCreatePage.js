import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { createFruit } from '../services/dataService';

function ControlledCreatePage() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        imageUrl: '',
        description: '',
        nutrition: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
            // [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        }));
    };

    async function onCreateSubmit(e) {
        e.preventDefault();

        await createFruit(values);
        navigate('/fruits');
    };

    return (
        <section id="create">
            <div className="form">
                <h2>Add Fruit</h2>
                <form className="create-form" onSubmit={onCreateSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Fruit Name"
                        onChange={changeHandler}
                        value={values.name}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        id="Fruit-image"
                        placeholder="Fruit Image"
                        onChange={changeHandler}
                        value={values.imageUrl}
                    />
                    <textarea
                        id="fruit-description"
                        name="description"
                        placeholder="Description"
                        rows={10}
                        cols={50}
                        onChange={changeHandler}
                        value={values.description}
                    />
                    <textarea
                        id="fruit-nutrition"
                        name="nutrition"
                        placeholder="Nutrition"
                        rows={10}
                        cols={50}
                        onChange={changeHandler}
                        value={values.nutrition}
                    />
                    <button type="submit">Add Fruit</button>
                </form>
            </div>
        </section>
    );
};

export default ControlledCreatePage;