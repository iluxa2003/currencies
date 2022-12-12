const cryptoExchangeUsdFetch = (id) => {
  const fetcher = fetch("https://api.coincap.io/v2/assets/" + id).then(
    (response) => response.json()
  );
  return fetcher;
};
export default cryptoExchangeUsdFetch;
