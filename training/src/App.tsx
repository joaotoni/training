import {Outlet} from "react-router-dom"

export default function App(){
  return(
    <div className="App">
      <div className="Container">
        <Outlet />
      </div>
    </div>
  )
}