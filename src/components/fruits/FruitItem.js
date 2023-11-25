import { Link } from 'react-router-dom';

function FruitItem({ fruit }) {
    return (
        <div className="fruit">
            <img src={fruit.imageUrl} alt="example1" />
            <h3 className="title">{fruit.name}</h3>
            <p className="description">
                {fruit.description}
            </p>
            <Link to={`/fruits/${fruit._id}`} className="details-btn">
                More Info
            </Link>
        </div>
    );
};

export default FruitItem;