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

  const profileUrl = `https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(profileUrl)}`;
  const myPfpUrl = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg";

  // --- AUTHOR MAP MATCHING NEW UIDs IN FEED-HANDLER ---
  const authorRegistry = {
    "7000000001": { nickname: "bloxyz wiedlak kasefar", unique_id: "bloxyz.wiedlak.kasefar", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "7000000002": { nickname: "Gojo lover", unique_id: "gojo.lover676", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "7000000003": { nickname: "💲", unique_id: "unknownscarface1", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "7000000004": { nickname: "𝘿𝙮𝙡𝙖𝙣𝙖𝙣𝙏𝙚𝙘𝙝", unique_id: "dylbanantech", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg" },
    "7000000005": { nickname: "drtenmalonglost3rdson", unique_id: "drtenmalonglost3rdson", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_4238.jpeg" },
    "7000000006": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png" }
  };

  const sharedUserList = [
    { uid: "7000000001", nickname: "motorowiec", unique_id: "motorowiec10", follow_status: 0 },
    { uid: "7000000002", nickname: "Milo Korfalı,,", unique_id: "orphanminsu", follow_status: 0 },
    { uid: "7000000003", nickname: "Ate Nang", unique_id: "ate.nang", follow_status: 0 },
    { uid: "7000000004", nickname: "weluvelvinn", unique_id: "weluvelvinn", follow_status: 0 },
    { uid: "7000000005", nickname: "drtenmalonglost3rdson", unique_id: "drtenmalonglost3rdson", follow_status: 0 },
    { uid: "7000000006", nickname: "sprinkles", unique_id: "sprinkles.dude", follow_status: 0 }
  ];

  if (url.pathname.includes("/follower/list")) {
    return new Response(JSON.stringify({ status_code: 0, followers: sharedUserList, total: 4525, has_more: 0 }), { status: 200, headers });
  }

  if (url.pathname.includes("/following/list")) {
    return new Response(JSON.stringify({ status_code: 0, followings: sharedUserList, total: 1188, has_more: 0 }), { status: 200, headers });
  }

  if (url.pathname.includes("/qrcode")) {
    return new Response(JSON.stringify({ status_code: 0, status_msg: "", qrcode_url: { uri: "qrcode/7000000006.png", url_list: [qrImageUrl] } }), { status: 200, headers });
  }

  // --- EXTRACT USER ID ---
  let targetUid = url.searchParams.get("user_id") || url.searchParams.get("sec_user_id");

  const pathParts = url.pathname.split("/").filter(Boolean);
  const lastPart = pathParts[pathParts.length - 1];
  if (!targetUid && lastPart && !isNaN(lastPart)) {
    targetUid = lastPart;
  }

  if (!targetUid && req.method === "POST") {
    try {
      const clonedReq = req.clone();
      const bodyText = await clonedReq.text();
      const bodyParams = new URLSearchParams(bodyText);
      targetUid = bodyParams.get("user_id") || bodyParams.get("sec_user_id");
    } catch (e) {
      // Ignore parse failure
    }
  }

  // --- CHECK SELF VS OTHER ---
  const isSelfProfile = url.pathname.includes("/profile/self") || targetUid === "7000000006" || targetUid === "7117828228";
  const isOtherProfile = url.pathname.includes("/profile/other") || (targetUid && !isSelfProfile);

  if (isOtherProfile && !isSelfProfile) {
    const authorData = authorRegistry[targetUid] || {
      nickname: "drtenmalonglost3rdson",
      unique_id: "drtenmalonglost3rdson",
      avatar: "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_4238.jpeg"
    };

    return new Response(
      JSON.stringify({
        status_code: 0,
        user: {
          uid: targetUid || "7000000005",
          short_id: targetUid || "7000000005",
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

          follow_status: 0,
          follower_status: 0,
          is_following: false,
          is_followed: false,

          avatar_thumb: { uri: "avatar.jpeg", url_list: [authorData.avatar] },
          avatar_medium: { uri: "avatar.jpeg", url_list: [authorData.avatar] },
          avatar_larger: { uri: "avatar.jpeg", url_list: [authorData.avatar] },
          avatar_168x168: { uri: "avatar.jpeg", url_list: [authorData.avatar] },
          avatar_300x300: { uri: "avatar.jpeg", url_list: [authorData.avatar] },

          following_count: 0,
          follower_count: 0,
          total_favorited: 0,
          aweme_count: 0,
          favoriting_count: 0
        },
        extra: { now: Date.now(), logid: "other_user_profile" }
      }),
      { status: 200, headers }
    );
  }

  // --- MY MAIN PROFILE PAYLOAD ---
  return new Response(
    JSON.stringify({
      status_code: 0,
      user: {
        uid: "7000000006",
        short_id: "7000000006",
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

        follow_status: 2,
        follower_status: 2,
        is_following: true,
        is_followed: true,

        gender: 2,
        birthday: "2010-04-07",
        city: "Cairo",
        country: "EG",
        location: "Cairo, Egypt",
        ip_location: "Egypt",

        telephone: "+15550192831",
        phone: "+15550192831",
        mobile: "+15550192831",
        bind_phone: "+15550192831",
        is_phone_bound: true,
        has_password: true,
        has_email: true,

        avatar_thumb: { uri: "sprinkles_avatar.jpeg", url_list: [myPfpUrl] },
        avatar_medium: { uri: "sprinkles_avatar.jpeg", url_list: [myPfpUrl] },
        avatar_larger: { uri: "sprinkles_avatar.jpeg", url_list: [myPfpUrl] },
        avatar_168x168: { uri: "sprinkles_avatar.jpeg", url_list: [myPfpUrl] },
        avatar_300x300: { uri: "sprinkles_avatar.jpeg", url_list: [myPfpUrl] },

        qrcode_url: { uri: "qrcode/7000000006.png", url_list: [qrImageUrl] },
        youtube_channel_id: "UCC45pszowTR4u8OrY0HBYPA",
        youtube_channel_title: "sprinkles",
        ins_id: "iamreallysprinkles",

        following_count: 1188,
        follower_count: 4525,
        total_favorited: 358800,
        aweme_count: 398,
        favoriting_count: 1123
      },
      extra: { now: Date.now(), logid: "profile_social_edge" }
    }),
    { status: 200, headers }
  );
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
