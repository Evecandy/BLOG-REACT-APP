import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import Homepage from './components/Homepage'

import SideBar from './components/Sidebar'
import Content from './pages/Content'

const data = [{
Author: "Eve",
BlogName: "Food",
Description: "Eating healthy"

},
{
Author: "Candy",
BlogName: "Movies",
Description: "Futurama: The Odd Couple"
},
{
  Author: "Ray",
BlogName: "Music",
Description: "The Jonas Brothers"
}

]


function App() {

  return (
    <>
    <div>
       <div className="gridContainer">
      
      <NavBar title={data.title}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage data={data}/>}></Route>
          <Route path="/details" element={<Content/>}></Route>

          <Route path="a"element={<PageNotFound/>}></Route>
        </Routes>

        </BrowserRouter>
        <Footer name={data.name} date={data.date}/>
     </div>
      <div className="Footer">
      <Footer />
      </div>

    </div>

    </>
  )
}

export default App
