import { resolveFrontendUrl } from '~/utils/frontendBasePath';
export const openUrlInNewTab = (url: string) => {
  window.open(resolveFrontendUrl(url), '_blank', 'noopener,noreferrer');
};
