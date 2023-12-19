import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { Comment, Issue } from '../issues/interfaces';
import { sleep } from '../helpers/sleep';
import { githubApi } from '../api/githubApi';

const getIssue = async (issueNumber: string | 0): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

const getIssueComments = async (
  issueNumber: string | 0
): Promise<Comment[]> => {
  const { data } = await githubApi.get<Comment[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};

const useIssue = (issueNumber: string | 0): any => {
  const issueQuery = useQuery({
    queryKey: ['Issue', issueNumber],
    queryFn: () => getIssue(issueNumber),
    retry: 2,
  });

  const commentsQuery = useQuery({
    queryKey: ['Issue', issueNumber, 'Comments'],
    queryFn: () => getIssueComments(issueNumber),
    retry: 2,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
export { useIssue };
