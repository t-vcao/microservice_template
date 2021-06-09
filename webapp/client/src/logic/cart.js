/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * String username:
 * String productID:
 */
 export default async function addCart(username, productID) {
  const info = `${username} add ${productID}`
  console.log(`Calling add service `, info);

  const validate = await fetch(`/icecream/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        productID
      }),
    });
  const validateResponse = await validate.json();
  console.log("response", validateResponse["valid"]);
  alert(`Added ${validateResponse["name"]}`);


  // const add = await fetch(`/account/add`, {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     username,
  //     productID
  //   }),
  // });
  // const addResponse = await add.json();
}