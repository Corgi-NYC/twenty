import { resolveFrontendUrl } from '~/utils/frontendBasePath';
// Don't use this hook directly! Prefer the high level hooks like:
// useRedirectToDefaultDomain and useRedirectToWorkspaceDomain

import { useDebouncedCallback } from 'use-debounce';

export const useRedirect = () => {
  const redirect = useDebouncedCallback((url: string, target?: string) => {
    window.open(resolveFrontendUrl(url), target ?? '_self');
  }, 1);

  return {
    redirect,
  };
};
