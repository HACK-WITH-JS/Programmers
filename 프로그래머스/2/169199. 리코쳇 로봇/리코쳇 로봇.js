function canMove(x, y, dx, dy, board) {
  const nx = x + dx;
  const ny = y + dy;

  return (
    0 <= nx &&
    nx < board.length &&
    0 <= ny &&
    ny < board[0].length &&
    board[nx][ny] !== 'D'
  );
}

function solution(board) {
  const N = board.length;
  const M = board[0].length;
  let start;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'R') start = [i, j];
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const visited = Array.from({ length: N }, () => new Array(M).fill(false));
  visited[start[0]][start[1]] = true;

  const queue = [[start[0], start[1], 0]];
  let answer = -1;

  while (queue.length) {
    const [x, y, move] = queue.shift();

    if (board[x][y] === 'G') {
      answer = move;
      break;
    }

    for (const [dx, dy] of directions) {
      let nx = x;
      let ny = y;

      while (canMove(nx, ny, dx, dy, board)) {
        nx += dx;
        ny += dy;
      }

      if (!visited[nx][ny]) {
        queue.push([nx, ny, move + 1]);
        visited[nx][ny] = true;
      }
    }
  }

  return answer;
}