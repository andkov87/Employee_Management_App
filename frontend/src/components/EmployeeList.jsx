import useEmployeeData from '../hooks/useEmployeeData';
import axiosInstance from '../AxiosConfig';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employeeData, fetchEmployeeData] = useEmployeeData();


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
                <div className='row text-center'>
                    <Link to={'/add'}>
                        <button className='btn btn-primary'><strong>Add Employee</strong></button>
                    </Link>
                </div>
                <br></br>
                <div className='row mt-2'>
                    <table className='table table-striped table-boarded'>

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {employeeData && employeeData.map((employee) =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.id}</td>
                                    <td>
                                        <Link to={'/update'}>
                                            <button className='btn btn-info'>Update</button>
                                        </Link>
                                        <button className='btn btn-danger' style={{ marginLeft: '10px' }} onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                                        <button className='btn btn-info' style={{ marginLeft: '10px' }}>View</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList
