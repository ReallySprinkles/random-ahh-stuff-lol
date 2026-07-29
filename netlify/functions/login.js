exports.handler = async (event, context) => {
  console.log("--> LOGIN REQUEST PATH:", event.path);
  console.log("--> METHOD:", event.httpMethod);

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Set-Cookie": "sessionid=mock_session_active_12345; Path=/; Domain=.netlify.app; HttpOnly"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Exact legacy Passport success payload structure
  const responsePayload = {
    message: "success",
    status_code: 0,
    data: {
      error_code: 0,
      is_login: 1,
      session_key: "mock_session_active_12345",
      user_id: "735712345678",
      uid: "735712345678",
      screen_name: "Sprinkles",
      unique_id: "sprinkles.dude",
      sec_user_id: "MS4wLjABAAAA_mock_sec_uid_12345",
      visitor_id: "",
      register_time: 1600000000,
      status: 1
    }
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(responsePayload)
  };
};
