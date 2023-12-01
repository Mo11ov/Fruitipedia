import { Link } from 'react-router-dom';

function SearchFruitItem({ fruit }) {
    return (
        <div className="fruit">
            <img src={fruit.imageUrl} alt="example1" />
            <h3 className="title">{fruit.name}</h3>
            <p className="description">
                {fruit.description}
            </p>
            <Link className="details-btn" to={`/fruits/${fruit._id}`}>
                More Info
            </Link>
        </div>
    );
};

export default SearchFruitItem;