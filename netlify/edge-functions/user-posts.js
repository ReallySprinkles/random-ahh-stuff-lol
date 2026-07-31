// netlify/edge-functions/user-feed.js

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

  // --- USER POST FEED DATA ---
  const feedPayload = {
    status_code: 0,
    has_more: 0,
    max_cursor: 0,
    min_cursor: 0,
    aweme_list: [
      {
        aweme_id: "7100000000000000001",
        desc: "55 people I love you only ahh song 🥀 #Eminem #Ronaldo",
        is_top: 1,
        statistics: { play_count: 2100000, digg_count: 157500, comment_count: 2235, collect_count: 30600 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604678"]
          }
        }
      },
      {
        aweme_id: "7100000000000000002",
        desc: "Ain't no way 😭✌️ #fyp #roblox #epstein #epsteinfiles #epsteinroblox",
        is_top: 1,
        statistics: { play_count: 1300000, digg_count: 63100, comment_count: 665, collect_count: 5732 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604679"]
          }
        }
      },
      {
        aweme_id: "7100000000000000003",
        desc: "hi #Eminem #Ronaldo #eladeselasobinubaliepraso",
        is_top: 1,
        statistics: { play_count: 739400, digg_count: 70700, comment_count: 1107, collect_count: 9742 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604680"]
          }
        }
      },
      {
        aweme_id: "7100000000000000004",
        desc: "#CapCut",
        is_top: 0,
        statistics: { play_count: 216, digg_count: 10, comment_count: 3, collect_count: 2 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604681"]
          }
        }
      },
      {
        aweme_id: "7100000000000000005",
        desc: "",
        is_top: 0,
        statistics: { play_count: 306, digg_count: 18, comment_count: 4, collect_count: 3 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604682"]
          }
        }
      },
      {
        aweme_id: "7100000000000000006",
        desc: "",
        is_top: 0,
        statistics: { play_count: 0, digg_count: 24, comment_count: 2, collect_count: 10 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604683"]
          }
        }
      },
      {
        aweme_id: "7100000000000000007",
        desc: "",
        is_top: 0,
        statistics: { play_count: 956, digg_count: 22, comment_count: 5, collect_count: 7 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604684"]
          }
        }
      },
      {
        aweme_id: "7100000000000000008",
        desc: "#CapCut",
        is_top: 0,
        statistics: { play_count: 1022, digg_count: 32, comment_count: 7, collect_count: 7 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604685"]
          }
        }
      },
      {
        aweme_id: "7100000000000000009",
        desc: "app is called L.L.E",
        is_top: 0,
        statistics: { play_count: 350, digg_count: 8, comment_count: 6, collect_count: 2 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604686"]
          }
        }
      },
      {
        aweme_id: "7100000000000000010",
        desc: "#CapCut",
        is_top: 0,
        statistics: { play_count: 571, digg_count: 10, comment_count: 3, collect_count: 4 },
        video: {
          cover: {
            url_list: ["https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/1654573752604687"]
          }
        }
      }
    ]
  };

  return new Response(JSON.stringify(feedPayload), { status: 200, headers });
};

export const config = {
  path: [
    "/aweme/v1/aweme/post/*",
    "/aweme/v1/aweme/post",
    "/aweme/v1/aweme/favorite/*",
    "/aweme/v1/aweme/favorite",
    "/aweme/v1/user/aweme/*"
  ]
};
