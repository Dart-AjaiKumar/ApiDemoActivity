import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainData from './Context/MainData';

const UpdateDetails = () => {
  const {handleUpdateEmployee , ename, setEname,eemail,setEemail, emobile, setEmobile,edesignation,setEdesignation,edoj,setEdoj, epf, setEpf,esi,setEsi,eprofilephoto, setEprofilephoto, edor,setEdor,employeeData} = useContext(MainData)
const {id} = useParams();
const data = employeeData.find(data => (data.id).toString() === id);

  useEffect(() =>{
    if(data){
        setEname(data.name)
        setEemail(data.email)
        setEmobile(data.mobile)
        setEdesignation(data.designation)
        setEdoj(data.date_of_joining)
        setEpf(data.epf_uan)
        setEsi(data.esi_number)
        setEprofilephoto(data.profile_photo)
        setEdor(data.date_of_relieving)
    }
  },[data,setEname,setEemail,setEmobile,setEdesignation,setEdoj,setEpf,setEsi,setEprofilephoto,setEdor])
  return (
    <main>
      <form className='addemployee' onSubmit={() => handleUpdateEmployee(data.id)}>
          <table className='datatable'>
            <tbody>
              <tr>
              <td><label htmlFor="Name">Name :</label></td>
              <td><input 
                type = "text"
                value ={ename}
                onChange={(e) =>setEname(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="email">Email :</label></td>
              <td><input 
                type = "email"
                value ={eemail}
                onChange={(e) =>setEemail(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="Mobile">Mobile No :</label></td>
              <td><input 
                type = "number"
                value ={emobile}
                onChange={(e) =>setEmobile(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="designation">Designatinon :</label></td>
              <td><input 
                type = "text"
                value ={edesignation}
                onChange={(e) =>setEdesignation(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="date_of_joining">Date Of Joining :</label></td>
              <td><input 
                type = "date"
                value ={edoj}
                onChange={(e) =>setEdoj(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="epf_uan">EPF UAN :</label></td>
              <td><input 
                type = "number"
                value ={epf}
                onChange={(e) =>setEpf(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="esi_number">ESI Number :</label></td>
              <td><input 
                type = "number"
                value ={esi}
                onChange={(e) =>setEsi(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="profile_photo">Profile Photo :</label></td>
              <td><input 
                type = "text"
                value ={eprofilephoto}
                onChange={(e) =>setEprofilephoto(e.target.value)}
                required
              /></td>
              </tr>
              <tr>
              <td><label htmlFor="date_of_relieving">Date of Relieving :</label></td>
              <td><input 
                type = "date"
                value ={edor}
                onChange={(e) =>setEdor(e.target.value)}
                required
              /></td>
              </tr>
            </tbody>
          </table> 
          <button type ="submit"
          // onClick={()=>handleUpdateEmployee(data.id)}
          >Add Details</button>
        </form>
         
    </main>
  )
}

export default UpdateDetails
