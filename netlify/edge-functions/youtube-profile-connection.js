// netlify/edge-functions/profile-master.js

export default async (req) => {
  const url = new URL(req.url);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK, X-Tt-Token",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const profileUrl = `https://musically.com/h5/share/usr/7117828228`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(profileUrl)}`;

  // --- 1. SETTINGS ENDPOINT CHECK ---
  // The app checks settings before loading QR features or allowed upload sizes.
  if (url.pathname.includes("/settings/")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        settings: {
          enable_qrcode: 1,
          share_url_white_list: ["*"],
          enable_music_picker: 1,
          upload_video_size_limit: 500000000
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 2. UPLOAD AUTH / PREPARE (Bypasses CDN upload check) ---
  if (
    url.pathname.includes("/upload/") ||
    url.pathname.includes("/enc/video/") ||
    url.pathname.includes("/upload_authkey")
  ) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "success",
        auth_key: "fake_auth_token_bypass",
        access_key: "fake_access_key",
        secret_access_token: "fake_secret",
        session_token: "fake_session",
        space_name: "tiktok"
      }),
      { status: 200, headers }
    );
  }

  // --- 3. CREATE / COMMIT AWEME (Fakes the final post creation) ---
  if (
    url.pathname.includes("/create/aweme") ||
    url.pathname.includes("/aweme/create") ||
    url.pathname.includes("/commit/aweme")
  ) {
    const fakeAwemeId = `7117828228${Math.floor(Math.random() * 10000)}`;

    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "success",
        aweme: {
          aweme_id: fakeAwemeId,
          desc: "Fake upload post",
          create_time: Math.floor(Date.now() / 1000),
          author: {
            uid: "7117828228",
            nickname: "Name",
            unique_id: "Username"
          },
          status: {
            allow_comment: true,
            allow_share: true,
            is_private: false,
            with_goods: false
          },
          statistics: {
            aweme_id: fakeAwemeId,
            comment_count: 0,
            digg_count: 0,
            play_count: 0,
            share_count: 0
          }
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 4. DEDICATED QR CODE ENDPOINTS ---
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

  // --- 5. PROFILE & USER PAYLOAD ---
  const userPayload = {
    status_code: 0,
    user: {
      uid: "7117828228",
      short_id: "7117828228",
      nickname: "Name",
      unique_id: "Username",
      signature: "Description",

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
    "/aweme/v1/user/*",
    "/aweme/v1/user/detail/*",
    "/aweme/v1/social/bind/*",
    "/aweme/v1/qrcode/*",
    "/aweme/v1/user/qrcode/*",
    "/aweme/v1/settings/*",
    "/settings/*",
    "/aweme/v1/upload/*",
    "/aweme/v1/create/aweme/*",
    "/aweme/v1/aweme/create/*",
    "/aweme/v1/commit/aweme/*",
    "/aweme/v1/enc/video/*"
  ]
};
