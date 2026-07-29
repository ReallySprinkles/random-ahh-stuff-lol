exports.handler = async (event, context) => {
  console.log("--> INCOMING REQUEST PATH:", event.path);
  console.log("--> HTTP METHOD:", event.httpMethod);
  
  // Grab parameters whether they came via GET query strings or POST body
  const params = event.httpMethod === "GET" 
    ? event.queryStringParameters || {} 
    : Object.fromEntries(new URLSearchParams(event.body || ""));

  console.log("--> PARSED PARAMS:", JSON.stringify(params));

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Set-Cookie": "sessionid=mock_session_123456789; Path=/; HttpOnly; SameSite=Lax"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // TikTok v8.3.1 Passport Success Response Schema
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      "message": "success",
      "status_code": 0,
      "data": {
        "error_code": 0,
        "is_login": 1,
        "session_key": "mock_session_123456789",
        "user_id": "735712345678",
        "uid": "735712345678",
        "screen_name": "Sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_url": "https://39o.netlify.app/avatar.jpg"
      }
    })
  };
};
