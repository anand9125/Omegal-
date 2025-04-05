import {BrowserRouter,Routes,Route} from  "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Room from "./Pages/Room";
function App() {

  return (
     <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>} />
            <Route path="/room" element={<Room></Room>} />
          </Routes>
        
        </BrowserRouter>

     </div>
  
  );
}

export default App
