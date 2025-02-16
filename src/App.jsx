import './App.css'
import {CreatePost, HomePage} from './pages'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/post' element={ <CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
