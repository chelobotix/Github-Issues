import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});

export { githubApi };
