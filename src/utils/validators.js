/**
 * Validates an email address format.
 * BUG: Does not handle null/undefined input - crashes on .split()
 */
function validateEmail(email) {
  const parts = email.split('@');
  const domain = parts[1].split('.');

  if (parts.length !== 2) {
    return false;
  }

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
