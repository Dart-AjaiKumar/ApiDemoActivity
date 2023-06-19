import Header from './Header'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Alldata from './Alldata'
import AddEmployee from './AddEmployee'
import ViewEmployee from './ViewEmployee'
import UpdateDetails from './UpdateDetails'
import { DataProvider } from './Context/MainData'

 const Home = () => {
  
return (
        <div className='home'>
          <DataProvider>
              <Header/>
              <Nav/>
            <Routes>
                <Route path="alldata" element ={<Alldata/>}/>
                <Route path="datapost" element = {<AddEmployee/>}/>
                <Route path ="alldata/datapost/:id"element={<ViewEmployee />}/>
                <Route path ="alldata/datapost/:id/update/:id"element={<UpdateDetails />}/>
            </Routes>
           </DataProvider>
        </div>
  )
}

export default Home
