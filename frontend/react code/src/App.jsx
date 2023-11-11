import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home1' element={<Home1/>}/>
        <Route path='/home2' element={<Home2/>}/>
         
                  
      </Routes>
   </BrowserRouter> 
  )
}




export default App

