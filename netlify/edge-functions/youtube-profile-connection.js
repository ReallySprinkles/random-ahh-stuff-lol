// netlify/edge-functions/profile-master.js

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

  const profileUrl = `https://musically.com/h5/share/usr/7117828228`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(profileUrl)}`;

  // --- 1. PRIVACY & SETTINGS TOGGLES ---
  // Catches Private Account, Allow Others to Find Me, and all privacy switches
  if (
    url.pathname.includes("/user/settings") ||
    url.pathname.includes("/user/set") ||
    url.pathname.includes("/set/settings") ||
    url.pathname.includes("/settings/set") ||
    url.pathname.includes("/privacy/") ||
    url.pathname.includes("/commit/user")
  ) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        is_private: 1,
        is_secret: 1,
        secret: 1,
        allow_others_to_find_me: 1,
        allow_find_by_contacts: 1,
        allow_special_find: 1,
        find_by_contacts: 1,
        find_by_phone: 1,
        user: {
          uid: "7117828228",
          secret: 0,
          is_private: 0,
          allow_others_to_find_me: 1,
          allow_find_by_contacts: 1,
          allow_special_find: 1
        },
        settings: {
          status_code: 0,
          allow_others_to_find_me: 1,
          allow_find_by_contacts: 1,
          allow_special_find: 1,
          is_private: 1,
          secret: 1
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 2. GLOBAL SETTINGS ENDPOINT CHECK ---
  if (url.pathname.includes("/settings/")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        settings: {
          enable_qrcode: 1,
          share_url_white_list: ["*"],
          enable_music_picker: 1
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 3. DEDICATED QR CODE ENDPOINTS ---
  if (url.pathname.includes("/qrcode")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        qrcode_url: {
          uri: "qrcode/7117828228.png",
          url_list: [qrImageUrl]
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 4. PROFILE & USER PAYLOAD ---
  const userPayload = {
    status_code: 0,
    user: {
      uid: "7117828228",
      short_id: "7117828228",
      nickname: "Name",
      unique_id: "Username",
      signature: "Description",
      secret: 0,
      is_private: 0,
      allow_others_to_find_me: 1,
      allow_find_by_contacts: 1,
      allow_special_find: 1,

      // --- Embedded QR Code Object ---
      qrcode_url: {
        uri: "qrcode/7117828228.png",
        url_list: [qrImageUrl]
      },

      // --- Social Links ---
      youtube_channel_id: "UCC45pszowTR4u8OrY0HBYPA",
      youtube_channel_title: "sprinkles",
      ins_id: "iamreallysprinkles",

      // --- Profile Stats ---
      following_count: 2,
      follower_count: 2,
      total_favorited: 100000,
      aweme_count: 1,
      favoriting_count: 1
    },
    extra: {
      now: Date.now(),
      logid: "profile_social_edge"
    }
  };

  return new Response(JSON.stringify(userPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/user/profile/self/*",
    "/aweme/v1/user",
    "/aweme/v1/user/detail/*",
    "/aweme/v1/user/settings/*",
    "/aweme/v1/user/set/settings/*",
    "/aweme/v1/user/settings/set/*",
    "/aweme/v1/user/set/*",
    "/aweme/v1/user/settings/find/*",
    "/aweme/v1/user/privacy/*",
    "/aweme/v1/commit/user/*",
    "/aweme/v1/commit/user/set/*",
    "/aweme/v1/privacy/settings/*",
    "/aweme/v1/privacy/*",
    "/aweme/v1/social/bind/*",
    "/aweme/v1/qrcode/*",
    "/aweme/v1/user/qrcode/*",
    "/aweme/v1/settings/*",
    "/settings/*"
  ]
};
