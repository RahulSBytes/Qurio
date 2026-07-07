export const fetchLocation = async () => {
  const response = await fetch("http://ip-api.com/json/?fields=country");
  const location = await response.json();

  return location.country;
};

// export const fetchCountries = async () => {
//   return [
//     { name: { common: "India" } },
//     { name: { common: "United States" } },
//     { name: { common: "United Kingdom" } },
//     { name: { common: "Canada" } },
//     { name: { common: "Australia" } },
//     { name: { common: "Germany" } },
//     { name: { common: "France" } },
//     { name: { common: "Japan" } },
//     { name: { common: "China" } },
//     { name: { common: "Brazil" } },
//   ];
// };

export const fetchJobs = async (filters: JobFilterParams) => {
  const { query, page } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search-v2?query=${query}&page=${page}`,
    {
      headers,
    }
  );

  const result = await response.json();

  return result.data.jobs;
};
