const generateUrlByEnvironment = () => {
  const cinemasSelectElement = document.getElementsByClassName("appUrl");
  const isLocalhost =
    window.location.host.match("localhost") ||
    window.location.host.match("127.*");
  Array.from(cinemasSelectElement).forEach((navbarUrlElement) => {
    if (isLocalhost) {
      console.log(navbarUrlElement.href);
      console.log(String(navbarUrlElement.href).indexOf("app"));
    }
  });
};
generateUrlByEnvironment();
