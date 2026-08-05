export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      comment: {
        cid: "9000000000000000001",
        text: "no",
        create_time: 1,
        aweme_id: "7000000000000000001",
        user: {
          uid: "7117828228",
          unique_id: "sprinkles.dude",
          nickname: "sprinkles",
          avatar_thumb: {
            url_list: [
              "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png"
            ]
          }
        }
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const config = {
  path: "/aweme/v1/comment/publish/"
};
