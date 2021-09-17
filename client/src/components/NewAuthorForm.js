import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


const NewAuthorForm = () => {
    
    let [formInfo, setFormInfo] = useState({
        firstName: null,
        lastName: null,
        bestBook: null,
    })
    
    const history = useHistory();

    const [submittedClicked, setSubmitClicked] = useState(false)

    let [validationErrors, setValidationErrors] = useState({})



    const changeHandler = (e) => {
        console.log("Changing something");
        console.log(e.target.name, e.target.value);

            setFormInfo({
                ...formInfo,
                [ e.target.name]: e.target.value
            })
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted with this info -->", formInfo);

        axios.post("http://localhost:8000/api/authors", formInfo)

            .then(res=>{
                    console.log("response after successful axios post resquest-->", res);
                    

                    // if response gets an error when submitting we do not want to redirect, we want to display err msgs
                    if(res.data.err){
                    //store errors object from backend into a front end state variable to display on page 
                        setValidationErrors(res.data.err.errors)
                        
                    } else { // form is successful NO ERRORS Redirect to home route
                        console.log("Data has been successfully sent to database");
                        setSubmitClicked(!submittedClicked)
                        history.push("/")
                        
                    }
                    
            })

            .catch(err=>{
                    console.log("Error Occured -->",err);
            })
    }


        return (
            <div>
                <h4 className="m-2">Create a New Author Here!</h4>

                <form onSubmit={submitHandler} action="">
                    <div className="form-group">
                        <label htmlFor="">First Name:</label>
                        <input onChange={changeHandler} type="text" name="firstName" id="" className="form-control" />

                        {/* Validation Messages  */}
                        <p className="text-danger"> { validationErrors.firstName? validationErrors.firstName.message : "" }  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name:</label>
                        <input onChange={changeHandler} type="text" name="lastName" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.lastName?.message}  </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Best Book:</label>
                        <input onChange={changeHandler} type="text" name="bestBook" id="" className="form-control" />

                        <p className="text-danger"> {validationErrors.bestBook?.message}  </p>
                    </div>
                  

                    <input className="btn btn-primary" type="submit" value="Create Author" />


                </form>
                <hr />
            </div>
        )




}



export default NewAuthorForm;