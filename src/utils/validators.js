function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const parts = email.split('@');

  if (parts.length !== 2) {
    return false;
  }

  if (!parts[1] || parts[1].length === 0) {
    return false;
  }

  const domain = parts[1].split('.');

  if (domain.length < 2) {
    return false;
  }

  return true;
}

function validatePassword(password) {
  if (!password || password.length < 8) {
    return false;
  }
  return true;
}

module.exports = { validateEmail, validatePassword };
