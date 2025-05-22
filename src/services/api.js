import axios from "axios";

const ACCESS_KEY = "LR1QbJLuDubiauHG4EJpH1Er6NSmPFMisyOCH_plkf0";

export const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
};
