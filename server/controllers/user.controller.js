const User = require('../models/auth.model');



exports.getUserProfile = async (req, res) => {
  try {

    const userId = req.session?.userData?.id;

    const user = await User.findById(userId).select("fullName email role");
    if (!user) return res.status(404).json({ error: "user not found" });

    res.json(user);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: "User not found" });
  }
};