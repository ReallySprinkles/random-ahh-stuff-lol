exports.handler = async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Return a mock comment payload that satisfies TikTok's list parser
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status_code: 0,
      comments: [
        {
          cid: "7350000000000000001",
          text: "le test",
          create_time: 1700000000,
          digg_count: 13,
          status: 1,
          user: {
            uid: "735712345678",
            unique_id: "sprinkles.dude",
            nickname: "sprinkles",
            avatar_thumb: {
              url_list: [
                "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
              ]
            }
          }
        }
      ],
      has_more: 0,
      cursor: 0,
      total: 1
    })
  };
};
