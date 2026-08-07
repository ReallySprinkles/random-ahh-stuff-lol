// netlify/edge-functions/music-collect-handler.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const url = new URL(req.url);

  // 🔑 Extract action parameter (1 = favorite, 0 = unfavorite)
  const actionParam = url.searchParams.get("action");
  const isCollect = actionParam !== null ? parseInt(actionParam, 10) : 1;

  // Return success payload expected by the client to update UI state
  return new Response(
    JSON.stringify({
      status_code: 0,
      is_collect: isCollect,
      status_msg: ""
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/music/collect/*",
    "/aweme/v1/music/collect"
  ]
};
