// netlify/edge-functions/react-handler.js

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

  // Success payload confirming reaction permissions are valid
  const responsePayload = {
    status_code: 0,
    status_msg: "",
    can_react: true,
    item_react: 0,
    react_setting: 0
  };

  return new Response(JSON.stringify(responsePayload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/commit/item/react/*",
    "/aweme/v1/commit/item/react",
    "/aweme/v1/react/check/*",
    "/aweme/v1/react/check"
  ]
};
