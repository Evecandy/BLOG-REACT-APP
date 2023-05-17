import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import SideBar from './components/Sidebar'
import Content from './components/Content'


function App() {

  return (
    <>
       <div className="gridContainer">
      
      <div className="NavBar">
      <NavBar />
     </div>

      <div className="SideBar">
      <SideBar />
      </div>
      <div className="Content">
      <Content />
      </div>
      <div className="Footer">
      <Footer />
      </div>
    </div>

    </>
  )
}

export default App
