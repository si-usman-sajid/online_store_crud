const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customer_id: { type: String, required: true },
    accessory_id: { type: String, required: true },
    employee_id: { type: String, required: true },
    order_status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
