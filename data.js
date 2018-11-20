  // Data
  var data = [];

  for (var i = 0; i < 75; ++i) {
    data.push({
      typo: ['bur', 'pc', 'lt'][Math.floor(3 * Math.random())],
      level: ['RdC', 'SS2', 'SS1', 'R+1', 'R+2', 'R+3'][Math.floor(5 * Math.random())],
      surface: Math.round(10 * Math.random(), 2)
    });
  }

  data.sort((r1, r2) => r1.typo.localeCompare(r2.typo));
  data.sort((r1, r2) => r1.level.localeCompare(r2.level));

  data = data.reduce((levels, room) => {
    var i = -1;
    if (!~(i = levels.findIndex(level => level.name === room.level))) {
      levels.push({
        name: room.level,
        rooms: [{
          surface: room.surface,
          typo: room.typo
        }],
        surface: 0
      });
      levels[levels.length - 1].surface += room.surface;
    } else {
      levels[i].rooms.push({
        surface: room.surface,
        typo: room.typo
      });
      levels[i].surface += room.surface;
    }
    return levels;
  }, []);

  var surfaceMax = d3.max(data.map(d => d.surface));

  var levelCount = data.length;

  var projectName = 'Covéa 24 Prosny';