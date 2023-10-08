import useEmployeeData from '../hooks/useEmployeeData';
import axiosInstance from '../AxiosConfig';
import { Link } from 'react-router-dom';
import { useEmployeeContext } from '../hooks/useEmployeeContext.jsx';


const EmployeeList = () => {
    const [employeeData, fetchEmployeeData] = useEmployeeData();
    const { selectedEmployee, setSelectedEmployee } = useEmployeeContext();


    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    }

    const handleDeleteEmployee = async (employeeId) => {
        try {
            const response = await axiosInstance.delete(`/api/employees/${employeeId}`);
            fetchEmployeeData();
            console.log("Employee deleted successfully:", response.data);

        } catch (error) {
            console.error("Error in deleting:", error);
        }
    }

    return (
        <div>
            <div className='container'>
                <h2 className='text-center mt-5'>Employee List</h2>               
                <br></br>
                <div className='row mt-2 text-center '>
                    <table className='table table-striped mx-auto'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody className="align-middle border border-secondary-subtle border-4">
                            {employeeData && employeeData.map((employee) =>
                                <tr className={`${selectedEmployee && selectedEmployee.id === employee.id ? 'active' : ''}`} key={employee.id} onClick={() => handleEmployeeClick(employee)}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <div className="d-flex justify-content-center gap-3">
                                        <Link to={'/update'}>
                                            <button className='btn btn-info'><strong>Update</strong></button>
                                        </Link>
                                        <button className='btn btn-danger' onClick={() => handleDeleteEmployee(employee.id)}><strong>Delete</strong></button>
                                        <button className='btn btn-info'><strong>View</strong></button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>                
                </div>
                <div className='row text-center mt-2'>
                    <Link to={'/add'}>
                        <button className='btn btn-primary'><strong>Add Employee</strong></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList
