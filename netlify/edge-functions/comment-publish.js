export default async (req) => {
  let userText = "Comment"; // Fallback default

  try {
    if (req.method === "POST") {
      const contentType = req.headers.get("content-type") || "";

      // 1. Handle Form-UrlEncoded data (standard TikTok/Douyin app behavior)
      if (contentType.includes("application/x-www-form-urlencoded")) {
        const bodyText = await req.text();
        const params = new URLSearchParams(bodyText);
        userText = params.get("text") || userText;
      } 
      // 2. Handle JSON data (if using custom web clients or modified payloads)
      else if (contentType.includes("application/json")) {
        const bodyJson = await req.json();
        userText = bodyJson.text || userText;
      }
    }
  } catch (err) {
    console.error("Failed to parse incoming comment body:", err);
  }

  const defaultPic = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";
  const avatarObj = {
    uri: defaultPic,
    url_list: [defaultPic, defaultPic],
    width: 720,
    height: 1280
  };

  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",
      comment: {
        cid: String(Date.now()), // Unique comment ID based on timestamp
        text: userText,          // Dynamic user input text
        create_time: Math.floor(Date.now() / 1000), // 10-digit UNIX timestamp integer
        aweme_id: "7000000000000000001",
        digg_count: 0,           // Explicit integer for right-hand like section
        user_digged: 0,          // Explicit flag for client interaction state
        status: 1,               // Active comment status code
        reply_comment: null,
        user: {
          uid: "7117828228",
          short_id: "7117828228",
          unique_id: "sprinkles.dude",
          display_id: "sprinkles.dude", // Required by legacy musical.ly for handle formatting
          nickname: "sprinkles",
          custom_verify: "",
          enterprise_verify_reason: "",
          avatar_thumb: avatarObj,
          avatar_medium: avatarObj,
          avatar_larger: avatarObj
        }
      }
    }),
    {
      status: 200,
      headers: { 
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/comment/publish/",
    "/aweme/v1/comment/publish",
    "/aweme/v2/comment/publish/",
    "/aweme/v2/comment/publish"
  ]
};
