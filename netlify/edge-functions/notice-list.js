export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      has_more: false,
      notice_list: [
        {
          nid: "1000001",
          type: 1, // Comment notification
          create_time: Math.floor(Date.now() / 1000),
          comment_notice: {
            comment: {
              cid: "9000000000000000001",
              text: "test comment",
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
        },
        {
          nid: "1000002",
          type: 2, // Like notification
          create_time: Math.floor(Date.now() / 1000) - 3600,
          digg_notice: {
            user: {
              uid: "0987654321",
              nickname: "test_account",
              unique_id: "test_account",
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
    "/aweme/v1/notice/list/",
    "/aweme/v2/notice/list/",
    "/aweme/v1/message/list/"
  ]
};
