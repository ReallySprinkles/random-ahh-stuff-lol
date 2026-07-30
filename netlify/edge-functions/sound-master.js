export default async (req) => {
  const url = new URL(req.url);

  // Updated Music Object: "Original Sound - sprinkles" by sprinkles
  const rawMusicItem = {
    id: 7000001,
    id_str: "7000001",
    title: "Original Sound - sprinkles",
    author: "sprinkles",
    album: "sprinkles",
    duration: 60,
    user_count: 500000,
    collect_stat: 0,
    user_digg: 0,
    offline_desc: "",
    owner_handle: "sprinkles",
    owner_nickname: "sprinkles",
    play_url: {
      uri: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3",
      url_list: [
        "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3"
      ]
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

  const musicWrapper = {
    music_info: rawMusicItem,
    ...rawMusicItem
  };

  return new Response(
    JSON.stringify({
      status_code: 0,
      cursor: 0,
      has_more: 0,
      // Comprehensive array redundancy for different client versions
      music_list: [musicWrapper],
      music: [musicWrapper],
      items: [musicWrapper],
      aweme_list: [],
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
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v1/chart/music/*",
    "/aweme/v2/chart/music/*",
    "/aweme/v1/orig/music/*",
    "/aweme/v1/recommend/music/*"
  ]
};
