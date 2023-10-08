import {Link} from 'react-router-dom';
import { useEmployeeContext } from '../hooks/useEmployeeContext.jsx';
import { useState } from 'react';
import axiosInstance from '../AxiosConfig.js';


const UpdateEmployee = () => {

    const { selectedEmployee } = useEmployeeContext();


    const initialEmployeeState = {
        firstName: selectedEmployee ? selectedEmployee.firstName : "",
        lastName: selectedEmployee ? selectedEmployee.lastName : "",
        emailId: selectedEmployee ? selectedEmployee.emailId : "",
    }

    const [employee, setEmployee] = useState(initialEmployeeState);


    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log("Setting state:", name, value);
        setEmployee({
            ...employee,
            [name]: value,
        });
    };


    const handleUpdate = async(e) => {
        e.preventDefault();
        
        console.log("updated employee data:", employee)
        try {
            const response = await axiosInstance.put(`/api/employees/${selectedEmployee.id}`, employee);
            console.log("Employee updated successfully", response.data);
        } catch (error) {
            console.error("Error updating employee", error);
        }
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <h2 className='text-center mt-5'>Update Employee</h2>
                <br></br>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label> First Name: </label>
                                    <input className="form-control"
                                        type='text'
                                        placeholder="First Name"
                                        name="firstName"
                                        value={employee.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label> Last Name: </label>
                                    <input className="form-control"
                                        type='text'
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={employee.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label> Email Id: </label>
                                    <input className="form-control"
                                        type='text'
                                        placeholder="Email Id"
                                        name="emailId"
                                        value={employee.emailId}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <button
                                 className="btn btn-success"
                                 type='submit'
                                 onClick={handleUpdate}
                                 >Update</button>
                                <Link to={'/'}>
                                <button className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancel</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee
