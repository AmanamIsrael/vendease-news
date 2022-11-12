const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const country = "ca";
const category = "sports";

const options = { method: "GET", headers: { Accept: "application/json" } };

const Apis = {
  getAllNews: async () => {
    const response = await fetch(
      `${API_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&pageSize=10`,
      options
    );
    return response.json();
  },
};

export default Apis;
