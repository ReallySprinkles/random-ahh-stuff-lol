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

  // --- HELPER TO FORMAT AVATARS FOR OLDER APP BUILDS ---
  const makeAvatarObj = (imgUrl) => ({
    uri: imgUrl,
    url_list: [imgUrl, imgUrl],
    width: 720,
    height: 720
  });

  const pfpFinn = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";
  const pfpDefault = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_3824.jpeg";
  const pfpChucky = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/IMG_4238.jpeg";

  // --- REGISTRY FOR ALL CREATORS (Including sprinkles.dude) ---
  const authorRegistry = {
    "7000000001": { nickname: "bloxyz wiedlak kasefar", unique_id: "bloxyz.wiedlak.kasefar", avatar: pfpDefault },
    "7000000002": { nickname: "Gojo lover", unique_id: "gojo.lover676", avatar: pfpDefault },
    "7000000003": { nickname: "💲", unique_id: "unknownscarface1", avatar: pfpDefault },
    "7000000004": { nickname: "𝘿𝙮𝙡𝙖𝙣𝙖𝙣𝙏𝙚𝙘𝙝", unique_id: "dylbanantech", avatar: pfpDefault },
    "7000000005": { nickname: "drtenmalonglost3rdson", unique_id: "drtenmalonglost3rdson", avatar: pfpChucky },
    "7000000006": { nickname: "sprinkles", unique_id: "sprinkles.dude", avatar: pfpDefault }
  };

  // --- EXTRACT TARGET USER ID ---
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

  // --- DYNAMIC AUTHOR LOOKUP (OTHER PROFILE) ---
  if (url.pathname.includes("/profile/other") || (targetUid && targetUid !== "7117828228")) {
    const authorData = authorRegistry[targetUid] || authorRegistry["7000000006"];
    const avatarData = makeAvatarObj(authorData.avatar);

    return new Response(
      JSON.stringify({
        status_code: 0,
        user: {
          uid: targetUid || "7000000006",
          short_id: targetUid || "7000000006",
          nickname: authorData.nickname,
          unique_id: authorData.unique_id,
          signature: "",
          secret: 0,
          is_private: false,

          avatar_thumb: avatarData,
          avatar_medium: avatarData,
          avatar_larger: avatarData,
          avatar_168x168: avatarData,
          avatar_300x300: avatarData,

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

  // --- SELF PROFILE (Your logged-in account, isolated from sprinkles.dude) ---
  const myAvatar = makeAvatarObj(pfpFinn);

  return new Response(
    JSON.stringify({
      status_code: 0,
      user: {
        uid: "7117828228",
        short_id: "7117828228",
        nickname: "sprinkles",
        unique_id: "sprinkles.dude",
        signature: "I'm really sprinkles 🤯\nEgyptian 🇪🇬\n(NOT A TECHTOKER!)\nDiscord username: reallysprinkles\nDISCORD SERVER HERE 👇\nhttps://discord.gg/Ta8ZtP4sCf",
        secret: 0,
        is_private: false,

        avatar_thumb: myAvatar,
        avatar_medium: myAvatar,
        avatar_larger: myAvatar,
        avatar_168x168: myAvatar,
        avatar_300x300: myAvatar,

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
    "/aweme/v1/user/detail/*"
  ]
};
