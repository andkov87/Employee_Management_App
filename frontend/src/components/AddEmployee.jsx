import { useState } from "react";
import axiosInstance from '../AxiosConfig'; 
import { Link } from 'react-router-dom';

const AddEmployee = () => {

  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  })

  const handleInputChange = (e) => {
    
    setNewEmployee({...newEmployee, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/api/employees', newEmployee);
      console.log("New employee added successfully", response.data);

      setNewEmployee({
        firstName: "",
        lastName: "",
        emailId: "",
      });

    } catch (error) {
      console.error("New employee not added:", error)
    }
  }

  return (
    <div>
      <br></br>
      <div className="container">
        <h2 className="text-center mt-5">Add Employee</h2>
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label> First Name </label>
                  <input className="form-control mb-3"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleInputChange}
                    value={newEmployee.firstName}
                  />
                </div>
                <div className="form-group mb-3">
                  <label> Last Name </label>
                  <input className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleInputChange}
                    value={newEmployee.lastName}
                  />
                </div>
                <div className="form-group mb-3">
                  <label> Email Id </label>
                  <input className="form-control"
                    placeholder="Email Address"
                    name="emailId"
                    onChange={handleInputChange}
                    value={newEmployee.emailId}
                  />
                </div>

                <button className="btn btn-success">Save</button>
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

export default AddEmployee
