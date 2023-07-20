
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Donate from './pages/Donate'
import OngoingProjects from './pages/OngoingProjects'
import PastProjects from './pages/PastProjects'
import Partners from './pages/Partners'
import CharitiesSupported from './pages/CharitiesSupported'

function App() {
  return  (

    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ongoing-projects" element={<OngoingProjects />} />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/charities-supported" element={<CharitiesSupported />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;