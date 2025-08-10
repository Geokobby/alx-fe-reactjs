// src/services/githubService.js

const BASE_URL = "https://api.github.com";

// Advanced GitHub user search
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let queryParts = [];

    // username
    if (username) queryParts.push(`${username} in:login`);

    // location
    if (location) queryParts.push(`location:${location}`);

    // minimum repositories
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    // Combine query parts
    const query = queryParts.join(" ");

    // Full endpoint
    const endpoint = `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`;

    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    return data.items; // GitHub Search API returns { items: [...] }
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};
