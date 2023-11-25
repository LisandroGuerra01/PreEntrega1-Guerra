

const Card = ({digimon}) => {
        const {name, image} = digimon
        return (
            <div>
                <h3>{name}</h3>
                <img src={image} alt="" />
            </div>
        );
};

export default Card;