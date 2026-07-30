export default async () => {
  const now = Math.floor(Date.now() / 1000);

  return new Response(
    JSON.stringify({
      status_code: 0,
      has_more: 0,
      cursor: 0,
      total: 2,

      // 1. Restore Floating Badge Counts (Fixes the missing 💬 comment count)
      notice_count: [
        { group: 1, count: 3 },  // Comments
        { group: 2, count: 1 },  // Mentions
        { group: 3, count: 61 }, // Shares
        { group: 4, count: 41 }  // Likes
      ],
      group_unread_count: {
        comment_count: 3,
        at_count: 1,
        share_count: 61,
        digg_count: 41
      },

      // 2. Full Activity List Payload
      notices: [
        {
          nid: "1000001",
          type: 1, // Comment activity
          create_time: now,
          has_read: false,
          comment_notice: {
            comment: {
              cid: "9000001",
              text: "Great video!",
              create_time: now
            },
            user: {
              uid: "1234567890",
              nickname: "le user",
              unique_id: "le.user",
              avatar_thumb: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              }
            }
          }
        },
        {
          nid: "1000002",
          type: 2, // Like activity
          create_time: now - 3600,
          has_read: false,
          digg_notice: {
            user: {
              uid: "0987654321",
              nickname: "test_account",
              unique_id: "test_account",
              avatar_thumb: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              }
            }
          }
        }
      ],
      notice_list: [
        {
          nid: "1000001",
          type: 1,
          create_time: now,
          has_read: false,
          comment_notice: {
            comment: {
              cid: "9000001",
              text: "Great video!",
              create_time: now
            },
            user: {
              uid: "1234567890",
              nickname: "le user",
              unique_id: "le.user",
              avatar_thumb: {
                url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
              }
            }
          }
        }
      ]
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/notice/*",
    "/aweme/v2/notice/*",
    "/aweme/v1/notification/*",
    "/aweme/v2/notification/*"
  ]
};
