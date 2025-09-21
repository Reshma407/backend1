import Book from "../model/book.model.js";

// Create a new book (Admin only)
export const createBook = async (req, res) => {
  try {
    const { title, image, author, description, copies } = req.body;

    const book = new Book({
      title,
      image,
      author,
      description,
      copies,
    });

    await book.save();

    res.status(201).json({
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("borrowedBy", "name email");
    res.status(200).json({ books });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get single book by ID
export const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId).populate("borrowedBy", "name email");

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update book (Admin only)
export const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updates = req.body;

    const book = await Book.findByIdAndUpdate(bookId, updates, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete book (Admin only)
export const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const book = await Book.findByIdAndDelete(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book deleted successfully",
      book,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};