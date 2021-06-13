import { BrowserRouter as Router, Route } from "react-router-dom"; // Routes URLs directly to React components
import "bootstrap/dist/css/bootstrap.slate.min.css";
import './App.css'

import Navbar from "./components/navbar.component";
import BookCatalog from "./components/BookCatalog.component";
import ViewBook from "./components/ViewBook.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={BookCatalog} />
        <Route path="/view/:id" component={ViewBook} />
      </div>
    </Router>
  );
}

export default App;
