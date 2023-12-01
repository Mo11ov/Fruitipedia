import { useNavigate } from 'react-router-dom';

import { createFruit } from '../services/dataService';

function CreatePage() {
    const navigate = useNavigate();

    async function onCreateSubmit(e) {
        e.preventDefault();

        const { name, imageUrl, description, nutrition } = Object.fromEntries(new FormData(e.target));

        await createFruit({ name, imageUrl, description, nutrition });
        navigate('/fruits');
    };

    return (
        <section id="create">
            <div className="form">
                <h2>Add Fruit</h2>
                <form className="create-form" onSubmit={onCreateSubmit}>
                    <input type="text" name="name" id="name" placeholder="Fruit Name" />
                    <input
                        type="text"
                        name="imageUrl"
                        id="Fruit-image"
                        placeholder="Fruit Image"
                    />
                    <textarea
                        id="fruit-description"
                        name="description"
                        placeholder="Description"
                        rows={10}
                        cols={50}
                        defaultValue={""}
                    />
                    <textarea
                        id="fruit-nutrition"
                        name="nutrition"
                        placeholder="Nutrition"
                        rows={10}
                        cols={50}
                        defaultValue={""}
                    />
                    <button type="submit">Add Fruit</button>
                </form>
            </div>
        </section>
    );
};

export default CreatePage;