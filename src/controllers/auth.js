const { validateEmail, validatePassword } = require('../utils/validators');

class LoginController {
  static handleLogin(req, res) {
    const { email, password } = req.body;

    try {
      const isValidEmail = validateEmail(email);

      if (!isValidEmail) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      const isValidPassword = validatePassword(password);
      if (!isValidPassword) {
        return res.status(400).json({ error: 'Password must be at least 8 characters' });
      }

      return res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = LoginController;
