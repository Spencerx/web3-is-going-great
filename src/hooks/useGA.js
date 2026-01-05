import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function useGA() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    ReactGA.send({ hitType: "pageview", page: currentPath });
  }, []);
}
