/* eslint-disable react/prop-types */

const Producto = ({img, name, categoria, id, precio}) => {


    return (
        <div className="col lg-4">
            <div className="text-center card box">
                <div className="member-card py-2">
                    <div className="thumb-lg member-thumb mx-auto">
        |               <img src={img} width={150} height={150} alt={name} className="rounded-circle img-thumbnail"/>
                        <div>
                            <h3>{categoria}</h3>
                            <p>{name}</p>
                            <p>{precio}</p>
                            <p>{id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producto;