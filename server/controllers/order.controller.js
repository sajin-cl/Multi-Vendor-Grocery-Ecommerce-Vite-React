const Order = require('../models/order.models');
const Cart = require('../models/cart.model');


exports.placeOrder = async (req, res) => {
  try {

    const userId = req.session?.userData?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized user' });


    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress || !shippingAddress.name || !shippingAddress.phone || !shippingAddress.address || !shippingAddress.city || !shippingAddress.state || !shippingAddress.pincode)
      return res.status(400).json({ error: 'Complete shipping address required' });



    const cartItems = await Cart.find({ user: userId }).populate('product');
    if (!cartItems.length) return res.status(400).json({ error: 'Cart is empty' });


    for (let item of cartItems) {
      if (item.product.stock < item.quantity) {
        return res.status(400).json({ error: `Not enough stock for ${item.product.name}` });
      }
    }

    const items = cartItems.map(item => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
      seller: item.product.sellerId
    }));


    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 40;
    const total = subtotal + shipping;


    const order = await Order.create({
      user: userId,
      items,
      shippingAddress,
      paymentMethod: paymentMethod || 'COD',
      subtotal,
      shipping,
      total,
      status: 'pending'
    });


    //Reducing the stock from the seller side (Product model)::
    for (let item of cartItems) {
      item.product.stock -= item.quantity;
      await item.product.save();
    }


    await Cart.deleteMany({ user: userId });

    res.status(200).json(order);

  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to place order' });
  }
};


exports.getOrders = async (req, res) => {
  try {

    const userId = req.session.userData.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized user' });

    const orders = await Order.find({ user: userId })
      .populate('items.product', 'name price image_url');

    res.status(200).json(orders);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};