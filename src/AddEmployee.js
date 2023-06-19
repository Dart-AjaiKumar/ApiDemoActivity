import React, { useContext } from 'react'
import MainData from './Context/MainData'

const AddEmployee = () => {
  const {handleAddEmployee , ename, setEname,eemail,setEemail, emobile, setEmobile,edesignation,setEdesignation,edoj,setEdoj, epf, setEpf,esi,setEsi,eprofilephoto, setEprofilephoto, edor,setEdor} = useContext(MainData)
  return (
    <main>
        <form className='addemployee' onSubmit={handleAddEmployee}>
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
          <button className="addemployeebtn"type ="submit">Add Details</button>
        </form>
    </main>
  )
}
export default AddEmployee
