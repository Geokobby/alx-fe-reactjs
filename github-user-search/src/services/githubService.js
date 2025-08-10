// services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

// GitHub API key from .env file (optional but helps with rate limits)
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const headers = {};

    if (GITHUB_API_KEY) {
      headers["Authorization"] = `token ${GITHUB_API_KEY}`;
    }

    const response = await axios.get(`${BASE_URL}${username}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
