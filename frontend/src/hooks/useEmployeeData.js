import { useEffect, useState } from "react"
import axiosInstance from '../AxiosConfig'



const useEmployeeData = () => {
    const [employeeData, setEmployeeData] = useState(null);


    const fetchEmployeeData = async () => {
        try {

            const response = await axiosInstance.get('/api/employees');
            const fetchedEmployeeData = await response.data;
            setEmployeeData(fetchedEmployeeData);

        } catch (error) {
            console.error("Problem with fetching Employee data: ", error);
        }
    }

    useEffect(() => {
        fetchEmployeeData();
    }, [])

  return [employeeData, fetchEmployeeData];
}

export default useEmployeeData
