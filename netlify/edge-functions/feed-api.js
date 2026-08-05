// netlify/edge-functions/feed-handler.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-SS-REQ-TICK",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  // --- RAW AWEME VIDEO LIST ---
  const awemeList = [
    {
      "aweme_id": "1234567890",
    "desc": "Iphone Tole Tole Phonk 😂😂👑🫱🫱🫱 #wiedlak #bloxyzwiedlakkasefar #wiedlakfamily #meme",
    "author": {
      "uid": "12345",
      "nickname": "bloxyz wiedlak kasefar",
      "unique_id": "bloxyz.wiedlak.kasefar",
      "avatar_thumb": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "bloxyz wiedlak kasefar",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9llee7og65sc7h9l1hg.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 5744,
      "comment_count": 302,
      "share_count": 2076
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://tiktok.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "0987654321",
    "desc": "#Spiderman #polyesteredit",
    "author": {
      "uid": "12345",
      "nickname": "Gojo lover",
      "unique_id": "gojo.lover676",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "Gojo lover",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v15044gf0000d9knj6nog65nsjd1qr20.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 108816,
      "comment_count": 1155,
      "share_count": 11418
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000003",
    "desc": "#CapCut Ishowspeed yawn phonk sparta remix #ishowspeed #yawn #spartaremix #fyp",
    "author": {
      "uid": "12345",
      "nickname": "💲",
      "unique_id": "unknownscarface1",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "💲",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v15044gf0000d9lcabnog65sjtptvu00.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 1468,
      "comment_count": 161,
      "share_count": 469
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000004",
    "desc": "i just love the Kali memes, he rlly deserved it #techtok #tech #kali #leaks #iphoneair",
    "author": {
      "uid": "12345",
      "nickname": "𝘿𝙮𝙡𝙗𝙖𝙣𝙖𝙣𝙏𝙚𝙘𝙝",
      "unique_id": "dylbanantech",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v24044gl0000d9p4esfog65okk7d3fd0.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 152,
      "comment_count": 70,
      "share_count": 10
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000005",
    "desc": "video 5",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 5000,
      "comment_count": 50,
      "share_count": 20
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000006",
    "desc": "video 6",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 6000,
      "comment_count": 60,
      "share_count": 25
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000007",
    "desc": "video 7",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 7000,
      "comment_count": 70,
      "share_count": 30
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000008",
    "desc": "video 8",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 8000,
      "comment_count": 80,
      "share_count": 35
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000009",
    "desc": "video 9",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 9000,
      "comment_count": 90,
      "share_count": 40
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000010",
    "desc": "video 10",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 10000,
      "comment_count": 100,
      "share_count": 45
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000011",
    "desc": "video 11",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 11000,
      "comment_count": 110,
      "share_count": 50
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000012",
    "desc": "video 12",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 12000,
      "comment_count": 120,
      "share_count": 55
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000013",
    "desc": "video 13",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 13000,
      "comment_count": 130,
      "share_count": 60
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000014",
    "desc": "video 14",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 14000,
      "comment_count": 140,
      "share_count": 65
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000015",
    "desc": "video 15",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 15000,
      "comment_count": 150,
      "share_count": 70
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000016",
    "desc": "video 16",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 16000,
      "comment_count": 160,
      "share_count": 75
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000017",
    "desc": "video 17",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 17000,
      "comment_count": 170,
      "share_count": 80
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000018",
    "desc": "video 18",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 18000,
      "comment_count": 180,
      "share_count": 85
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000019",
    "desc": "video 19",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 19000,
      "comment_count": 190,
      "share_count": 90
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000020",
    "desc": "video 20",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 20000,
      "comment_count": 200,
      "share_count": 95
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000021",
    "desc": "video 21",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 21000,
      "comment_count": 210,
      "share_count": 100
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000022",
    "desc": "video 22",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 22000,
      "comment_count": 220,
      "share_count": 105
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000023",
    "desc": "video 23",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 23000,
      "comment_count": 230,
      "share_count": 110
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000024",
    "desc": "video 24",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 24000,
      "comment_count": 240,
      "share_count": 115
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000025",
    "desc": "video 25",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 25000,
      "comment_count": 250,
      "share_count": 120
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000026",
    "desc": "video 26",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 26000,
      "comment_count": 260,
      "share_count": 125
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000027",
    "desc": "video 27",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 27000,
      "comment_count": 270,
      "share_count": 130
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000028",
    "desc": "video 28",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 28000,
      "comment_count": 280,
      "share_count": 135
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000029",
    "desc": "video 29",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 29000,
      "comment_count": 290,
      "share_count": 140
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000030",
    "desc": "video 30",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 30000,
      "comment_count": 300,
      "share_count": 145
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000031",
    "desc": "video 31",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 31000,
      "comment_count": 310,
      "share_count": 150
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000032",
    "desc": "video 32",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 32000,
      "comment_count": 320,
      "share_count": 155
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000033",
    "desc": "video 33",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 33000,
      "comment_count": 330,
      "share_count": 160
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000034",
    "desc": "video 34",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 34000,
      "comment_count": 340,
      "share_count": 165
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000035",
    "desc": "video 35",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 35000,
      "comment_count": 350,
      "share_count": 170
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000036",
    "desc": "video 36",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 36000,
      "comment_count": 360,
      "share_count": 175
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000037",
    "desc": "video 37",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 37000,
      "comment_count": 370,
      "share_count": 180
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000038",
    "desc": "video 38",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 38000,
      "comment_count": 380,
      "share_count": 185
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000039",
    "desc": "video 39",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 39000,
      "comment_count": 390,
      "share_count": 190
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000040",
    "desc": "video 40",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 40000,
      "comment_count": 400,
      "share_count": 195
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000041",
    "desc": "video 41",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 41000,
      "comment_count": 410,
      "share_count": 200
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000042",
    "desc": "video 42",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 42000,
      "comment_count": 420,
      "share_count": 205
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000043",
    "desc": "video 43",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 43000,
      "comment_count": 430,
      "share_count": 210
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000044",
    "desc": "video 44",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 44000,
      "comment_count": 440,
      "share_count": 215
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000045",
    "desc": "video 45",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 45000,
      "comment_count": 450,
      "share_count": 220
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000046",
    "desc": "video 46",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 46000,
      "comment_count": 460,
      "share_count": 225
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000047",
    "desc": "video 47",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 47000,
      "comment_count": 470,
      "share_count": 230
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000048",
    "desc": "video 48",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 48000,
      "comment_count": 480,
      "share_count": 235
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000049",
    "desc": "video 49",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 49000,
      "comment_count": 490,
      "share_count": 240
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000050",
    "desc": "video 50",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 50000,
      "comment_count": 500,
      "share_count": 245
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000051",
    "desc": "video 51",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 51000,
      "comment_count": 510,
      "share_count": 250
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
    }
  },
  {
    "aweme_id": "1000000052",
    "desc": "video 52",
    "author": {
      "uid": "12345",
      "nickname": "sprinkles",
      "unique_id": "sprinkles.dude",
      "avatar_thumb": {
        "url_list": [
          "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=269c71b0&x-expires=1785531600&x-signature=4if9r4QSQfDJoMY4wEOVdmrZGh4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
        ]
      }
    },
    "music": {
      "id": "7000000000000000001",
      "title": "Original Sound",
      "author": "sprinkles",
      "play_url": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp3"
        ]
      }
    },
    "video": {
      "play_addr": {
        "url_list": [
          "https://github.com/ReallySprinkles/random-ahh-stuff-lol/raw/refs/heads/main/export_1785356065271.mp4"
        ]
      },
      "width": 720,
      "height": 1280
    },
    "statistics": {
      "digg_count": 52000,
      "comment_count": 520,
      "share_count": 255
    },
    "status": {
      "comment_status": 0,
      "allow_comment": true,
      "private_status": 0
    },
    "share_info": {
      "share_url": "https://example.com",
      "share_title": "hi",
      "share_desc": "Check out this video!"
      }
    }
  ];

  // --- RANDOMIZE ARRAY (Fisher-Yates Shuffle) ---
  const shuffledList = [...awemeList];
  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
  }

  const feedPayload = {
    status_code: 0,
    min_cursor: 0,
    max_cursor: 0,
    has_more: 1,
    aweme_list: shuffledList,
    extra: {
      now: Date.now(),
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
