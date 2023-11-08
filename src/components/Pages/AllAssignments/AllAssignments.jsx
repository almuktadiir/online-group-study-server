import { useLoaderData } from "react-router-dom";
import AllAssignmentCard from "./AllAssignmentCard";
import { useRef, useState } from "react";


const AllAssignments = () => {
    const usersAssignData = useLoaderData();
    const [assignData, setAssignData] = useState(usersAssignData);
    const inputRef = useRef(null);
    const [selectValue, setSelectValue] = useState('');
    console.log(selectValue);

    const handleChange = () => {
        const inputLevelValue = inputRef.current.value;
        setSelectValue(inputLevelValue);
    }

    const findLevelData = usersAssignData.filter(dbLevelValue => dbLevelValue.difficulty === selectValue);
    console.log(findLevelData);

    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="mb-10 shadow-lg bg-slate-300 w-[17rem] p-2 flex flex-col rounded-lg text-lg">
                <form onChange={handleChange}>

                    <label htmlFor="pet-select">Choose a difficulty level</label>
                    <select ref={inputRef} name="level" id="pet-select" className="outline-0 rounded-lg">
                        <option value="">--Please choose an option--</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </form>
            </div>
            <div>
                {
                    !selectValue ?
                    <div className="grid grid-cols-3 gap-6">
                    {
                        assignData.map(usersAssignment => <AllAssignmentCard
                            key={usersAssignment._id}
                            usersAssignment={usersAssignment}
                            assignData={assignData}
                            setAssignData={setAssignData}
                        ></AllAssignmentCard>)
                    }
                </div>
                    :
                    <div className="grid grid-cols-3 gap-6">
                    {
                        findLevelData.map(usersAssignment => <AllAssignmentCard
                            key={usersAssignment._id}
                            usersAssignment={usersAssignment}
                        ></AllAssignmentCard>)
                    }
                </div>
                }
            </div>

        </div>
    );
};

export default AllAssignments;