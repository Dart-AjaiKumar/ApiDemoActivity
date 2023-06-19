import { createContext,useEffect, useState} from "react";
import api from "../api/link"
import { useNavigate } from "react-router-dom";

const MainData = createContext({})

export const DataProvider = ({children}) =>{
    const [employeeData,setEmployeeData]= useState([])
    const token = localStorage.getItem("token")
    const[search, setSearch]= useState('')
    const [searchdata,setSearchData]=useState([])
    const navigate = useNavigate()
    const[ename,setEname]=useState('')
    const[eemail,setEemail]=useState('')
    const[emobile,setEmobile]=useState('')
    const[edesignation,setEdesignation]=useState('')
    const[edoj,setEdoj]=useState('')
    const[epf,setEpf]=useState('')
    const[esi,setEsi]=useState('')
    const[eprofilephoto,setEprofilephoto]=useState('')
    const[edor,setEdor]=useState('')

  // function to fetch data
  const fetchDatas = async() =>{
      try{
        const response = await api.get("api/employees",{
          headers: {Authorization: `Bearer ${token}`}
        })
        setEmployeeData(response.data.data);
        alert("Data Fetched Successfully")
        navigate("alldata")
        }catch(err){
        alert(err.message)
        }
    }

  // function call for Fetching data 
  useEffect(() =>{
    fetchDatas();
    },[])
  
  // search Function
  useEffect(() =>{
    const filtersearch= employeeData.filter((data)=>((data.name).toLowerCase()).includes(search.toLowerCase()));
    setSearchData(filtersearch);
  },[employeeData,search])

  //function for logout
  const handleLogout =() =>{
    localStorage.setItem("token",'')
    navigate('/')
  }

  //function to Add data
  const handleAddEmployee =() =>{
    const newdata = {name:ename,email:eemail,mobile:emobile,designation:edesignation,date_of_joining:edoj,epf_uan:epf,esi_number:esi,profile_photo:eprofilephoto,date_of_relieving:edor}
    
    try{
      api.post("api/store",newdata,{
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log(ename,emobile,eemail,edesignation,edoj,epf,esi,eprofilephoto,edor)
      setEname('')
      setEemail('')
      setEmobile('')
      setEdesignation('')
      setEdoj('')
      setEpf('')
      setEsi('')
      setEprofilephoto('')
      setEdor('')
      alert("Employee Details Added !")
      navigate("alldata")
      fetchDatas();
    }catch(err){
      console.log(err.message)
      console.log(ename,emobile,eemail,edesignation,edoj,epf,esi,eprofilephoto,edor)
    }
  }

  //Update
  const handleUpdateEmployee =(id)=>{
    const updatedata = {name:ename,email:eemail,mobile:emobile,designation:edesignation,date_of_joining:edoj,epf_uan:epf,esi_number:esi,profile_photo:eprofilephoto,date_of_relieving:edor}
  
    try{
      api.put(`api/update/${id}`,updatedata,{
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log(ename,emobile,eemail,edesignation,edoj,epf,esi,eprofilephoto,edor)
      setEname('');
      setEemail('');
      setEmobile('');
      setEdesignation('');
      setEdoj('');
      setEpf('');
      setEsi('');
      setEprofilephoto('');
      setEdor('');
      alert("Employee Details Updated !");
      navigate("alldata");
      fetchDatas();
      
    }catch(err){
      console.log(err.message)
      console.log(ename,emobile,eemail,edesignation,edoj,epf,esi,eprofilephoto,edor)
    }
  }
    //delete
     const handleDelete =async(id) =>{
        try{
          await api.delete(`api/delete/${id}`,{
          headers: {Authorization: `Bearer ${token}`}
          })
          const empdata = employeeData.filter(data => data.id !== id);
          setEmployeeData(empdata)
          navigate('alldata');
        }catch(err){
          console.log(err.message);
        }
  }

    return(
        <MainData.Provider value={{
            handleLogout,search,setSearch,searchdata,handleAddEmployee , ename, setEname,eemail,setEemail, emobile, setEmobile,edesignation,setEdesignation,edoj,setEdoj, epf, setEpf,esi,setEsi,eprofilephoto, setEprofilephoto, edor,setEdor,employeeData,handleDelete,handleUpdateEmployee
        }}>
            {children}
        </MainData.Provider>
    )
}

export default MainData