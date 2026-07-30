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

  // User details payload including social link metadata
  const userPayload = {
    status_code: 0,
    user: {
      uid: "7117828228",
      short_id: "7117828228",
      nickname: "Name",
      unique_id: "Username",
      signature: "Description",
      // --- YouTube Connection Fields ---
      youtube_channel_id: "UCC45pszowTR4u8OrY0HBYPA", // Your YT Channel ID
      youtube_channel_title: "sprinkles",      // Displays as connected name
      // --- Instagram Field (if needed) ---
      ins_id: "iamreallysprinkles",
      // --- Profile Stats ---
      following_count: 2,
      follower_count: 2,
      total_favorited: 100000,
      aweme_count: 1,
      favoriting_count: 1
    
    
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
    "/aweme/v1/user",
    "/aweme/v1/user/detail/*",
    "/aweme/v1/social/bind/*"
  ]
};
