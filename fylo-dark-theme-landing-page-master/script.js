const emailInput = document.querySelector(".email");
const submitBtn = document.querySelector(".submit-cta-btn");
const message = document.querySelector(".email-message");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
submitBtn.disabled = true;

emailInput.addEventListener("input", () => {
  let value = emailInput.value;
  let errorText = "Please enter a valid email address";

  if (emailRegex.test(value)) {
    message.classList.remove("active");
    message.textContent = "";
    submitBtn.disabled = false;
  } else {
    message.classList.add("active");
    message.textContent = value ? errorText : "";
    submitBtn.disabled = true;
  }
});

submitBtn.addEventListener("click", (e) => {
  if (submitBtn.disabled) {
    e.preventDefault();
  }
});
