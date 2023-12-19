import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { Label } from '../issues/interfaces';
import { githubApi } from '../api/githubApi';
import { sleep } from '../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
};

const useLabels = (): UseQueryResult<Label[], Error> => {
  return useQuery({
    queryKey: ['Labels'],
    queryFn: getLabels,
    retry: 2,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 69105358,
        node_id: 'MDU6TGFiZWw2OTEwNTM1OA==',
        url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20Safari',
        name: 'Browser: Safari',
        color: 'c7def8',
        default: false,
      },
      {
        id: 196858374,
        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
        name: 'CLA Signed',
        color: 'e7e7e7',
        default: false,
      },
      {
        id: 71502270,
        node_id: 'MDU6TGFiZWw3MTUwMjI3MA==',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Build%20Infrastructure',
        name: 'Component: Build Infrastructure',
        color: 'f9d0c4',
        default: false,
      },
    ],
  });
};

export { useLabels };
