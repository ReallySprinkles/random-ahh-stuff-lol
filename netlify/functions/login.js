exports.handler = async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Set-Cookie": "sessionid=mock_session_12345; Path=/; HttpOnly; SameSite=Lax"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      "message": "success",
      "status_code": 0,
      "data": {
        "description": "",
        "error_code": 0,
        "is_login": 1,
        "session_key": "mock_session_12345",
        "user_id": "12345",
        "uid": "12345",
        "screen_name": "sprinkles",
        "unique_id": "sprinkles.dude",
        "status": 1,
        "avatar_thumb": {
          "url_list": [
            "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
          ]
        }
      }
    })
  };
};
