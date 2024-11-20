import axios from 'axios';

// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_TOKEN = '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'

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const fetchTopTSProjects = async (page: number, controller: AbortController) => {
  const response = await githubAPI.get('/search/repositories', {
    params: {
      q: 'language:TypeScript',
      sort: 'stars',
      order: 'desc',
      per_page: 10,
      page,
    },
    signal: controller.signal,
  });
  return response.data;
};
