export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      has_more: 0,
      cursor: 0,
      total: 1,

      // 1. Notice Group Feeds (Likes, Comments, Mentions)
      notices: [
        {
          nid: "1000001",
          type: 1, // Comment
          create_time: Math.floor(Date.now() / 1000),
          comment_notice: {
            comment: {
              cid: "9000000000000000001",
              text: "Great video!",
              create_time: Math.floor(Date.now() / 1000)
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
      ],
      notice_list: [
        {
          nid: "1000001",
          type: 1,
          create_time: Math.floor(Date.now() / 1000),
          comment_notice: {
            comment: {
              cid: "9000000000000000001",
              text: "ok",
              create_time: Math.floor(Date.now() / 1000)
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
      ],

      // 2. Unread Counters (Forces UI to render active badges)
      notice_count: [
        { group: 1, count: 1 },
        { group: 2, count: 0 },
        { group: 3, count: 61 },
        { group: 4, count: 41 }
      ],
      group_unread_count: {
        comment_count: 1,
        at_count: 0,
        share_count: 61,
        digg_count: 41
      },

      // 3. Conversation Sync (DM Tab)
      conversations: [
        {
          conversation_id: "1:1:1234567890_0987654321",
          conversation_type: 1,
          unread_count: 0,
          updated_time: Math.floor(Date.now() / 1000),
          user_info: {
            uid: "0987654321",
            nickname: "le user",
            unique_id: "le.user",
            avatar_thumb: {
              url_list: ["https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"]
            }
          },
          last_message: {
            msg_id: "990001",
            msg_type: 7,
            content: "{\"text\":\"Hey! Loved your recent video.\"}",
            create_time: Math.floor(Date.now() / 1000)
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
    "/aweme/v1/message/*",
    "/aweme/v2/message/*",
    "/aweme/v1/notification/*",
    "/aweme/v1/im/*",
    "/aweme/v2/im/*"
  ]
};
