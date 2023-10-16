// Function to generate a random password
function generateRandomPassword(length, useUppercase, useNumbers, useSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=<>?/[]{}|';

  let validChars = lowercaseChars;
  if (useUppercase) validChars += uppercaseChars;
  if (useNumbers) validChars += numberChars;
  if (useSymbols) validChars += symbolChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars.charAt(randomIndex);
  }

  return password;
}

// Example usage
const passwordLength = 12; // Change this to your desired password length
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const randomPassword = generateRandomPassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);

console.log("Random Password: " + randomPassword);
