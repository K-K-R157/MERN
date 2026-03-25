const Product = require("../model/Product");
const User = require("../model/User");
const Order = require("../model/Order");

const getData = async (req, res, next) => {
    const userId= req.userId; // Assuming userId is set in auth middleware
    const user = await User.findById(userId).populate('orders');
    const products = await Product.find();
    res.status(200).json({products, orders: user.orders,cart: user.cart});
};

const addToCart = async (req, res, next) => {
    const userId = req.userId; // Assuming userId is set in auth middleware
    const productId = req.params.productId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
        if (user.cart.includes(productId)) {
          return res.status(400).json({ message: "Product already in cart" });
        }
        user.cart.push(productId);
        await user.save();
        res.status(200).json({ message: "Product added to cart", cart: user.cart });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

const removeFromCart = async (req, res, next) => {
    const userId = req.userId;
    const productId = req.params.productId;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (!user.cart.includes(productId)) {
        return res.status(400).json({ message: "Product not in cart" });
      }
      user.cart = user.cart.filter((id) => String(id) !== productId);
      await user.save();
      res.status(200).json({ message: "Product removed from cart", cart: user.cart });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

const createOrder = async (req, res, next) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).populate('cart');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.cart.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    const totalAmount = user.cart.reduce((total, product) => total + product.price, 0);
    const order = new Order({
      products: user.cart,
      totalAmount,
        customer: userId,
    });
    await order.save();
    user.orders.push(order._id);
    user.cart = [];
    await user.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  getData,
  addToCart,
  removeFromCart,
  createOrder
};
