export default async (req) => {
  const url = new URL(req.url);

  // Single track definition: "Original Sound - sprinkles" by sprinkles
  const track = {
    id: 7000001,
    id_str: "7000001",
    title: "Original Sound - sprinkles",
    author: "sprinkles",
    album: "sprinkles",
    status: 1,           // Critical: 1 = Active/Playable
    music_status: 1,     // Required by older client filters
    duration: 60,
    user_count: 500000,
    collect_stat: 0,
    prevent_download: false,
    owner_handle: "sprinkles",
    owner_nickname: "sprinkles",
    play_url: {
      uri: "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3",
      url_list: [
        "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/example.mp3"
      ]
    },
    cover_hd: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] },
    cover_large: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] },
    cover_medium: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] },
    cover_thumb: { url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"] }
  };

  // Hybrid wrapper supporting both direct and nested parser models
  const itemWrapper = {
    ...track,
    music_info: track,
    music: track
  };

  const responseBody = {
    status_code: 0,
    cursor: 0,
    has_more: 0,
    music_list: [itemWrapper, track],
    music: [itemWrapper, track],
    items: [itemWrapper, track],
    mc_list: [
      {
        mc_info: {
          id: "101",
          name: "Hot Song",
          icon: { url_list: [] }
        },
        music_list: [itemWrapper, track]
      }
    ]
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
};

export const config = {
  path: ["/aweme/*"]
};
