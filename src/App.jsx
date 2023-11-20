/* eslint-disable react/jsx-no-undef */
import Contador from "./Components/Contador";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/Navbar";
import UserList from "./Components/UserList";
import ProductCard from "./Components/ProductCard";
import Productos from "./Components/Productos";

import "./App.css";



const App = () => {

  return (
    <div className="container-fluid page">
      <NavBar />
      <ItemListContainer />

      <ProductCard title="SABORES" price={100} img="https://ar.freddo.com/wp-content/uploads/2022/10/sabores.png">
        <p>Elegir sabores</p>
        <button>Comprar ya!</button>
      </ProductCard>

      <ProductCard title="TENTACIONES" price={200} img="https://ar.freddo.com/wp-content/uploads/2022/10/tentaciones.png">
        <p>Elegir productos</p>
        <button>Agregar a favoritos</button>
      </ProductCard>

      <ProductCard title="PRE ENVASADOS" price={300} img="https://ar.freddo.com/wp-content/uploads/2022/10/preenvasados.png">
        <p>Elegir productos</p>
        <button>Comprar ya!</button>
      </ProductCard>

      <Productos></Productos>
      <Contador />

      <UserList />
    </div>
  );
};

export default App;