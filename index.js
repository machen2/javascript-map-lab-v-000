const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

// my code part 1:
var sortedRobots = robots.map(function (robot) {
  const isDecepticon = knownDecepticons.includes(robot.name) // const because it goes out of scope with each iteration and wont change in each specific iteration
  return Object.assign({}, robot, { alliance: isDecepticon ? 'decepticon' : 'autobot' })
})

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

// my code part 2:
var coloredZebraStripes = zebraStripes.map(function (element, index) {
  return Object.assign({}, element, { color: index % 2 === 0 ? 'black' : 'white' })
})
