export default async (req) => {
  const url = new URL(req.url);

  // Raw music object formatted for older & newer client parser models
  const rawMusicItem = {
    id: 7000001,
    id_str: "7000001",
    title: "Original Sound - sprinkles",
    author: "sprinkles",
    album: "Trending Audio",
    duration: 60,
    user_count: 500000,
    collect_stat: 0,
    play_url: {
      uri: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3",
      url_list: ["https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3"]
    },
    cover_hd: {
      url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
    },
    cover_large: {
      url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
    },
    cover_medium: {
      url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
    },
    cover_thumb: {
      url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
    }
  };

  // Wrapped item for collection lists
  const musicWrapper = {
    music_info: rawMusicItem,
    ...rawMusicItem
  };

  const responseData = {
    status_code: 0,
    cursor: 0,
    has_more: 0,
    // Universal list keys used across different client versions
    music_list: [musicWrapper],
    music: [musicWrapper],
    items: [musicWrapper],
    mc_list: [
      {
        mc_info: {
          id: 101,
          name: "Hot Song",
          icon: { url_list: [] }
        },
        music_list: [musicWrapper]
      }
    ]
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};

export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v1/chart/music/*",
    "/aweme/v2/chart/music/*"
  ]
};
