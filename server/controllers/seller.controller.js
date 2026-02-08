const Order = require('../models/order.models');
const Product = require('../models/product.model');
const User = require('../models/auth.model');

exports.getSellerOrders = async (req, res) => {
  try {

    const sellerId = req.session?.userData?.id;
    if (!sellerId) return res.status(401).json({ error: "Unauthorized seller" });


    const orders = await Order.find().populate("items.product");

    const sellerOrders = orders
      .map(order => ({
        ...order.toObject(),
        items: order.items.filter(i => i.seller.toString() === sellerId.toString())
      }))
      .filter(order => order.items.length > 0);

    res.json(sellerOrders);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItemStatus = async (req, res) => {
  try {

    const { orderId, itemId } = req.params;
    const { status } = req.body;

    const sellerId = req.session?.userData?.id;
    if (!sellerId) return res.status(401).json({ error: "Unauthorized" });

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: "Order not found" });

    const item = order.items.id(itemId);
    if (!item) return res.status(404).json({ error: "Item not found" });

    if (item.seller.toString() !== sellerId) return res.status(403).json({ error: "Not your item" });

    item.status = status;
    await order.save();

    res.status(200).json({ message: "Item status updated", item });

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update item status" });
  }
};


exports.getSellerEarnings = async (req, res) => {
  try {
    const sellerId = req.session?.userData?.id;
    if (!sellerId) return res.status(401).json({ error: "Unauthorized seller" });

    const orders = await Order.find({ "items.seller": sellerId });

    let total = 0;
    let pending = 0;
    let completed = 0;

    for (const order of orders) {
      for (const item of order.items) {
        if (item.seller.toString() !== sellerId) {
          continue;
        }

        const amount = item.price * item.quantity;

        if (item.status === 'delivered') {
          completed += amount;
          total += amount;
        }
        else if (item.status === 'shipped') {
          pending += amount;
          total += amount;
        }
      }
    }

    return res.json({
      totalEarnings: total,
      pendingPayout: pending,
      completedPayout: completed
    });

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch earnings" });
  }
};

exports.getSellerDashboard = async (req, res) => {
  try {
    const sellerId = req.session?.userData?.id;
    if (!sellerId) return res.status(401).json({ error: 'Unauthorized seller' });

    const totalProducts = await Product.countDocuments({ sellerId });

    const orders = await Order.find({ 'items.seller': sellerId });
    if (!orders) return res.status(404).json({ error: 'orders not found' });

    let totalOrders = 0;
    let pendingOrders = 0;
    let totalEarnings = 0;

    for (const order of orders) {

      totalOrders++;
      let hasPending = false;

      for (const item of order.items) {
        if (item.seller.toString() !== sellerId) continue;

        if (item.status !== 'cancelled') totalEarnings += item.quantity * item.price;

        if (item.status === 'pending') hasPending = true;
      }
      if (hasPending) pendingOrders++;

    };
    res.status(200).json({
      totalProducts,
      totalOrders,
      pendingOrders,
      totalEarnings
    })

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch dashboard data" });
  }
};


exports.getSellerProfile = async (req, res) => {
  try {
    const sellerId = req.session?.userData?.id;
    const seller = await User.findById(sellerId).select("fullName email shopName shopAddress role");

    if (!seller) return res.status(404).json({ error: "seller not found" });

    res.json(seller);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


exports.updateSellerProfile = async (req, res) => {
  try {

    const sellerId = req.session?.userData?.id;
    if (!sellerId) return res.status(401).json({ error: "Unauthorized" });

    const { fullName, email, shopName, shopAddress } = req.body;

    if (!fullName || !email) return res.status(400).json({ error: "Full name and email are required" });

    if (!shopName || !shopAddress) return res.status(400).json({ error: "Shop name and address are required" });


    const updatedSeller = await User.findByIdAndUpdate(sellerId, { fullName, email, shopName, shopAddress }, { new: true });
    if (!updatedSeller) return res.status(404).json({ error: "Seller not found" });

    res.status(200).json({ message: "Profile updated successfully", updatedSeller });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}