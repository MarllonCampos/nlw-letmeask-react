import { BrowserRouter, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {

  return (
    <AuthContext>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </BrowserRouter>
    </AuthContext>

  );
}

export default App;
