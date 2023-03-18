import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import ProjectList from './ProjectList'
import http from '../http-common';
  
function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
 
    useEffect(()=>{
        if(localStorage.getItem('token') === "" || localStorage.getItem('token') == null){
            navigate("/");
        }else {
            getUser()
        }
    },[])
 
    const getUser = () => {
        http.get('/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
           setUser(r.data)
        })
        .catch((e) => {
            console.log(e)
        });
    }
 
    const logoutAction = () => {
        http.post('/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
            localStorage.setItem('token', "")
           navigate("/");
        })
        .catch((e) => {
            console.log(e)
        });
    }
     
    return (
        <Layout>
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <ProjectList/>
                </div>
            </div>
           
        </Layout>
    );
}
   
export default Dashboard;