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

  const validate = await fetch(`/icecream/get`, {
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
  const validateResponse = await validate.text();
  const data = JSON.parse(validateResponse)
  console.log("response", validateResponse, data);
  if (data["stock"])
  {
    alert(`Added ${data["name"]} to cart. Only ${data["stock"]} left in stock`);
  }
  else
  {
    alert(`${data["name"]} out of stock.`);
  }
  
}