let T = require("tcomb")
let {Id} = require("./Id")


let Shop = T.struct({
  id: Id,
  workShopId: T.String,
  createdOn: T.Date,
  isActive: T.Bool,
  owner: T.String,
  ownerId: T.String,
  workShop: T.Bool,
  items: T.Array
})

exports.Shop = Shop