import userModel from "../models/usermodel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ sucess: false, message: "User not found" });
    }
    res.json({
      sucess: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    return res.json({ sucess: false, messsage: error.messsage });
  }
};

export default getUserData;
