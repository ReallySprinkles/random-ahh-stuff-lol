export default async (req) => {
  const url = new URL(req.url);
  const now = Math.floor(Date.now() / 1000);

  // Extract requested tag name from query params (defaults to 'musically' if not found)
  const tagName = url.searchParams.get("ch_name") || url.searchParams.get("cha_name") || "musically";
  const cid = url.searchParams.get("cid") || "12345678";

  // 1. Hashtag Header Info Endpoint (/aweme/v1/challenge/detail/)
  if (url.pathname.includes("/challenge/detail")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        challenge_detail: {
          cid: cid,
          cha_name: tagName, // Dynamically sets "#musically"
          desc: `Welcome to the official #${tagName} tag page! Share your videos and see what's trending.`,
          schema: `sslocal://challenge/detail?cid=${cid}`,
          type: 0,
          sub_type: 0,
          view_count: 5400000000, // 5.4B views
          user_count: 890000,     // 890k posts
          is_pgcshow: false,
          collect_stat: 0,
          author: {
            uid: "0",
            nickname: "",
            unique_id: ""
          },
          share_info: {
            share_url: `https://www.tiktok.com/tag/${tagName}`,
            share_title: `#${tagName} on TikTok`,
            share_desc: `Watch the latest videos about #${tagName} on TikTok.`
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

        // Populating dummy video objects removes the "Be the first to create a video" empty state
        aweme_list: [
          {
            aweme_id: "7000000000000000001",
            desc: `Check out this #${tagName} video!`,
            create_time: now,
            author: {
              uid: "10001",
              nickname: "Creator One",
              unique_id: "creator.one",
              avatar_thumb: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              }
            },
            statistics: {
              digg_count: 12500,
              comment_count: 340,
              share_count: 80,
              play_count: 150000
            },
            status: { allow_comment: true, is_delete: false }
          }
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
