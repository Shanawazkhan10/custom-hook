import React, { useEffect, useState } from "react";

const Cp = (URL) => {
  const [customFetch, setCustomFetch] = useState("");
  useEffect(() => {
    const fetchingApi = async () => {
      await fetch(URL)
        .then((res) => res.json())
        .then((result) => setCustomFetch(result));
    };
    fetchingApi();
  }, [URL]);

  return customFetch;
};

export default Cp;
