import { BrowserRouter as Router, Route } from "react-router-dom"; // Routes URLs directly to React components
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import Navbar from "./components/navbar.component";
import BookCatalog from "./components/BookCatalog.component";
import AddBook from "./components/AddBook.component";
import ViewBook from "./components/ViewBook.component";
import EditBook from "./components/EditBook.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={BookCatalog} />
        <Route path="/view/:id" component={ViewBook} />
        <Route path="/add" component={AddBook} />
        <Route path="/edit/:id" component={EditBook} />
      </div>
    </Router>
  );
}

export default App;
