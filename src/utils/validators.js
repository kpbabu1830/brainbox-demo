/**
 * Validates an email address format.
 */
function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const parts = email.split('@');

  if (parts.length !== 2) {
    return false;
  }

  if (!parts[0] || !parts[1]) {
    return false;
  }

  const domain = parts[1].split('.');

  if (domain.length < 2) {
    return false;
  }

  return domain.every(part => part.length > 0);
}

function validatePassword(password) {
  if (!password || password.length < 8) {
    return false;
  }
  return true;
}

module.exports = { validateEmail, validatePassword };
