import { ApiPath } from 'twenty-shared/types';

export const buildAppCustomConnectionCallbackUrl = ({
  serverUrl,
  state,
}: {
  serverUrl: string;
  state: string;
}): string => {
  const callbackUrl = new URL(
    `${serverUrl.replace(/\/$/, '')}/${ApiPath.Auth}/apps/custom/callback`,
  );

  callbackUrl.searchParams.set('state', state);

  return callbackUrl.toString();
};
