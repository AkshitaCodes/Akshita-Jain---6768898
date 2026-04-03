import { test, expect ,request as playwrightRequest} from "@playwright/test";

test("End-to-End API Flow: Login → View Product → Add to Wishlist", async ({ request }) => {
  // const apiContext = await playwrightRequest.newContext({
  //   ignoreHTTPSErrors: true   
  // });
  //  Step 1: Login
  let loginRes = await request.post(
    "https://www.shoppersstack.com/shopping/users/login",
    {
      data: {
        email: "akshitajain3114@gmail.com",
        password: "@11Renu20Akshit",
        role: "SHOPPER"
      },
      ignoreHTTPSErrors: true
    }
  );

  expect(loginRes.status()).toBe(200);

  let loginData = await loginRes.json();
  let token = loginData.data.jwtToken;
  let shopperId = loginData.data.userId; // dynamic userId

  console.log("Token:", token);
  console.log("Shopper ID:", shopperId);
  // Wishlist
  //  Step 2: View Products
  let productRes = await request.get(
    "https://www.shoppersstack.com/shopping/products/alpha",
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );

  expect(productRes.status()).toBe(200);

  let productData = await productRes.json();
  console.log("Products:", productData);

  //  Extract productId dynamically (instead of hardcoding 51)
  let productId = productData.data[0].productId;

  console.log("Selected Product ID:", productId);

  //  Step 3: Add Product to Wishlist
  let addRes = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`,
    {
      data: {
        productId: productId,
        quantity: 2
      },
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );

  // expect(addRes.status()).toBe(200);

  let addData = await addRes.json();
  console.log( "Add to Wishlist", addData);

  //  Step 4: View Wishlist
  let wishlistRes = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/wishlist`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );
  let wishlistData = await wishlistRes.json();
  console.log("View Wishlist", wishlistData )

  

  // Step 5:add product to cart
  let cartRes = await request.post(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/cart`,
    {
      data: {
        productId: productId,
        quantity: 2
      },
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );
   let cartData = await cartRes.json();
  console.log("Add to Cart", cartData );




  // Step 6: view cart
  let cartViewRes = await request.get(
    `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/cart`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      ignoreHTTPSErrors: true
    }
  );
  let cartViewData = await cartViewRes.json();
  console.log("View Cart", cartViewData );


  

  // Step 7: Add address
  let addressRes = await request.post(
  `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
  {
    data: {
      addressId: 1,
      city: "Thane",
      state: "String",
      pincode: "432101"
    },
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  }
);
let addressData = await addressRes.json();
  console.log("Add Address", addressData );


// step 8 : get address
let addressGetRes = await request.get(
  `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/address`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  }
);

let addressGetData = await addressGetRes.json();
 console.log("Get Address", addressGetData )
let addressId = addressGetData.data[0].addressId;
console.log(addressId);

// step 9: place order
let orderRes = await request.post(
  `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/order`,
  {
    data: {
      addressId: addressId,
      productId: productId,
      quantity: 2
    },
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  }
);
let orderData = await orderRes.json();
  console.log("Place Order", orderData)
// step 10: get order
let orderGetRes = await request.get(
  `https://www.shoppersstack.com/shopping/shoppers/${shopperId}/order`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  }
);
let orderGetData = await orderGetRes.json();
console.log("Get Orders",orderGetData);


// step:11 add review
let reviewRes = await request.post(
  `https://www.shoppersstack.com/shopping/reviews?productId=${productId}`,
  {
    data: {
      productId: productId,
      rating: 4,
      review: "good"
    },
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  }
);
let reviewData = await reviewRes.json();
console.log("Add Review", reviewData)  



// step:12 get review
let reviewGetRes = await request.get(
  `https://www.shoppersstack.com/shopping/reviews/${productId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ignoreHTTPSErrors: true
  }
);
let reviewGetData = await reviewGetRes.json();
console.log("Get Review", reviewGetData);
});
