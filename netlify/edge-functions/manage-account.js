// netlify/edge-functions/manage-account.js

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

  // --- 1. ACCOUNT VERIFICATION & PHONE / EMAIL INFO ---
  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",
      data: {
        email: "user***@gmail.com",
        mobile: "+1 (***) ***-1234",
        is_email_verified: 1,
        is_phone_verified: 1,
        has_password: 1,
        can_change_password: 1,
        user_id: "7117828228"
      },
      // Root fallback for older client versions
      email: "user***@gmail.com",
      mobile: "+1 (***) ***-1234",
      is_email_verified: 1,
      is_phone_verified: 1,
      has_password: 1
    }),
    { status: 200, headers }
  );
};

export const config = {
  path: [
    "/aweme/v1/user/account/*",
    "/aweme/v1/user/account",
    "/aweme/v1/user/settings/account/*",
    "/aweme/v1/user/settings/account",
    "/aweme/v1/account/info/*",
    "/aweme/v1/account/info",
    "/aweme/v1/account/settings/*",
    "/aweme/v1/account/settings",
    "/aweme/v1/passport/account/info/*"
  ]
};
