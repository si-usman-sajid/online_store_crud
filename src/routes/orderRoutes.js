const express = require("express");
const {
  createOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
  deleteOneOrder,
} = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrder);
orderRouter.get("/:id", getOneOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOneOrder);

module.exports = orderRouter;
