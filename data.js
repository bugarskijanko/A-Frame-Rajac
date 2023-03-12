var APP_DATA = {
  "scenes": [
    {
      "id": "0-start",
      "name": "start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11934148243123488,
          "pitch": 0.15958074805011258,
          "rotation": 0,
          "target": "1-ulaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ulaz",
      "name": "ulaz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4591007833798493,
          "pitch": 0.20647989258342925,
          "rotation": 0,
          "target": "2-front-door"
        },
        {
          "yaw": -0.20940111198562406,
          "pitch": 0.03633143007446904,
          "rotation": 0,
          "target": "8-teracce"
        },
        {
          "yaw": 0.25614462477292577,
          "pitch": -0.005297894584288088,
          "rotation": 1.5707963267948966,
          "target": "3-living-room"
        },
        {
          "yaw": 2.8962160693146854,
          "pitch": 0.11856018866834006,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front-door",
      "name": "Front door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0667270161641689,
          "pitch": 0.1771603214919395,
          "rotation": 1.5707963267948966,
          "target": "1-ulaz"
        },
        {
          "yaw": 0.29533270338920126,
          "pitch": 0.14372963966482288,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 1.5500956203453518,
          "pitch": 0.16909450294541983,
          "rotation": 4.71238898038469,
          "target": "8-teracce"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18424111463096793,
          "pitch": -0.05120620334630033,
          "rotation": 4.71238898038469,
          "target": "4-bathroom"
        },
        {
          "yaw": -0.008262517537923841,
          "pitch": 0.07393546723886146,
          "rotation": 1.5707963267948966,
          "target": "5-room-1"
        },
        {
          "yaw": 0.7360703789244578,
          "pitch": 0.17565083963874173,
          "rotation": 0,
          "target": "7-second-floor"
        },
        {
          "yaw": 3.084305433672794,
          "pitch": 0.12394705555696461,
          "rotation": 0,
          "target": "8-teracce"
        },
        {
          "yaw": -0.09516046007521872,
          "pitch": -0.13435875898517224,
          "rotation": 0,
          "target": "2-front-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9074912872786101,
          "pitch": 0.17801515797822276,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-room-1",
      "name": "Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7154885342320902,
          "pitch": 0.2264067095399973,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-2",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5815153683218295,
          "pitch": 0.12951379882808034,
          "rotation": 0,
          "target": "7-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-second-floor",
      "name": "Second floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.108593582579143,
          "pitch": 0.2548007086923114,
          "rotation": 0,
          "target": "6-room-2"
        },
        {
          "yaw": -1.8174653627733193,
          "pitch": 1.1083102638429452,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-teracce",
      "name": "teracce",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.567399951336359,
          "pitch": 0.16332242307818312,
          "rotation": 0,
          "target": "1-ulaz"
        },
        {
          "yaw": 0.09959544594376624,
          "pitch": 0.07718147270760589,
          "rotation": 4.71238898038469,
          "target": "3-living-room"
        },
        {
          "yaw": -0.6840751001977683,
          "pitch": 0.12031168268187997,
          "rotation": 0,
          "target": "2-front-door"
        },
        {
          "yaw": -0.9970462564154836,
          "pitch": 0.16493519036316862,
          "rotation": 3.9269908169872414,
          "target": "9-fireplace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-fireplace",
      "name": "fireplace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4345182109533958,
          "pitch": -0.012085003445463371,
          "rotation": 0.7853981633974483,
          "target": "8-teracce"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "A-Frame Rajac",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
