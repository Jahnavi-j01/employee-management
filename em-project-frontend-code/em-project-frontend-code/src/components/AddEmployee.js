import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        console.log("Saving employee:", employee); // optional debug
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log("Saved:", response.data);
                navigate("/"); // go back to list page
            })
            .catch((error) => {
                console.error("Error saving employee:", error);
            });
    };

    const resetForm = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            name: "",
            phone: "",
            email: "",
        });
    };

    return (
        <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
            <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
                <p>Add 🧑🏼‍💻 New Employee</p>
            </div>

            <form onSubmit={saveEmployee} className="mx-10 my-2">
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder="Name"
                    required
                />

                <input
                    type="number"
                    name="phone"
                    value={employee.phone}
                    onChange={handleChange}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder="Phone"
                    required
                />

                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder="Email"
                    required
                />

                <div className="flex my-4 space-x-4 px-20">
                    <button
                        type="submit"
                        className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
                    >
                        Save
                    </button>
                    <button
                        onClick={resetForm}
                        className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
                    >
                        Clear
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
