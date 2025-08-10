import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: { q: query },
      headers: {
        Authorization: apiKey ? `token ${apiKey}` : undefined,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
