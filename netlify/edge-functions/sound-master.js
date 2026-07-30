export default async (req) => {
  const url = new URL(req.url);

  const sampleMusicList = [
    {
      music_info: {
        id: 7000001,
        id_str: "7000001",
        title: "Original Sound - sprinkles",
        author: "sprinkles",
        album: "Trending Audio",
        play_url: {
          uri: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3",
          url_list: ["https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3"]
        },
        cover_thumb: {
          url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
        },
        duration: 60,
        user_count: 125000,
        collect_stat: 0
      }
    }
  ];

  // 1. Banner / Sound Picker Header Endpoints
  if (url.pathname.includes("/music/collection")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        mc_list: [
          {
            mc_info: {
              id: 101,
              name: "Hot Song",
              icon: { url_list: [] }
            },
            music_list: sampleMusicList
          }
        ],
        music_list: sampleMusicList
      }),
      { status: 200, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  // 2. Default Music Charts / Hot Song Feed
  if (url.pathname.includes("/chart/music") || url.pathname.includes("/music/list")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        cursor: 0,
        has_more: 0,
        music_list: sampleMusicList,
        items: sampleMusicList
      }),
      { status: 200, headers: { "Content-Type": "application/json; charset=utf-8" } }
    );
  }

  return new Response(JSON.stringify({ status_code: 0, music_list: sampleMusicList }), { status: 200 });
};

export const config = {
  path: [
    "/aweme/v1/music/*",
    "/aweme/v2/music/*",
    "/aweme/v1/chart/music/*",
    "/aweme/v2/chart/music/*"
  ]
};
