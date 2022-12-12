const ukrBankFetch = () => {
  const fetching = fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  ).then((response) => response.json());
  return fetching;
};
export default ukrBankFetch;
