export default async (req) => {
  const url = new URL(req.url);
  const now = Math.floor(Date.now() / 1000);

  // 1. Hashtag Header Info Endpoint (/aweme/v1/challenge/detail/)
  if (url.pathname.includes("/challenge/detail")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        challenge_detail: {
          cid: "12345678",
          cha_name: "musically",
          desc: "Welcome to the official #musically tag page! Post your videos here to get featured.",
          schema: "sslocal://challenge/detail?cid=12345678",
          type: 0,
          sub_type: 0,
          view_count: 9876543210, // Total views display
          user_count: 150000,      // Number of posts
          is_pgcshow: false,
          collect_stat: 0,         // 0 = Not bookmarked, 1 = Bookmarked
          author: {
            uid: "0",
            nickname: "",
            unique_id: ""
          },
          share_info: {
            share_url: "https://www.tiktok.com/tag/foryou",
            share_title: "#foryou on TikTok",
            share_desc: "Watch the latest videos about #foryou on TikTok."
          }
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      }
    );
  }

  // 2. Hashtag Video Feed Endpoint (/aweme/v1/challenge/aweme/)
  if (url.pathname.includes("/challenge/aweme")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        min_cursor: 0,
        max_cursor: 0,
        has_more: 0,
        aweme_list: [
          /* Array of video objects (same standard Aweme schema as FYP) */
        ]
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      }
    );
  }

  return new Response(JSON.stringify({ status_code: 0 }), { status: 200 });
};

export const config = {
  path: [
    "/aweme/v1/challenge/detail/*",
    "/aweme/v2/challenge/detail/*",
    "/aweme/v1/challenge/aweme/*",
    "/aweme/v2/challenge/aweme/*"
  ]
};
