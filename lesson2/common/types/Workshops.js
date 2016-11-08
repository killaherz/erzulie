let T = require("tcomb")
let {Id} = require("./Id")


let workShop = T.struct({
  id: Id,
  address: T.String,
  location: T.String,
  createdOn: T.Date,
  isActive: T.Bool,
  owner: T.String,
  ownerId: T.String,
  masters: T.Array,
  masterSkills: T.Array,
  shop: T.Bool
})

exports.workShop = workShop