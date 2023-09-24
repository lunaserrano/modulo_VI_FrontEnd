import React, { useEffect, useState } from "react";

 export default function ConsultaFetch(url) {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(async(response) => await response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return {data}
}
