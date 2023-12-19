import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Issue } from '../issues/interfaces';
import { sleep } from '../helpers/sleep';
import { githubApi } from '../api/githubApi';

const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>('/issues');
  return data;
};

const useIssues = (): UseQueryResult<Issue[], Error> => {
  return useQuery({
    queryKey: ['Issues'],
    queryFn: getIssues,
    retry: 2,
    staleTime: 1000 * 60 * 60,
  });
};
export { useIssues };
