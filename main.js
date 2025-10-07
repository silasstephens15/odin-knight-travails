function knightMoves(start, goal) {
  let traveled = [];
  let queue = [];
  start = { pos: start, parent: null };
  queue.push(start);
  while (queue.length > 0) {
    const item = queue[0];
    traveled.push(item);
    queue.shift();
    if (JSON.stringify(item.pos) === JSON.stringify(goal)) {
      break;
    }
    let contains = false;
    for (let i = 0; i < traveled.length; i++) {
      if (JSON.stringify(traveled[i].pos) === JSON.stringify(item.pos)) {
        contains = true;
      }
    }
    if (traveled.includes(item.pos)) {
      continue;
    }
    const nextMoves = [];
    nextMoves.push({ pos: [item.pos[0] - 2, item.pos[1] + 1], parent: item });
    nextMoves.push({ pos: [item.pos[0] - 2, item.pos[1] - 1], parent: item });
    nextMoves.push({ pos: [item.pos[0] - 1, item.pos[1] + 2], parent: item });
    nextMoves.push({ pos: [item.pos[0] - 1, item.pos[1] - 2], parent: item });
    nextMoves.push({ pos: [item.pos[0] + 2, item.pos[1] + 1], parent: item });
    nextMoves.push({ pos: [item.pos[0] + 2, item.pos[1] - 1], parent: item });
    nextMoves.push({ pos: [item.pos[0] + 1, item.pos[1] + 2], parent: item });
    nextMoves.push({ pos: [item.pos[0] + 1, item.pos[1] - 2], parent: item });
    for (let i = 0; i < nextMoves.length; i++) {
      if (
        nextMoves[i].pos[0] < 8 &&
        nextMoves[i].pos[1] < 8 &&
        nextMoves[i].pos[0] >= 0 &&
        nextMoves[i].pos[1] >= 0
      ) {
        queue.push(nextMoves[i]);
      }
    }
  }
  let node = traveled[traveled.length - 1];
  let path = [];
  while (node !== null) {
    path.push(node);
    node = node.parent;
  }
  for (let i = path.length - 1; i >= 0; i--) {
    console.log(path[i].pos);
  }
}

knightMoves([0, 0], [7, 7]);
