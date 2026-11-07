import { getFrontendPathname } from '~/utils/frontendBasePath';
import { isAiChatPath } from '~/utils/isAiChatPath';

export const isCurrentPathAiChatPage = () =>
  isAiChatPath(getFrontendPathname());
