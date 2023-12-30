
import Home from "./pages/Home"
import ProjectPage from "./pages/ProjectPage"
import BlogPage from "./pages/BlogPage"
import EventPage from "./pages/EventPage"
import VolunteerPage from "./pages/VolunteerPage"

import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {


  return (
    <>
    
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path="/blogs" element={<BlogPage/>}/>
            <Route path="/events" element={<EventPage/>}/>
            <Route path="/volunteer" element={<VolunteerPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
