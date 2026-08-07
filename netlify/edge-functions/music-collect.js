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

  // 1. Check URL query params for action/type
  let actionParam = url.searchParams.get("action") || url.searchParams.get("collect_status");

  // 2. Parse form-urlencoded or JSON body if action isn't in URL query
  if (actionParam === null && req.method === "POST") {
    try {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("application/x-www-form-urlencoded")) {
        const text = await req.clone().text();
        const bodyParams = new URLSearchParams(text);
        actionParam = bodyParams.get("action") || bodyParams.get("collect_status");
      } else if (contentType.includes("application/json")) {
        const body = await req.clone().json();
        actionParam = body.action ?? body.collect_status ?? null;
        if (actionParam !== null) actionParam = String(actionParam);
      }
    } catch (_) {
      // Ignore body parse errors
    }
  }

  // Determine state: default to 1 (collected/favorited)
  const isCollect = actionParam !== null ? parseInt(actionParam, 10) : 1;

  // Complete response object handling all client variations
  const responseData = {
    status_code: 0,
    status_msg: "",
    is_collect: isCollect,
    collect_status: isCollect,
    is_favorite: isCollect,
    favorite_status: isCollect,
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
    "/aweme/v1/user/collect/music/*",
    "/aweme/v1/aweme/collect",
    "/aweme/v1/aweme/collect/*",
    "/aweme/v1/commit/item/collect",
    "/aweme/v1/commit/item/collect/*"
  ]
};
