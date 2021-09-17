import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory, Link } from "react-router-dom";



const AllAuthors = () => {

    const [allAuthors, setAllAuthors] = useState([])
    const {id} = useParams()
    const history = useHistory();

    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
        .then(res=> {
            console.log("****** res is this", res);
            setAllAuthors(res.data.results)
        })
        .catch(err => console.log("ERRORRRR-->", err))
    }, [id, deleteClicked])



    const deleteHandler = (e, idOfProd) => {
        

            axios.delete(`http://localhost:8000/api/Authors/delete/${idOfProd}`)
            .then(res=>{
                    console.log("response after successful axios DELETE resquest-->", res);
                    setDeleteClicked(!deleteClicked)
                    history.push("/");

            })
            .catch(err=>{
                    console.log("Error Occured -->",err);
            })
    }
    
    return (
        <div>
            <h3 className="mt-4">All The Authors</h3>

            {allAuthors.map( (author, i) => {
                return <div key = {i} className="card">
                <div className="card-body">

                  <h4 className="card-title"> {author.firstName} {author.lastName}</h4>
                  <p className="card-text">Title: {author.bestBook}</p>


                  <p> <Link className="btn btn-info m-3" to={location => ({ ...location, pathname: `/authors/${author._id}` })}> Author Page</Link>
                  
                  <Link className="btn btn-secondary m-3" to={location => ({ ...location, pathname: `/authors/edit/${author._id}` })}> Edit</Link>
                  
                  {/* <Link className="btn btn-danger mr-3" to={location => ({ ...location, pathname: `/Authors/${Author._id}` })}> Delete</Link> */}

                  
                    
                  <button className="btn-danger" onClick={ (e)=> deleteHandler (e, author._id)}>Delete</button> </p>
                  
                   

                </div>
              </div>
            })}

        </div>

    )


}

export default AllAuthors;