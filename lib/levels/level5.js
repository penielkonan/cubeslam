// example level json:
// (it's not an actual JSON so that comments can be preserved)
module.exports =   {
    "name": "Level 3",
    "description": "",
    "speed": 10,
    "speedup": 0.1,
    "maxspeed": 40,
    "maxHits": 10,
    "theme": {
     "shieldColor": 16777215,
      "puckColor": 15715846,
      "arenaColor": 1250068,
      "terrainColor1": 3618615,
      "terrainColor2": 2829357,
      "terrainColor3": 2368808,
      "treeBranchColor": 3422268,
   iconColor:0x311fd2
    },
    // the starting speed of the puck(s)
      speed: 10,

      // the step to upgrade the speed on hit
      speedup: 0.1,

      // the maximum speed a puck can reach
      maxspeed: 40,

      // if this is set, the level ends when a player reached maxHits
      maxHits: 10,

      // actions to be called within
      // certain frames during a level
      actions: [
       
      ]
  }


