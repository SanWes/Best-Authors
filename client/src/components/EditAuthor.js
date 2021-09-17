import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";


const EditAuthor = () => {


    const [oneAuthor, setOneAuthor] = useState([])


    const {idAuth} = useParams()

    const history = useHistory();


    useEffect( () => {
        axios.get(`http://localhost:8000/api/Authors/${idAuth}/`)
        .then(res=> {
            console.log("****** Results are these", res);
            setOneAuthor(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [idAuth] )



    const changeHandler = (e) => {
        console.log("Changing something");
        console.log(e.target.name, e.target.value);
         
            setOneAuthor({
                ...oneAuthor,
                [ e.target.name]: e.target.value
            })
        

    }

    //update our Author with put call
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted with this info -->", oneAuthor);

        axios.put(`http://localhost:8000/api/Authors/${idAuth}`, oneAuthor)
            .then(res=>{
                    console.log("response after successful axios put resquest-->", res);
                    
                    history.push(`/`);
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
        <input onChange={changeHandler} type="text" name="firstName" id="" className="form-control " value={oneAuthor.firstName} />

     

    </div>
    <div className="form-group">
        <label htmlFor="">Last Name:</label>
        <input onChange={changeHandler} type="text" name="lastName" id="" className="form-control" value={oneAuthor.lastName} />

      
    </div>
    <div className="form-group">
        <label htmlFor="">Best Book:</label>
        <input onChange={changeHandler} type="text" name="bestBook" id="" className="form-control" value={oneAuthor.bestBook}/>

      
    </div>
  

    <input className="btn btn-primary" type="submit" value="Update Entry" />


</form>
<hr />
        </div>
    )
}

export default EditAuthor;
