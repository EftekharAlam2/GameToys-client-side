import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `GameToys | ${title}`;
  }, [title]);
};

export default useTitle;
