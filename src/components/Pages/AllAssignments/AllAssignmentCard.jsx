import PropTypes from 'prop-types';

const AllAssignmentCard = ({ usersAssignment }) => {
    const { title, image, marks, difficulty } = usersAssignment;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} className="h-60 w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Assignment Marks - {marks}</p>
                <p>Level - {difficulty}</p>
                <div className="card-actions justify-center">
                    <div className="btn-group">
                        <button className="btn bg-[#0200d6] text-white">View Assignment</button>
                        <button className="btn bg-[#060061] text-white">Update Assignment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAssignmentCard;

AllAssignmentCard.propTypes = {
    usersAssignment: PropTypes.object
}