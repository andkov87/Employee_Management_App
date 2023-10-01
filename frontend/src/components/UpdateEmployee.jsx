import {Link} from 'react-router-dom';

const UpdateEmployee = () => {
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
                                        placeholder="First Name"
                                        name="firstName"
                                    //value={}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label> Last Name: </label>
                                    <input className="form-control"
                                        placeholder="Last Name"
                                        name="lastName"
                                    //value={}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label> Email Id: </label>
                                    <input className="form-control"
                                        placeholder="Email Address"
                                        name="emailId"
                                    //value={}
                                    />
                                </div>

                                <button className="btn btn-success">Update</button>
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
