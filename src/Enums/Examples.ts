enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const keyPressAction = (keyPress: Direction) => {
  if (keyPress === Direction.Up) {
    console.log("up key pressed");
  }
};
keyPressAction(Direction.Up);


// common useCase in express

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })