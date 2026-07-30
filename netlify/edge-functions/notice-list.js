export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      has_more: false,
      conversations: [
        {
          conversation_id: "chat_123456789",
          conversation_type: 1,
          unread_count: 1,
          updated_time: Math.floor(Date.now() / 1000),
          user_info: {
            uid: "1234567890",
            nickname: "le user",
            unique_id: "le.user",
            avatar_thumb: {
              url_list: [
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"
              ]
            }
          },
          last_message: {
            msg_id: "990001",
            msg_type: 7,
            content: JSON.stringify({ text: "Hey! Loved your recent video." }),
            create_time: Math.floor(Date.now() / 1000)
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
                url_list: [
                  "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"
                ]
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
    "/aweme/v1/im/conversation/list/",
    "/aweme/v1/im/message/list/",
    "/aweme/v2/im/conversation/list/",
    "/aweme/v1/notice/list/",
    "/aweme/v2/notice/list/",
    "/aweme/v1/message/list/"
  ]
};
