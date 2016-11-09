let T = require("tcomb")
let {Id} = require("./Id")


let User = T.struct({
  id: Id,
  username: T.String,
  password: T.String,
  firstName: T.String,
  lastName: T.String,
  email: T.maybe(T.String),
  createdOn: T.Date,
  role: T.String,
  isActive: T.Bool
})

exports.User = User