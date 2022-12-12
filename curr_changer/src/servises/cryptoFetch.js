const cryptoFetch = () => {
  const fetching = fetch("https://api.coincap.io/v2/assets?limit=30").then(
    (response) => response.json()
  );
  return fetching;
};
export default cryptoFetch;
