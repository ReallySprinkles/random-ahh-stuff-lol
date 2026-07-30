// netlify/edge-functions/sound-master.js

export default async (req) => {
  const url = new URL(req.url);

  // Global CORS headers required by the client app
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  // Preflight check
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // Base track object expected by 7.x sound picker
  const musicWrapper = {
    music_info: {
      id: 7000001,
      id_str: "7000001",
      title: "Original Sound - sprinkles",
      author: "sprinkles",
      album: "Original Sound",
      duration: 60,
      user_count: 500000,
      collect_stat: 0,
      cover_thumb: {
        url_list: [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
        ]
      },
      cover_medium: {
        url_list: [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
        ]
      },
      play_url: {
        uri: "v1c044g50000d9f5pu7og65j257oon60.mp3",
        url_list: [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    }
  };

  const responsePayload = {
    status_code: 0,
    has_more: 0,
    cursor: 0,
    music: [musicWrapper],
    music_list: [musicWrapper],
    category_list: [
      {
        mc_info: {
          id: 101,
          name: "Hot Song",
          icon: {
            url_list: [
              "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
            ]
          }
        },
        music_list: [musicWrapper]
      }
    ],
    mc_list: [
      {
        mc_info: {
          id: 101,
          name: "Hot Song",
          icon: {
            url_list: [
              "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
            ]
          }
        },
        music_list: [musicWrapper]
      }
    ],
    banner_list: [],
    extra: {
      now: Date.now(),
      logid: "7x_musically_sound_picker_edge"
    }
  };

  return new Response(JSON.stringify(responsePayload), {
    status: 200,
    headers
  });
};

// Redirect / path config directly at the bottom
export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v1/chart/music/*",
    "/aweme/v2/chart/music/*",
    "/aweme/v1/orig/music/*",
    "/aweme/v1/recommend/music/*",
    "/aweme/v1/music/collection/*",
    "/aweme/v1/music/collection/feed/*",
    "/aweme/v1/category/list/*",
    "/aweme/v1/music/list/*"
  ]
};
