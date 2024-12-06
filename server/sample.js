user.gernateJWTtoken = function() {
    return jsonwebToken.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
