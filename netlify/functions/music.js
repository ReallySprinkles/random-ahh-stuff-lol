// netlify/functions/music.js

exports.handler = async (event, context) => {
  // Always include CORS headers to prevent client fetch blocks
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json; charset=utf-8"
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }

  const musicPayload = {
    "status_code": 0,
    "has_more": 0,
    "music_list": [
      {
        "music_info": {
          "id": "7000000000000000001",
          "title": "Original Sound - sprinkles",
          "author": "sprinkles",
          "duration": 15,
          "cover_thumb": {
            "url_list": [
              "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
            ]
          },
          "play_url": {
            "url_list": [
              "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/v1c044g50000d9f5pu7og65j257oon60.mp3"
            ]
          }
        }
      },
      {
        "music_info": {
          "id": "7000000000000000002",
          "title": "Export Sound",
          "author": "sprinkles",
          "duration": 12,
          "cover_thumb": {
            "url_list": [
              "https://p16-common-sign.tiktokcdn.com/tos-alisg-avt-0068/89e189f03cef0022a8460c231228f885~tplv-tiktokx-cropcenter:1080:1080.jpeg"
            ]
          },
          "play_url": {
            "url_list": [
              "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/main/export_1785356065271.mp3"
            ]
          }
        }
      }
    ]
  };

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(musicPayload)
  };
};
