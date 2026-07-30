export default async (req) => {
  const now = Math.floor(Date.now() / 1000);

  // Sample Notice Item
  const commentNoticeItem = {
    nid: "1000001",
    type: 1, // 1 = Comment notice type
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
          url_list: [
            "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/example~c5_168x168.jpeg"
          ]
        }
      }
    }
  };

  return new Response(
    JSON.stringify({
      status_code: 0,
      has_more: 0,
      cursor: 0,
      total: 1,

      // Floating Badge Counters
      notice_count: [
        { group: 1, count: 1 },  // Comment count
        { group: 4, count: 61 }  // Like count
      ],
      group_unread_count: {
        comment_count: 1,
        digg_count: 61
      },

      // Primary feeds parsed by modern iOS TikTok clients
      notices: [commentNoticeItem],
      notice_list: [commentNoticeItem],
      items: [commentNoticeItem] // Required by newer iOS v2 feeds
    }),
    {
      status: 200,
      headers: { 
        "Content-Type": "application/json; charset=utf-8"
      }
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
