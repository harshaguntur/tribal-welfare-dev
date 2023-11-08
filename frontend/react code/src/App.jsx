import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Home1 from './pages/Home1'


const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home1/>}/>
        
         
      </Routes>
   </BrowserRouter> 
  )
}




export default App

