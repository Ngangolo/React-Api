import React from 'react'
import Layout from '../components/Layout'

function DocumentListe() {
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
                                    <tr>
                                        <td>Creation entreprise</td>
                                        <td>12/02/2023</td>
                                        <td>Généré</td>
                                        <td>
                                        <button type="button" class="btn  btn-success ml-2">consulter</button>
                                        <button type="button" className="btn  btn-primary ml-2">Telecharger</button>
                                        <button type="button" className="btn  btn-danger ml-2">Supprimer</button>
                                        </td>
                                    </tr>
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