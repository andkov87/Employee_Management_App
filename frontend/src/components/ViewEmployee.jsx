import { useEffect, useState } from 'react';
import '../css/ViewEmployee.css';
import { useEmployeeContext } from '../hooks/useEmployeeContext.jsx';
import pic_1 from '../img/profile_sample.jpg';
import axiosInstance from '../AxiosConfig';
import useEmployeeData from '../hooks/useEmployeeData';



const ViewEmployee = () => {

    const { selectedEmployee } = useEmployeeContext();
    const [employeeData, fetchEmployeeData] = useEmployeeData();
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const initialEmployeeState = {
        firstName: selectedEmployee ? selectedEmployee.firstName : "",
        lastName: selectedEmployee ? selectedEmployee.lastName : "",
        emailId: selectedEmployee ? selectedEmployee.emailId : "",
    }

    console.log(selectedEmployee.profile_pic);
    console.log(preview);


    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };

    const handleProfilePicSave = async () => {
        try {
            if (image) {
                const response = await axiosInstance.put(`/api/employees/${selectedEmployee.id}/profile_pic`, { imageData: image });
                console.log('Profile picture updated successfully', response.data);
                fetchEmployeeData();
            } else {
                console.error('No image to save');
            }
        } catch (error) {
            console.error('Error updating profile picture', error);
        }
    };

    useEffect(() => {
        if(selectedEmployee) {
            setPreview(selectedEmployee.profile_pic);
        }
    }, [selectedEmployee]);



    return (
        <div>
            <div className="container bootstrap snippets bootdey mt-5">
                <h1 className="text-primary">Employee Info</h1>
                <hr />
                <div className="row">

                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={preview ? preview : pic_1}
                            onError={(e) => console.error("Error loading image:", e)}
                                 className="rounded-circle img-thumbnail" 
                                 alt="avatar"
                                 style={{ width: '190px', height: '190px', objectFit: 'cover' }} />
                            <h6>Upload a your photo...</h6>

                            <input type="file" className="form-control" onChange={handleProfilePicChange}/>
                            <button type="button" onClick={handleProfilePicSave}>save</button>
                        </div>
                    </div>


                    <div className="col-md-9 personal-info">
                        <h3>Personal info</h3>
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-lg-8">
                                    <span className="form-control" type="text" >{initialEmployeeState.firstName}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-lg-8">
                                <span className="form-control" type="text" >{initialEmployeeState.lastName}</span>                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email ID:</label>
                                <div className="col-lg-8">
                                <span className="form-control" type="text" >{initialEmployeeState.emailId}</span>                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    )
}

export default ViewEmployee
