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

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      status_code: 0,
      error_code: 0,
      comments: [
        {
          cid: "7350000000000000001",
          aweme_id: "7350000000000000001",
          text: "le test",
          create_time: 1700000000,
          digg_count: 13,
          status: 1,
          user: {
            uid: "735712345678",
            unique_id: "sprinkles.dude",
            nickname: "Sprinkles",
            avatar_thumb: {
              url_list: [
                "https://39o.netlify.app/avatar.jpg"
              ]
            }
          },
          reply_comment: null,
          total_reply_count: 0
        }
      ],
      has_more: 0,
      cursor: 0,
      total: 1,
      upvote_info: {
        max_position: 0,
        is_upvote: 0,
        upvote_comment_id: ""
      }
    })
  };
};
