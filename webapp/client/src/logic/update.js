/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * String username:
 * String productID:
 */
 export default async function update(username, password) {    
    let now = new Date();
    var localNow = now.toLocaleString()

    const data = {
        username: username,
        value: {
            password: password,
            lastactive: localNow
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