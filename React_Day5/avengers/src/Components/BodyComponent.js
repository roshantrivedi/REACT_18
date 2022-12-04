import CardComponent from "./CardComponent";
import SearchBarComponent from "./SearchBarComponent";
import data  from "../data";
import { useState } from "react";

function BodyComponent() {

    const [avengersData, setAvengersData] = useState(data);

    return (
        <>
            <SearchBarComponent setAvengersData = {setAvengersData}/>
            <div id="bodylayout" className="bodylayout-class">
                {avengersData.map((i, index) => (
                    <CardComponent avenger={i} key={index} />
                ))}
            </div>
        </>
    );
}

export default BodyComponent;