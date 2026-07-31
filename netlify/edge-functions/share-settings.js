// netlify/edge-functions/share-settings.js

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

  const profileUrl = "https://musically.com/h5/share/usr/7117828228";
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(profileUrl)}`;

  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",
      share_info: {
        share_url: profileUrl,
        share_weibo_desc: "Check out my profile!",
        share_desc: "Check out my profile!",
        share_title: "Share Profile",
        share_title_myself: "Share Profile",
        share_title_other: "Check out this profile!",
        share_quote: "",
        share_signature_url: "",
        bool_persist: 1,
        share_qrcode_url: {
          uri: "qrcode/7117828228.png",
          url_list: [qrImageUrl]
        }
      },
      share_url: profileUrl,
      user_share_info: {
        share_url: profileUrl
      }
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/user/share/settings/*",
    "/aweme/v1/user/share/settings",
    "/aweme/v1/share/settings/*",
    "/aweme/v1/share/settings",
    "/aweme/v1/user/profile/share/*",
    "/aweme/v1/user/profile/share",
    "/aweme/v1/user/share/*",
    "/aweme/v1/user/share",
    "/aweme/v1/share/user/*",
    "/aweme/v1/share/info/*"
  ]
};
