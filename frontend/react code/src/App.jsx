import {BrowserRouter,Routes,Route} from 'react-router-dom'

import HomeFinal from './pages/HomeFinal'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import AddUnderGoingProjects from './pages/AddUnderGoingProjects'



// import PhotoUpload from './pages/TestPages/PhotoUpload'
// import PhotoDelete from './pages/TestPages/PhotoDelete'



const App = () => {
  return (
   <BrowserRouter>
      <Routes>

        <Route path='/signup' element={<Signup/>}/>
        <Route path = '/signin' element={<SignIn/>}/>
        <Route path='/' element={<HomeFinal/>}/>
        <Route path='/addundergoingprojects' element={<AddUnderGoingProjects/>}/>

        {/* <Route path='/photoupload' element={<PhotoUpload/>} />
         <Route path='/photodelete' element={<PhotoDelete/>}/> */}
                  
      </Routes>
   </BrowserRouter> 
  )
}




export default App

