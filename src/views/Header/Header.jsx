import "./Header.css"


const Header = () => {
    return (
        
        <div className="row portada bg-black">
            <div className="overlay col-7 align-self-center text-white text-start">
                <div className="card-body">
                    <h5 className="card-title">GELATO <br></br><span>FREDDO</span></h5>
                    <p className="card-text">En Freddo pensamos y creamos <br></br>cada sabor logrando una receta única.</p>
                </div>
            </div>
            <img className="col-5 p-0" src="https://deliciousmartha.com/wp-content/uploads/2022/03/Captura-de-pantalla-2020-08-17-a-las-17.32.15.png" alt="imagen de portada" />
        </div>
    );
};

export default Header;