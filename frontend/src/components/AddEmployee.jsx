
const AddEmployee = () => {
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label> First Name: </label>
                            <input className="form-control" 
                                   placeholder="First Name" 
                                   name="firstName"
                                   //value={}
                                   />
                        </div>
                        <div className="form-group">
                            <label> Last Name: </label>
                            <input className="form-control"
                                   placeholder="Last Name"
                                   name="lastName"
                                   //value={}
                                   />
                        </div>
                        <div className="form-group">
                            <label> Email Id: </label>
                            <input className="form-control"
                                   placeholder="Email Address"
                                   name="emailId"
                                   //value={}
                                   />
                        </div>

                        <button className="btn btn-success">Save</button>
                        <button className="btn btn-danger" style={{marginLeft: '10px'}}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee
