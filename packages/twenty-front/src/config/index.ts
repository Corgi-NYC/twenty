export const REACT_APP_FRONTEND_BASE_PATH =
  '/' +
  (window._env_?.REACT_APP_FRONTEND_BASE_PATH ?? import.meta.env.BASE_URL ?? '/')
    .split('/')
    .filter(Boolean)
    .join('/');

export const REACT_APP_SERVER_BASE_URL = (
  window._env_?.REACT_APP_SERVER_BASE_URL ||
  `${window.location.origin}${REACT_APP_FRONTEND_BASE_PATH}`
).replace(/\/$/, '');
