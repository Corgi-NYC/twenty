// Bullpen fork: one Twenty workspace per Bullpen firm, so the self-hosted cap is
// configurable (Aaron 2026-11-07: "treating the users ... the same way as the bullpen db").
const configured = Number(process.env.MAX_WORKSPACES_WITHOUT_ENTERPRISE_KEY);

export const MAX_WORKSPACES_WITHOUT_ENTERPRISE_KEY =
  Number.isFinite(configured) && configured > 0 ? configured : 5;
