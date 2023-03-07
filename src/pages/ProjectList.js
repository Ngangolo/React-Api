import React,{ useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import http from '../http-common';
 
 
  
function ProjectList() {
    const  [projectList, setProjectList] = useState([])
  
    useEffect(() => {
        fetchProjectList()
    }, [])
  
    const fetchProjectList = () => {
        http.get('/projects')
        .then(function (response) {
          setProjectList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                http.delete(`/projects/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Project deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchProjectList()
                })
                .catch(function (error) {
                    Swal.fire({
                         icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
          })
    }
  
    return (
        <>
           <div  className="pcoded-main-container">
           <div className="row mt-3">
                <div className="card flat-card widget-primary-card col-md-3 ml-4">
                    <div className="row-table">
                        <div className="col-sm-3 card-body">
                            <i className="feather icon-star-on"></i>
                        </div>
                        <div className="col-sm-9">
                            <h4>10 +</h4>
                            <h6>Documents generés</h6>
                        </div>
                    </div>
                </div>
                <div className="card flat-card widget-purple-card col-md-3 ml-2">
                    <div className="row-table">
                        <div className="col-sm-3 card-body">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div className="col-sm-9">
                            <h4>17</h4>
                            <h6>Commandes</h6>
                        </div>
                    </div>
                </div>
                <div className="card flat-card widget-purple-card col-md-3 ml-2">
                    <div className="row-table">
                        <div className="col-sm-3 card-body">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div class="col-sm-9">
                            <h4>2</h4>
                            <h6>Abonnements</h6>
                        </div>
                    </div>
                </div>
                <div className="card flat-card widget-primary-card col-md-2 ml-2 ">
                    <div className="row-table">
                        <div className="col-sm-3 card-body">
                            <i className="feather icon-star-on"></i>
                        </div>
                        <div className="col-sm-9">
                            <h4>10 +</h4>
                            <h6>Documents generés</h6>
                        </div>
                    </div>
                </div>
                {/* <!-- widget primary card end --> */}
            </div>

            <h2 className="text-center mb-3">Project Manager</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-primary"
                            to="/create">Create New Project
                        </Link>
                    </div>
                    <div className="card-body container">
              
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th width="240px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectList.map((project, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{project.name}</td>
                                            <td>{project.description}</td>
                                            <td>
                                                <Link
                                                    to={`/show/${project.id}`}
                                                    className="btn btn-outline-info mx-1">
                                                    Show
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-success mx-1"
                                                    to={`/edit/${project.id}`}>
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={()=>handleDelete(project.id)}
                                                    className="btn btn-outline-danger mx-1">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default ProjectList;