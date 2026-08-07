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

  let actionParam = url.searchParams.get("action") || url.searchParams.get("collect_status");
  let musicId = url.searchParams.get("music_id") || url.searchParams.get("id") || "7000000000000000001";

  if (req.method === "POST") {
    try {
      const contentType = req.headers.get("content-type") || "";
      if (contentType.includes("application/x-www-form-urlencoded")) {
        const text = await req.clone().text();
        const bodyParams = new URLSearchParams(text);
        actionParam = actionParam || bodyParams.get("action") || bodyParams.get("collect_status");
        musicId = bodyParams.get("music_id") || bodyParams.get("id") || musicId;
      } else if (contentType.includes("application/json")) {
        const body = await req.clone().json();
        actionParam = actionParam || body.action || body.collect_status;
        musicId = body.music_id || body.id || musicId;
      }
    } catch (_) {
      // Body parse fallback
    }
  }

  const isCollect = actionParam !== null && actionParam !== undefined ? parseInt(actionParam, 10) : 1;
  const numericMusicId = String(musicId);

  // Return full music payload structure expected by older app versions
  const responseData = {
    status_code: 0,
    status_msg: "",
    is_collect: isCollect,
    collect_status: isCollect,
    is_favorite: isCollect,
    favorite_status: isCollect,
    music_info: {
      id: numericMusicId,
      id_str: numericMusicId,
      title: "Original Sound",
      author: "sprinkles",
      is_original: true,
      collect_stat: isCollect,
      user_count: 1
    },
    music: {
      id: numericMusicId,
      id_str: numericMusicId,
      collect_stat: isCollect
    },
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
