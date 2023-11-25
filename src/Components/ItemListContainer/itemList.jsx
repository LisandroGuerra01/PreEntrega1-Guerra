import Card from "./card"

const itemList = ({list}) => {

    // const listMap = list.map((digimon) => {
    //     return <Card digimon={digimon} key={digimon.id}/>
    // })

    return (
        <div>
            {list.map((digimon) => <Card digimon={digimon} key={digimon.id}/> )}
        </div>
    );
};

export default itemList;