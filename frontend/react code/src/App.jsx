import {BrowserRouter,Routes,Route} from 'react-router-dom'

import HomeFinal from './pages/HomeFinal'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import AddUnderGoingProjects from './pages/AddUnderGoingProjects'
import UnderGoingProjects from './pages/UnderGoingProjects'
import Shop from './pages/Shop'
import AddShopItem from './pages/AddShopItem'



// import PhotoUpload from './pages/TestPages/PhotoUpload'
// import PhotoDelete from './pages/TestPages/PhotoDelete'




const App = () => {
  return (
   <BrowserRouter>
      <Routes>

        <Route path='/signup/:id' element={<Signup/>}/>
        <Route path = '/signin' element={<SignIn/>}/>
        <Route path='/' element={<HomeFinal/>}/>
        <Route path='/addundergoingprojects' element={<AddUnderGoingProjects/>}/>
        <Route path='/undergoingprojects' element={<UnderGoingProjects/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/addshopitem' element={<AddShopItem/>}/>

        
        {/* <Route path='/photoupload' element={<PhotoUpload/>} />
         <Route path='/photodelete' element={<PhotoDelete/>}/> */}
                  
      </Routes>
   </BrowserRouter> 
  )
}




export default App

