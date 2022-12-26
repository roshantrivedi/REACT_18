import { useEffect, useState } from "react";

import CardComponent from "./CardComponent";
import SearchBarComponent from "./SearchBarComponent";
import NoResultFound from "./NoResultFound";
import fetchService from "../utils/apiCall.js";

function BodyComponent() {
  const fetchedData = fetchService();
  const [avengersData, setAvengersData] = useState([]);
  const [afterFilterData, setAfterFilterData] = useState([]);

  useEffect(() => {
    fetchedData.then((res) => {
      const data = [].concat(...res);
      setAvengersData(data);
      setAfterFilterData(data);
    });
  }, []);

  return (
    <>
      <SearchBarComponent
        avengersData={avengersData}
        setAfterFilterData={setAfterFilterData}
      />
      {afterFilterData.length > 0 ? (
        <div id="bodylayout" className="bodylayout-class">
          {
            afterFilterData.map((i) => (
              <CardComponent avenger={i} key={i.id} />
          ))
          }
        </div>
      ) : (
        <NoResultFound />
      )}
    </>
  );
}

export default BodyComponent;