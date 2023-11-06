import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const CreateAssignments = () => {
    const {user} = useContext(AuthContext);

    const handleCreateAssignment = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const title = form.get('title');
        const marks = form.get('marks');
        const image = form.get('image');
        const dueDate = form.get('duedate');
        const difficulty = form.get('difficulty');
        const description = form.get('description');
        const email = user?.email;
        const assignment = {email, title, marks, image, dueDate, difficulty, description};
        console.log(assignment);


        fetch('http://localhost:5000/createAssignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignment)
        })
        .then(res => {
            console.log(res.json);
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div className="max-w-7xl mx-auto my-10 text-center bg-[#ebf6e2ff] shadow-lg p-5 rounded-lg">
            <h2 className="mb-3 font-montez font-semibold text-xl">Create Assignment</h2>
            <form onSubmit={handleCreateAssignment}>

                <div className="flex gap-6 mb-3">
                    <input type="text" name="title" placeholder="Assignment Title" className="input input-bordered input-warning w-1/2" />
                    <input type="number" name="marks" placeholder="Marks" className="input input-bordered input-warning w-1/2" />
                </div>

                <div className="flex gap-6 mb-3">
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered input-warning w-1/2" />
                    <input type="date" name="duedate" placeholder="Due Date" className="input input-bordered input-warning w-1/2" />

                    <select
                        id="difficulty"
                        name="difficulty"
                        className="input input-bordered input-warning w-1/2">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="text-center mb-3">
                    <textarea name="description" id="" cols="30" rows="20" className="input input-bordered input-warning w-1/2" placeholder="Description"></textarea>
                </div>
                <input type="submit" value="Create Assignment" className="w-1/4 text-center btn btn-warning btn-outline mx-auto text-lg" />
            </form>
        </div>
    );
};

export default CreateAssignments;