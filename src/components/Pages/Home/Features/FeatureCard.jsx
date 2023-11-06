import PropTypes from 'prop-types'


const FeatureCard = ({ feature }) => {
    const { _id, title, description, image_url } = feature;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn bg-green-300">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;

FeatureCard.propTypes = {
    feature: PropTypes.object
}