// netlify/edge-functions/feed-handler.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const url = new URL(req.url);
  const reqMaxCursor = url.searchParams.get("max_cursor") || "0";
  const now = Date.now();

  // Helper to construct image objects expected by legacy builds
  const makeImageObj = (imgUrl) => ({
    uri: imgUrl,
    url_list: [imgUrl, imgUrl],
    width: 720,
    height: 1280
  });

  // Helper function to pad Aweme objects with legacy fields
  const formatAweme = (item, index) => {
    const defaultPic = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";
    const authorPic = item.author?.avatar_thumb?.url_list?.[0] || defaultPic;
    const avatarObj = makeImageObj(authorPic);
    const uniqueAwemeId = String(item.aweme_id || `${now}${index}`);

    return {
      aweme_id: uniqueAwemeId,
      aweme_type: 0,
      rate: 1,
      desc: item.desc || "",
      create_time: Math.floor(now / 1000),
      author: {
        uid: String(item.author?.uid || "7000000006"),
        short_id: String(item.author?.uid || "7000000006"),
        nickname: item.author?.nickname || "sprinkles",
        unique_id: item.author?.unique_id || "sprinkles.dude",
        secret: 0,
        is_private: false,
        custom_verify: "",
        enterprise_verify_reason: "",
        follow_status: 0,
        follower_status: 0,
        avatar_thumb: avatarObj,
        avatar_medium: avatarObj,
        avatar_larger: avatarObj,
        avatar_168x168: avatarObj,
        avatar_300x300: avatarObj
      },
      music: {
        id: String(item.music?.id || "7000000000000000001"),
        mid: String(item.music?.id || "7000000000000000001"),
        title: item.music?.title || "Original Sound",
        author: item.music?.author || "sprinkles",
        duration: 15,
        status: 1,
        play_url: item.music?.play_url || {
          uri: "music/play.mp3",
          url_list: ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        },
        cover_thumb: avatarObj,
        cover_medium: avatarObj,
        cover_large: avatarObj,
        cover_hd: avatarObj
      },
      video: {
        ...item.video,
        duration: item.video?.duration || 15000,
        height: item.video?.height || 1280,
        width: item.video?.width || 720,
        ratio: "720p",
        has_watermark: false,
        cover: item.video?.cover || avatarObj,
        dynamic_cover: item.video?.dynamic_cover || avatarObj,
        origin_cover: item.video?.origin_cover || avatarObj,
        download_addr: item.video?.play_addr
      },
      video_control: {
        allow_download: true,
        share_type: 0,
        show_progressbar: 1,
        timer_status: 1,
        allow_duet: true,
        allow_react: true
      },
      statistics: {
        aweme_id: uniqueAwemeId,
        digg_count: item.statistics?.digg_count || 1000,
        comment_count: item.statistics?.comment_count || 50,
        share_count: item.statistics?.share_count || 10,
        play_count: 50000
      },
      status: {
        aweme_id: uniqueAwemeId,
        is_delete: false,
        allow_comment: true,
        allow_share: true,
        private_status: 0,
        in_reviewing: false,
        reviewed: 1
      }
    };
  };

  // --- RAW AWEME VIDEO LIST ---
  const rawAwemeList = [
    {
      "aweme_id": "1234567890",
      "desc": "Iphone Tole Tole Phonk 😂😂👑🫱🫱🫱 #wiedlak #bloxyzwiedlakkasefar #wiedlakfamily #meme",
      "author": {
        "uid": "7000000001",
        "nickname": "bloxyz wiedlak kasefar",
        "unique_id": "bloxyz.wiedlak.kasefar",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "bloxyz wiedlak kasefar",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9llee7og65sc7h9l1hg.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 5744,
        "comment_count": 302,
        "share_count": 2076
      }
    },
    {
      "aweme_id": "0987654321",
      "desc": "#Spiderman #polyesteredit",
      "author": {
        "uid": "7000000002",
        "nickname": "Gojo lover",
        "unique_id": "gojo.lover676",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "Gojo lover",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v15044gf0000d9knj6nog65nsjd1qr20.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 108816,
        "comment_count": 1155,
        "share_count": 11418
      }
    },
    {
      "aweme_id": "1000000003",
      "desc": "#CapCut Ishowspeed yawn phonk sparta remix #ishowspeed #yawn #spartaremix #fyp",
      "author": {
        "uid": "7000000003",
        "nickname": "💲",
        "unique_id": "unknownscarface1",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "💲",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v15044gf0000d9lcabnog65sjtptvu00.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 1468,
        "comment_count": 161,
        "share_count": 469
      }
    },
    {
      "aweme_id": "1000000004",
      "desc": "i just love the Kali memes, he rlly deserved it #techtok #tech #kali #leaks #iphoneair",
      "author": {
        "uid": "7000000004",
        "nickname": "𝘿𝙮𝙡𝙖𝙣𝙖𝙣𝙏𝙚𝙘𝙝",
        "unique_id": "dylbanantech",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v24044gl0000d9p4esfog65okk7d3fd0.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 152,
        "comment_count": 70,
        "share_count": 10
      }
    },
    {
      "aweme_id": "1000000005",
      "desc": "#fyp #funny #xycba #hamjimenoippo #cashapp",
      "author": {
        "uid": "7000000005",
        "nickname": "drtenmalonglost3rdson",
        "unique_id": "drtenmalonglost3rdson",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_4238.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Contains: Packrunner Bitch",
        "author": "Konygebony",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v12044gd0000d9m5d9nog65h8f76vsf0.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 106612,
        "comment_count": 635,
        "share_count": 6349
      }
    },
    {
      "aweme_id": "1000000006",
      "desc": "video 6",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 6000,
        "comment_count": 60,
        "share_count": 25
      }
    },
    {
      "aweme_id": "1000000007",
      "desc": "video 7",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 7000,
        "comment_count": 70,
        "share_count": 30
      }
    },
    {
      "aweme_id": "1000000008",
      "desc": "video 8",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 8000,
        "comment_count": 80,
        "share_count": 35
      }
    },
    {
      "aweme_id": "1000000009",
      "desc": "video 9",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 9000,
        "comment_count": 90,
        "share_count": 40
      }
    },
    {
      "aweme_id": "1000000010",
      "desc": "video 10",
      "author": {
        "uid": "7000000006",
        "nickname": "sprinkles",
        "unique_id": "sprinkles.dude",
        "avatar_thumb": {
          "url_list": ["https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"]
        }
      },
      "music": {
        "id": "7000000000000000001",
        "title": "Original Sound",
        "author": "sprinkles",
        "play_url": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"]
        }
      },
      "video": {
        "play_addr": {
          "url_list": ["https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"]
        },
        "width": 720,
        "height": 1280
      },
      "statistics": {
        "digg_count": 10000,
        "comment_count": 100,
        "share_count": 45
      }
    }
  ];

  // Map and shuffle array
  const formattedList = rawAwemeList.map(formatAweme);
  const shuffledList = [...formattedList];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  // --- CURSOR TIMING CALCULATIONS ---
  // If request contains 0/null, start from current timestamp; otherwise step forward.
  const baseCursor = parseInt(reqMaxCursor, 10) > 0 ? parseInt(reqMaxCursor, 10) : now;
  const nextCursor = baseCursor + 10000;

  const feedPayload = {
    status_code: 0,
    min_cursor: baseCursor - 60000,
    max_cursor: nextCursor,
    has_more: 1,
    block_code: 0,
    status_msg: "",
    aweme_list: shuffledList,
    home_model: 0,
    refresh_clear: 0,
    post_back: "1",
    rid: `${now}_feed_0`,
    extra: {
      now: now,
      logid: `feed_${Math.floor(Math.random() * 1000000)}`
    }
  };

  return new Response(JSON.stringify(feedPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/feed/*",
    "/aweme/v1/feed",
    "/aweme/v2/feed/*",
    "/aweme/v2/feed"
  ]
};
