import React from "react";
import { NewsContext, NewsContextProps } from "../context";

const useNewsContext = () => {
  const context = React.useContext(NewsContext);
  if (!context) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context as NewsContextProps;
};

export default useNewsContext;
