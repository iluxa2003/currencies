const cryptoDetailsFetch = (id, period) => {
  const fetching = fetch(
    "https://api.coincap.io/v2/assets/" + id + "/history?interval=" + period
  ).then((response) => response.json());
  return fetching;
};
export default cryptoDetailsFetch;
