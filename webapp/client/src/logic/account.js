/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * String username:
 * String productID:
 */
 export default async function login(username, password) {
    console.log(`Calling login service for ${username}, ${password}`);
  
    const validate = await fetch('/account/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
      });
      const validateResponse = await validate.json();
      console.log(validateResponse);
      const valid = validateResponse["password"] != undefined;

      return valid;
  }