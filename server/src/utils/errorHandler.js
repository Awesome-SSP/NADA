// Handles and logs errors for debugging and stability.
// errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error details (optional)
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  };
  
  export default errorHandler;
  