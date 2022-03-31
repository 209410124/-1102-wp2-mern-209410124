import{ BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//import Landing_24 from "./pages/Landing_24";
import { Landing_24 ,Dashboard_24, Register_24 } from './pages';
import styled from 'styled-components'

function App_24() {
  return (
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Dashboard_24/>} />
      <Route path='/landing' element={<Landing_24/>}/>
      <Route path='/register' element={<Register_24/>}/>
      </Routes>
      {/*{<Landing_24 />*/}
    </BrowserRouter>
  );
}

export default App_24;
