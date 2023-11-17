import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home1 from './pages/Home1'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import PhotoUpload from './pages/PhotoUpload'



const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path = '/signin' element={<SignIn/>}/>
        <Route path='/' element={<Home1/>}/>
        <Route path='/photoupload' element={<PhotoUpload/>} />
         
                  
      </Routes>
   </BrowserRouter> 
  )
}




export default App

