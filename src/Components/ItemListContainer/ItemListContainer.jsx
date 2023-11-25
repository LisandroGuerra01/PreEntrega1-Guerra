/* eslint-disable no-unused-vars */
import itemList from "./itemList"
import { useEffect, useState } from "react";

const ItemListContainer = () => {

    const [list, setList] = useState()
    const url = "https://www.digi-api.com/api/v1/digimon"

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.content)
            setList(data.content)
        })
    }, [])

    return (
        <div>
            <itemList list={list} />
        </div>
    );
};

export default ItemListContainer;