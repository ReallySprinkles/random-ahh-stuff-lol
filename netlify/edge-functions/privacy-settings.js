// netlify/edge-functions/privacy-settings.js

export default async (req) => {
  const url = new URL(req.url);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // --- 1. BLOCK LIST ENDPOINTS ---
  if (url.pathname.includes("/block/list")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        block_list: [
          {
            uid: "9999999999",
            nickname: "Blocked Account",
            unique_id: "blocked_user",
            avatar_thumb: {
              url_list: [
                "https://p16-va-tiktok.ibyteimg.com/img/musically-maliva-obj/1654573752604678~c5_100x100.jpeg"
              ]
            }
          }
        ],
        has_more: 0
      }),
      { status: 200, headers }
    );
  }

  // --- 2. BLOCK / UNBLOCK ACTION ---
  if (url.pathname.includes("/user/block") || url.pathname.includes("/block")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        block_status: 1
      }),
      { status: 200, headers }
    );
  }

  // --- 3. PRIVACY, DISCOVERABILITY & PUSH NOTIFICATION TOGGLES ---
  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",

      // Privacy & Findability Flags
      is_private: 1,
      is_secret: 1,
      secret: 1,
      allow_others_to_find_me: 1,
      allow_find_by_contacts: 1,
      allow_special_find: 1,
      find_by_contacts: 1,
      find_by_phone: 1,

      // Push Notification Switch Flags
      comment: 1,
      follow: 1,
      digg: 1,
      fans: 1,
      likes: 1,
      new_fans: 1,
      new_likes: 1,
      new_comments: 1,

      user: {
        uid: "7117828228",
        secret: 0,
        is_private: 0,
        allow_others_to_find_me: 1,
        allow_find_by_contacts: 1,
        allow_special_find: 1,
        comment: 1,
        follow: 1,
        digg: 1
      },
      settings: {
        status_code: 0,
        allow_others_to_find_me: 1,
        allow_find_by_contacts: 1,
        allow_special_find: 1,
        is_private: 1,
        secret: 1,
        comment: 1,
        follow: 1,
        digg: 1,
        fans: 1,
        likes: 1
      }
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/user/block/*",
    "/aweme/v1/user/block",
    "/aweme/v1/user/block/list/*",
    "/aweme/v1/user/block/list",
    "/aweme/v1/user/settings/*",
    "/aweme/v1/user/settings",
    "/aweme/v1/user/settings/notice/*",
    "/aweme/v1/user/settings/notice",
    "/aweme/v1/user/notice/*",
    "/aweme/v1/user/notice/settings/*",
    "/aweme/v1/notify/settings/*",
    "/aweme/v1/notify/settings",
    "/aweme/v1/user/set/settings/*",
    "/aweme/v1/user/set/settings",
    "/aweme/v1/user/settings/set/*",
    "/aweme/v1/user/settings/set",
    "/aweme/v1/user/set/*",
    "/aweme/v1/user/set",
    "/aweme/v1/user/settings/find/*",
    "/aweme/v1/user/privacy/*",
    "/aweme/v1/user/privacy",
    "/aweme/v1/user/modify/*",
    "/aweme/v1/user/modify",
    "/aweme/v1/commit/user/*",
    "/aweme/v1/commit/user/set/*",
    "/aweme/v1/privacy/settings/*",
    "/aweme/v1/privacy/*",
    "/aweme/v1/settings/*",
    "/settings/*"
  ]
};
