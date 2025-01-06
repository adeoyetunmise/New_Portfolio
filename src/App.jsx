import './App.css'
import {Routes, Route} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import MainPage from './pages/MainPage'




function App() {
  

  return (
    <>
     <Routes>
      <Route path= '/' element={<RootLayout/>}>
      <Route index element={<MainPage/>}/>
      <Route path ='/mainpage' element = {<MainPage/>}></Route>
      
      </Route>
     </Routes>
    </>
  )
}

export default App
