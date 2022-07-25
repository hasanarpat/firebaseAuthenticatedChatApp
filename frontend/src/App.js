import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import {useContext} from "react";
import FirebaseContext from "./context/FirebaseContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
function App() {

  const {authToken} = useContext(FirebaseContext);

  if(!authToken){
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to={"auth"} />} />
          <Route path="auth/*" element={<PublicRoutes />} />
        </Routes>
      </Router>
    );
  }
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
      </Router>
    );
  }


export default App;
