// netlify/edge-functions/profile-master.js

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

  const profileUrl = `https://musically.com/h5/share/usr/7117828228`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(profileUrl)}`;

  // --- RAW GITHUB PFP LINK ---
  const myPfpUrl = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";

  // --- AUTHOR MAP MATCHING RAW AWEME LIST UIDs ---
  const authorRegistry = {
    "10001": { nickname: "bloxyz wiedlak kasefar", unique_id: "bloxyz.wiedlak.kasefar", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10002": { nickname: "Gojo lover", unique_id: "gojo.lover676", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10003": { nickname: "💲", unique_id: "unknownscarface1", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10004": { nickname: "𝘿𝙮𝙡𝙗𝙖𝙣𝙖𝙣𝙏𝙚𝙘𝙝", unique_id: "dylbanantech", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10005": { nickname: "drtenmalonglost3rdson", unique_id: "drtenmalonglost3rdson", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_4238.jpeg" },
    "10006": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10007": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10008": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10009": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "10010": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" }
  };

  // --- SHARED USER LIST FOR FOLLOWERS/FOLLOWING ---
  const sharedUserList = [
    { uid: "10001", nickname: "motorowiec", unique_id: "motorowiec10", follow_status: 0 },
    { uid: "10002", nickname: "Milo Korfalı,,", unique_id: "orphanminsu", follow_status: 0 },
    { uid: "10003", nickname: "Ate Nang", unique_id: "ate.nang", follow_status: 0 },
    { uid: "10004", nickname: "weluvelvinn", unique_id: "weluvelvinn", follow_status: 0 },
    { uid: "10005", nickname: "GABG2", unique_id: "gabrielini56", follow_status: 0 }
  ];

  // --- 1. DEDICATED FOLLOWER LIST ENDPOINT ---
  if (url.pathname.includes("/follower/list")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        followers: sharedUserList,
        total: 4525,
        has_more: 0
      }),
      { status: 200, headers }
    );
  }

  // --- 2. DEDICATED FOLLOWING LIST ENDPOINT ---
  if (url.pathname.includes("/following/list")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        followings: sharedUserList,
        total: 1188,
        has_more: 0
      }),
      { status: 200, headers }
    );
  }

  // --- 3. DEDICATED QR CODE ENDPOINTS ---
  if (url.pathname.includes("/qrcode")) {
    return new Response(
      JSON.stringify({
        status_code: 0,
        status_msg: "",
        qrcode_url: {
          uri: "qrcode/7117828228.png",
          url_list: [qrImageUrl]
        }
      }),
      { status: 200, headers }
    );
  }

  // --- 4. DYNAMIC PROFILE ROUTING ---
  const targetUid = url.searchParams.get("user_id") || url.searchParams.get("sec_user_id");
  const isSelfProfile = url.pathname.includes("/profile/self") || targetUid === "7117828228";
  const isOtherProfile = url.pathname.includes("/profile/other") || (targetUid && targetUid !== "7117828228");

  if (isOtherProfile && !isSelfProfile) {
    const authorData = authorRegistry[targetUid] || {
      nickname: targetUid ? `User ${targetUid}` : "Unknown Creator",
      unique_id: targetUid ? `user_${targetUid}` : "unknown_creator",
      avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg"
    };

    const otherUserPayload = {
      status_code: 0,
      user: {
        uid: targetUid || "10005",
        short_id: targetUid || "10005",
        nickname: authorData.nickname,
        unique_id: authorData.unique_id,
        signature: "",
        secret: 0,
        is_private: false,
        allow_others_to_find_me: 1,

        comment_setting: 0,
        duet_setting: 0,
        react_setting: 0,
        stitch_setting: 0,
        download_setting: 0,
        download_prompt_until: 0,
        
        follow_status: 0,
        follower_status: 0,
        is_following: false,
        is_followed: false,
        is_star: false,
        is_discipline_member: false,

        avatar_thumb: {
          uri: "musically-maliva-obj/author_avatar.jpeg",
          url_list: [authorData.avatar]
        },
        avatar_medium: {
          uri: "musically-maliva-obj/author_avatar.jpeg",
          url_list: [authorData.avatar]
        },
        avatar_larger: {
          uri: "musically-maliva-obj/author_avatar.jpeg",
          url_list: [authorData.avatar]
        },

        following_count: 0,
        follower_count: 0,
        total_favorited: 0,
        aweme_count: 0,
        favoriting_count: 0
      },
      extra: {
        now: Date.now(),
        logid: "other_user_profile"
      }
    };

    return new Response(JSON.stringify(otherUserPayload), {
      status: 200,
      headers
    });
  }

  // --- 5. MY MAIN PROFILE PAYLOAD ---
  const userPayload = {
    status_code: 0,
    user: {
      uid: "7117828228",
      short_id: "7117828228",
      nickname: "sprinkles",
      unique_id: "sprinkles.dude",
      signature: "I'm really sprinkles 🤯\nEgyptian 🇪🇬\n(NOT A TECHTOKER!)\nDiscord username: reallysprinkles\nDISCORD SERVER HERE 👇\nhttps://discord.gg/Ta8ZtP4sCf",
      secret: 0,
      is_private: false,
      allow_others_to_find_me: 1,

      comment_setting: 0,
      duet_setting: 0,
      react_setting: 0,
      stitch_setting: 0,
      download_setting: 0,
      download_prompt_until: 0,
      
      follow_status: 2,
      follower_status: 2,
      is_following: true,
      is_followed: true,
      is_star: false,
      is_discipline_member: false,

      gender: 2,
      birthday: "2010-04-07",
      birthday_hide_level: 0,
      show_gender_strategy: 0,
      city: "Cairo",
      country: "EG",
      district: "",
      location: "Cairo, Egypt",
      ip_location: "Egypt",
      hide_location: 0,

      telephone: "+15550192831",
      phone: "+15550192831",
      mobile: "+15550192831",
      bind_phone: "+15550192831",
      is_phone_bound: true,
      has_password: true,
      has_email: true,

      avatar_thumb: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_medium: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_larger: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_168x168: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },
      avatar_300x300: {
        uri: "musically-maliva-obj/sprinkles_avatar.jpeg",
        url_list: [myPfpUrl]
      },

      qrcode_url: {
        uri: "qrcode/7117828228.png",
        url_list: [qrImageUrl]
      },

      youtube_channel_id: "UCC45pszowTR4u8OrY0HBYPA",
      youtube_channel_title: "sprinkles",
      ins_id: "iamreallysprinkles",

      following_count: 1188,
      follower_count: 4525,
      total_favorited: 358800,
      aweme_count: 398,
      favoriting_count: 1123
    },
    extra: {
      now: Date.now(),
      logid: "profile_social_edge"
    }
  };

  return new Response(JSON.stringify(userPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/user/profile/self/*",
    "/aweme/v1/user/profile/other/*",
    "/aweme/v1/user/profile/other",
    "/aweme/v1/user",
    "/aweme/v1/user/*",
    "/aweme/v1/user/detail/*",
    "/aweme/v1/user/follower/list/*",
    "/aweme/v1/user/follower/list",
    "/aweme/v1/user/following/list/*",
    "/aweme/v1/user/following/list",
    "/aweme/v1/social/bind/*",
    "/aweme/v1/qrcode/*",
    "/aweme/v1/user/qrcode/*"
  ]
};
