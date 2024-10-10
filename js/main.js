document.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector(".name"),
    nameBlock = document.querySelector(".name"),
    nameInput = document.querySelector(".nameInput"),
    nameBtn = document.querySelector(".nameBtn"),
    charge = document.querySelector(".charge"),
    chargeBlock = document.querySelector(".charge"),
    chargeTitle = document.querySelector(".chargeTitle"),
    chargeInput = document.querySelector(".chargeInput"),
    chargeBtn = document.querySelector(".chargeBtn"),
    resultBlock = document.querySelector(".result"),
    resultCharge = document.querySelector(".resultCharge"),
    resultBtn = document.querySelector(".resultBtn"),
    resultName = document.querySelector(".resultName");

  let nameValue = null,
    chargeValue = null;

  /* First step */
  nameInput.addEventListener("input", (e) => {
    e.target.value.trim().length > 0
      ? (nameBtn.disabled = false)
      : (nameBtn.disabled = true);
  });

  nameBtn.addEventListener("click", function () {
    const nameBtnConent = this.textContent;
    nameValue = nameInput.value;

    nameInput.value = "";
    name.style.cssText = "pointer-events: none;";
    this.textContent = "Processing...";
    chargeTitle.textContent = nameValue;

    setTimeout(() => {
      name.style.cssText = "pointer-events: all;";
      this.textContent = nameBtnConent;
      nameBlock.classList.toggle("isActive");
      chargeBlock.classList.toggle("isActive");
      nameBtn.disabled = true;
    }, 1500);
  });

  /* Second step */
  chargeInput.addEventListener("input", (e) => {
    e.target.value.trim().length > 0
      ? (chargeBtn.disabled = false)
      : (chargeBtn.disabled = true);
  });

  chargeBtn.addEventListener("click", function () {
    const chargeBtnConent = this.textContent;
    chargeValue = chargeInput.value;

    chargeInput.value = "";
    charge.style.cssText = "pointer-events: none;";
    this.textContent = "Processing...";
    resultCharge.textContent = chargeValue;
    resultName.textContent = nameValue;

    setTimeout(() => {
      charge.style.cssText = "pointer-events: all;";
      this.textContent = chargeBtnConent;
      chargeBlock.classList.toggle("isActive");
      resultBlock.classList.toggle("isActive");
      chargeBtn.disabled = true;
    }, 3000);
  });

  /* Third step */
  resultBtn.addEventListener("click", function () {
    resultBlock.classList.toggle("isActive");
    nameBlock.classList.toggle("isActive");
  });
});
