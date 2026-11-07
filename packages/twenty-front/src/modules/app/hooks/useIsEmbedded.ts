const EMBEDDED_SESSION_KEY = 'twenty-embedded';

export const useIsEmbedded = (): boolean => {
  const isFramed = window.self !== window.top;
  const isEmbeddedQuery =
    new URLSearchParams(window.location.search).get('embedded') === '1';

  try {
    if (isEmbeddedQuery) {
      window.sessionStorage.setItem(EMBEDDED_SESSION_KEY, '1');
    }

    return (
      isFramed ||
      isEmbeddedQuery ||
      window.sessionStorage.getItem(EMBEDDED_SESSION_KEY) === '1'
    );
  } catch {
    return isFramed || isEmbeddedQuery;
  }
};
