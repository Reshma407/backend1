import Book from "../model/book.model.js";
import User from "../model/user.model.js";

const borrowBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;

    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
    book.borrowedBy.push(userId);
    await book.save();

    await User.findByIdAndUpdate(userId, {
      $push: {
        borrowedBooks: bookId,
      },
    });

    res.status(200).json({
      message: "Book borrowed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { borrowBook };