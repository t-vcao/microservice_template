/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * String username:
 * String productID:
 */
 export default async function update(username, password) {    
    let now = new Date();

    const data = {
        username: username,
        value: {
            password: password,
            lastactive: now
        }
    }

    const validate = await fetch('/account/update', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data
        }),
    });

    const validateResponse = await validate;
  }