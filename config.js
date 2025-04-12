const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1348877111250784289',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://www.twitch.tv/glaceytt' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "e6f84fbec2b44a77bf35a20c5ffa54b8",
  spotifyClientSecret: "498f461b962443cfaf9539c610e2ea82",
}
