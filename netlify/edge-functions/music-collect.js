// netlify/edge-functions/music-collect-handler.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const url = new URL(req.url);

  // 1. Try URL Query Param first
  let actionParam = url.searchParams.get("action");

  // 2. Fallback to POST body parameters if query param isn't present
  if (actionParam === null && req.method === "POST") {
    try {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("application/x-www-form-urlencoded")) {
        const text = await req.clone().text();
        const bodyParams = new URLSearchParams(text);
        actionParam = bodyParams.get("action");
      } else if (contentType.includes("application/json")) {
        const body = await req.clone().json();
        actionParam = body.action !== undefined ? String(body.action) : null;
      }
    } catch (_) {
      // Ignore body parsing failures
    }
  }

  // Action: 1 = favorite, 0 = unfavorite (default to 1)
  const isCollect = actionParam !== null ? parseInt(actionParam, 10) : 1;

  // Full response schema covering both old and new client requirements
  const responseData = {
    status_code: 0,
    status_msg: "",
    is_collect: isCollect,
    collect_status: isCollect,
    extra: {
      now: Date.now(),
      fatal_item_ids: [],
      logid: `collect_${Math.floor(Math.random() * 1000000)}`
    }
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/music/collect",
    "/aweme/v1/music/collect/*",
    "/aweme/v2/music/collect",
    "/aweme/v2/music/collect/*",
    "/aweme/v1/user/collect/music",
    "/aweme/v1/user/collect/music/*"
  ]
};
