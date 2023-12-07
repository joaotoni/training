import Navbar from "./components/Navbar"
import {Outlet} from "react-router-dom"
import "./styles/App.css"

export default function App(){
  return(
    <div className="App">
      <Navbar />
      <div className="Container">
        <Outlet />
      </div>
    </div>
  )
}