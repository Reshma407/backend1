import User from "../model/user.model.js";

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const user = await User.updateOne({ _id: id }, updates);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export { deleteUser, updateUser };