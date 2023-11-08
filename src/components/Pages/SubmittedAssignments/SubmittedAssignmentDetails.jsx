
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import SubmitMarks from './SubmitMarks';



const SubmittedAssignmentDetails = ({ sData }) => {
    const {_id, title, marks, examineeName, } = sData;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            {/* <figure><img src={image} alt="Movie" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">Assignment: {title}</h2>
                <p>Total Marks: {marks}</p>
                <p>Examinee Name: {examineeName}</p>
                <Link to={`/submitAssignMarking/${_id}`}><button className='btn bg-green-300 w-full'>Give Mark</button>
                {/* <SubmitMarks sData={sData}></SubmitMarks> */}
                </Link>
            </div>
        </div>
    );
};

export default SubmittedAssignmentDetails;

SubmittedAssignmentDetails.propTypes = {
    sData: PropTypes.object
}