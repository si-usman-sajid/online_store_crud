const orderModel = require("../models/order");

const createOrder = async (req, res) => {
  try {
    const { body } = req;
    const newOrder = await orderModel.create(body);
    res.send(newOrder);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const getAllOrder = async (req, res) => {
  try {
    const AllOrders = await orderModel.find({});
    res.send(AllOrders);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const getOneOrder = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const OneOrder = await orderModel.findById(_id);
    if (!OneOrder) {
      return res.status(404).send("Order not found");
    }
    res.send(OneOrder);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const updateOrder = async (req, res) => {
  try {
    const { customer_id, accessory_id, employee_id, order_status } = req.body;
    const { id: _id } = req.params;
    const updateOneOrder = await orderModel.findByIdAndUpdate(
      _id,
      { customer_id, accessory_id, employee_id, order_status },
      { new: true }
    );
    if (!updateOneOrder) {
      return res.status(404).send("Order not found");
    }
    res.send(updateOneOrder);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

const deleteOneOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrder = await orderModel.deleteOne({ _id: id });
    if (deleteOrder.deletedCount === 0) {
      return res.status(404).send("Order not found");
    }
    res.send(deleteOrder);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  createOrder,
  getOneOrder,
  getAllOrder,
  updateOrder,
  deleteOneOrder,
};
