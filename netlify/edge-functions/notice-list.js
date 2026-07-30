export default async (request) => {
  const responseData = {
    status_code: 0,
    has_more: 0,
    cursor: 0,
    total: 1,
    // Notification Tab Feed
    notices: [
      {
        nid: "1000001",
        type: 1,
        create_time: Math.floor(Date.now() / 1000),
        comment_notice: {
          comment: {
            cid: "9000000000000000001",
            text: "hi",
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
    ],
    notice_list: [
      {
        nid: "1000001",
        type: 1,
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
              url_list: [
                "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"
              ]
            }
          }
        }
      }
    ],
    // Direct Message (DM) Chat List
    conversations: [
      {
        conversation_id: "1:1:1234567890",
        conversation_type: 1,
        unread_count: 0,
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
          content: "{\"text\":\"Hey! Loved your recent video.\"}",
          create_time: Math.floor(Date.now() / 1000)
        }
      }
    ],
    conversation_list: [
      {
        conversation_id: "1:1:1234567890",
        conversation_type: 1,
        unread_count: 0,
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
          content: "{\"text\":\"Hey! Loved your recent video.\"}",
          create_time: Math.floor(Date.now() / 1000)
        }
      }
    ]
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

export const config = {
  path: [
    "/aweme/v1/notice/*",
    "/aweme/v2/notice/*",
    "/aweme/v1/im/*",
    "/aweme/v2/im/*",
    "/im/*"
  ]
};

