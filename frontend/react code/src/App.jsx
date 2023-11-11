import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home1 from './pages/Home1'
import Signup from './pages/Signup'



const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home1/>}/>
     
         
                  
      </Routes>
   </BrowserRouter> 
  )
}




export default App

