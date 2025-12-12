import { useState } from "react";

export const useRegisterViewModel = () => {
  const [useData, setUseData] = useState({
    name: "Pedro",
  });

  return {
    useData,
    setUseData,
  };
};
