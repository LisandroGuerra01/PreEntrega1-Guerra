import Contador from "./Components/Contador";
// import ContadorRef from "./Components/ContadorRef";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/Navbar";
import UserList from "./Components/UserList";
import "./App.css";



const App = () => {

  return (
    <div className="container-fluid page">
      <NavBar />
      <ItemListContainer />

      <Contador />
      <br />
      {/* <ContadorRef /> */}
      <UserList />
    </div>
  );
};

export default App;