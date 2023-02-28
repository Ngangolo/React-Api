import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import http from '../http-common';
import Layout from '../components/Layout'


function DocumentListe() {
    const [documenttList, setDocumentList] = useState([])

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
                http.post(`/document/${id}`)
                    .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Project deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetchDocumenttList()
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
    const getPDF = (file_name) => {
        http.get(`/download/${file_name}`,{responseType: 'arraybuffer'})
            .then(res => {
                console.log(res.data);
                const url = window.URL.createObjectURL(new Blob([res.data],{type: 'application/pdf'}));
                console.log(url);
                window.open(url, '_blank');

            }).catch(err => {
                console.log(err.response);
                //  toast.danger('Oups! Echec de téléchargent');
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
                                            <th className="col-2">Date</th>
                                            <th className="col-2">Etat</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {documenttList.map((document, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{document.type}</td>
                                                    <td>{document.created_at}</td>
                                                    <td>Généré</td>
                                                    <td>

                                                        <Link
                                                            onClick={() => getPDF(document.file)}

                                                            className="btn btn-success mx-1">
                                                            consulter
                                                        </Link>
                                                        <Link
                                                            className="btn btn-primary mx-1"
                                                        >
                                                            Telecharger
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(document.id)}
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