const groceriest = document.querySelector(".groceries");
const items = document.querySelector(".items");
const secondInput = document.querySelector("#input");

function addItem() {
  let item = document.createElement("p");
  item.textContent = "-" + secondInput.value;

  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  const text = secondInput.value;
  if (text != "") {
    items.append(item);

    secondInput.value = "";
  }
}

secondInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});
