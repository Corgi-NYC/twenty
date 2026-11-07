import { REACT_APP_FRONTEND_BASE_PATH } from '~/config';

export const stripFrontendBasePath = (path: string): string => {
  const basePath = REACT_APP_FRONTEND_BASE_PATH;

  if (basePath === '/') return path;
  if (path === basePath) return '/';

  return path.startsWith(`${basePath}/`)
    ? path.slice(basePath.length)
    : path;
};

export const addFrontendBasePath = (path: string): string =>
  `${REACT_APP_FRONTEND_BASE_PATH === '/' ? '' : REACT_APP_FRONTEND_BASE_PATH}/${stripFrontendBasePath(path).replace(/^\//, '')}`;

export const getFrontendPathname = (): string =>
  stripFrontendBasePath(window.location.pathname);

export const resolveFrontendUrl = (url: string): string =>
  url.startsWith('/') && !url.startsWith('//')
    ? addFrontendBasePath(url)
    : url;
