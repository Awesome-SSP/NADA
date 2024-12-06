const jsonwebToken = require("jsonwebtoken");

const generateJWTtoken = (user, statusCode, res) => {
    const token = user.generateJWTtoken(); // Ensure user object has this method
    const options = {
        expires: new Date(
            Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        message: "Successfully Logged In",
        user,
        token,
    });
};

module.exports = generateJWTtoken;
