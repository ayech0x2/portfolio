import * as React from "react";
const useScreenOrientation = () => {
  const [isPortrait, setIsPortrait] = React.useState(
    window.innerHeight > window.innerWidth
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isPortrait;
};

export default useScreenOrientation;
