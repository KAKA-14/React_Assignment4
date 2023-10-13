import { useEffect, useState } from "react";
import Axios from "axios";

function Table(){
    const [data,setData]=useState({users:[]});
    useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status === 200) 
            {
                console.log(res.data);
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    const Details=()=>{
        
        return data.users.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td className="img">
                        <img src={item.image}/>
                    </td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.domain}</td>
                    <td>{item.ip}</td>
                    <td>{item.university}</td>
                </tr>
            )
        })
    }
    return(
        <div>
            <table>
                <thead>
                    <th>SNo</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </thead>                
                <tbody>
                {Details()}
                </tbody>
            </table>
        </div>
    )
}
export  default Table;