import React,{ useState, useEffect} from 'react'
import { Link } from "react-router-dom"
// import Swal from 'sweetalert2'
import http from '../http-common';
import Layout from '../components/Layout'

function DocumentListe() {
    const  [documenttList, setDocumentList] = useState([])
  
    useEffect(() => {
        fetchDocumenttList()
    }, [])
  
    const fetchDocumenttList = () => {
        http.get('/documents')
        .then(function (response) {
            setDocumentList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  return (
    <Layout>
    <div className="row ">
            <div className="col-md-9 pcoded-main-container">
                <div className="card ml-2">
                    <div className="card-header">
                        <h3>Liste de mes Documents</h3>
                    </div>
                    <div className="card-body table-border-style">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="col-4">Nom Document</th>
                                        <th  className="col-2">Date</th>
                                        <th className="col-2">Etat</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {documenttList.map((document, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{document.type}</td>
                                            <td>{document.created_at}</td>
                                            <td>Généré</td>
                                            <td>
                                                <Link
                                                  // to={`/show/${project.id}`}
                                                    to={`http://localhost:8000/storage/app/public/contrat/${document.file}`}
                                                    
                                                    className="btn btn-success mx-1">
                                                    consulter
                                                </Link>
                                                <Link
                                                    className="btn btn-primary mx-1"
                                                    >
                                                    Telecharger
                                                </Link>
                                                <button 
                                                    // onClick={()=>handleDelete(project.id)}
                                                    className="btn btn-danger mx-1">
                                                    Supprimer
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
            </div>
    </div>
    </Layout>
  )
}
export default DocumentListe