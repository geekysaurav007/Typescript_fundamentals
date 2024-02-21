//? Enums----------
//*Enum is a data type in programming languages that defines a set of constant values.
//*It is a distinct value type (i.e.) all values in an enum are unique.
enum currentBoyfriend {
  YogeshSaini,
  PawanYadav,
  SanyamSharma,
  Suyash,
}
console.log(currentBoyfriend.YogeshSaini); // ? Logs 0
console.log(currentBoyfriend.PawanYadav); //? Logs 1
console.log(currentBoyfriend.SanyamSharma); //? Logs 2

//? A real life example-
//? we are building backend services we have to generalize status code
enum StatusCodes  {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound); //? // logs 404
console.log(StatusCodes.Success); //? logs 200
