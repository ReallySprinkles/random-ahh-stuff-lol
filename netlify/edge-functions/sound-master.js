export default async (req) => {
  const url = new URL(req.url);
  const now = Math.floor(Date.now() / 1000);

  // 1. HOME FEED HANDLER (/aweme/v1/feed/)
  if (url.pathname.includes("/feed")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        min_cursor: 0,
        max_cursor: 0,
        has_more: 1,
        aweme_list: [
          {
            aweme_id: "7100000000000000001",
            desc: "Welcome back to the feed!",
            create_time: now,
            author: {
              uid: "10001",
              nickname: "sprinkles",
              unique_id: "sprinkles",
              avatar_thumb: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              }
            },
            video: {
              play_addr: {
                url_list: ["https://v16m-default.akamaized.net/example.mp4"]
              },
              cover: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              },
              duration: 15000
            },
            music: {
              id: 7000001,
              title: "Original Sound - sprinkles",
              author: "sprinkles"
            },
            statistics: {
              digg_count: 61,
              comment_count: 1,
              share_count: 5,
              play_count: 1000
            },
            status: { allow_comment: true, is_delete: false }
          }
        ]
      }),
      { status: 200, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  // 2. SOUND PICKER HANDLER (/aweme/v1/music/*, etc.)
  const soundData = {
    id: 7000001,
    id_str: "7000001",
    title: "Original Sound - sprinkles",
    author: "sprinkles",
    album: "sprinkles",
    status: 1,
    music_status: 1,
    duration: 60,
    user_count: 500000,
    collect_stat: 0,
    owner_handle: "sprinkles",
    owner_nickname: "sprinkles",
    play_url: {
      uri: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3",
      url_list: ["https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3"]
    },
    cover_hd: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] },
    cover_large: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] },
    cover_medium: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] },
    cover_thumb: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] }
  };

  const soundItem = {
    music_info: soundData,
    music: soundData,
    ...soundData
  };

  return new Response(
    JSON.stringify({
      status_code: 0,
      cursor: 0,
      has_more: 0,
      music_list: [soundItem],
      music: [soundItem],
      items: [soundItem],
      mc_list: [
        {
          mc_info: { id: "101", name: "Hot Song", icon: { url_list: [] } },
          music_list: [soundItem]
        }
      ]
    }),
    { status: 200, headers: { "Content-Type": "application/json; charset=utf-8" } }
  );
};

export const config = {
  path: [
    "/aweme/v1/feed/*",
    "/aweme/v2/feed/*",
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v1/chart/music/*",
    "/aweme/v1/recommend/music/*"
  ]
};
