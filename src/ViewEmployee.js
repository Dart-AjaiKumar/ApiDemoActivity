import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import MainData from './Context/MainData';


const ViewEmployee = () => {
    const {employeeData,handleDelete} = useContext(MainData)
    const {id} = useParams();
    const singledata = employeeData.find(singledata => (singledata.id).toString()=== id);
  return (
    <main>
      <article className='viewemployee'>
        {singledata &&
        <>
         <table className='datatable'>
            <thead>
                <tr>
                <td>Id</td>
                <td>{singledata.id}</td>
                </tr>
            <tr>
                <td>Name</td>
                <td>{singledata.name}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{singledata.email}</td>
            </tr>
            <tr>
                <td>Mobile</td>
                <td>{singledata.mobile}</td>
            </tr>
            <tr>
                <td>Designation</td>
                <td>{singledata.designation}</td>
            </tr>
            <tr>
                <td>Date Of Joining</td>
                <td>{singledata.date_of_joining}</td>
            </tr>
            <tr>
                <td>EPF UAN</td>
                <td>{singledata.epf_uan}</td>
            </tr>
            <tr>
                <td>ESI Number</td>
                <td>{singledata.esi_number}</td>
            </tr>
            <tr>
                <td>Profile Photo</td>
                <td>{singledata.profile_photo}</td>
            </tr>
            <tr>
                <td>Date of Relieving</td>
                <td>{singledata.date_of_relieving}</td>
            </tr>
            <tr>
                <td><Link to={`update/${singledata.id}`}><button className='editbutton'>Edit</button></Link></td>
                <td><button className='deletebutton' onClick={()=>handleDelete(singledata.id)}>Delete</button></td>
            </tr>
            </thead>
         </table>
         </>
        }
        {!singledata &&
        <>
            <h2>Details Not Found</h2>
        </>
        }
      </article>
      
    </main>
  )
}
export default ViewEmployee