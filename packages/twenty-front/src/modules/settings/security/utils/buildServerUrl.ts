export const buildServerUrl = ({
  serverUrl,
  pathname,
}: {
  serverUrl: string;
  pathname: string;
}) => {
  const url = new URL(serverUrl);

  url.pathname = `${url.pathname.replace(/\/$/, '')}/${pathname.replace(/^\//, '')}`;

  return url.toString();
};
