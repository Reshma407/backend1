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

const getAllBorrowedBooks = async (req, res) => {
  try {
    const borrowedBooks = await Book.find({
      borrowedBy: {
        $exists: true,
        $ne: [],
      },
    }).populate("borrowedBy","name email");

    if (!borrowedBooks) {
      res.status(404).json({
        message: "Borrowed books not found",
      });
    }

    res.status(200).json({
      data: borrowedBooks,
      message: "Borrowed books fetched",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

// return // getbyuser





export { borrowBook, getAllBorrowedBooks };