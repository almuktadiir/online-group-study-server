import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";


const MyAssignments = () => {
    const myAssignData = useLoaderData();
    const {user} = useContext(AuthContext);
    const filterData = myAssignData.filter(myData => myData.submittedUserEmail === user?.email);
    const [currentUserData, setCurrentUserData] = useState(filterData);

    return (
        <div className="max-w-7xl mx-auto my-14 grid grid-cols-3 gap-6">
            {
                currentUserData.map(currentUsers => <MyAssignmentCard
                key={currentUsers._id}
                currentUsers={currentUsers}
                currentUserData={currentUserData}
                setCurrentUserData={setCurrentUserData}
                ></MyAssignmentCard>)
            }
        </div>
    );
};

export default MyAssignments;