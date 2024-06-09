import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then((response)=>{
            changedata(response.data)
        }).catch().finally()

    }
    useEffect(()=>{fetchData()},)
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">College</th>
                                            <th scope="col">Dob</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">__v</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value,index)=>{
                                                   return  <tr>
                                            <th scope="row">{value._id}</th>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            <td>{value.__v}</td>
                                        </tr>
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
