let titleCounter = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  card.addEventListener("click", function () {
    // get the title and price value
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    // get the title container and set the title value
    const titleContainer = document.getElementById("title-container");
    console.log(titleContainer);
    const p = document.createElement("p");
    p.innerText = titleCounter + ". " + title;
    titleContainer.appendChild(p);
    titleCounter++;

    // count the total price and set the price into total price container
    totalPrice += price;
    const priceElement = document.getElementById("totalPrice");
    priceElement.innerText = totalPrice.toFixed(2);
  });
}

// apply button funtionality
const button = document.getElementById("apply-btn");
button.addEventListener("click", function () {
  const couponInput = document.getElementById("input-field");
  //   get the input value and resolve case sensative
  if (totalPrice >= 200) {
    const couponCode = couponInput.value.split(" ").join("").toUpperCase();
    if (couponCode === "SELL200") {
      //   count the discount and set discount amount
      const discountField = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2;
      discountField.innerText = discountAmount.toFixed(2);

      // clear the input field
      couponInput.value = "";

      // set the total value after discount
      const total = document.getElementById("total");
      total.innerText = totalPrice - discountAmount;
    } else {
      alert("Invalid coupon code. Please enter 'SELL200' for the discount.");
      // clear the input field
      couponInput.value = "";
    }
  } else {
    alert("Invest $200 at least to get discount!");
    // clear the input field
    couponInput.value = "";
  }
});
