// const { loadConfigFromFile } = require("vite");

const formData = { email: "", message: "" };
const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
getValue();


form.addEventListener("submit", handleFormSubm);
function handleFormSubm(event) {
    event.preventDefault();
    const { email, message } = form.elements;
    if (email.value.trim() === "" || message.value.trim() === "") {
        alert("Fill please all fields");
        return;

}


    console.log(formData);
    
    localStorage.removeItem(storageKey);
    event.target.reset();

      formData.email = "";
      formData.message = "";
}



form.addEventListener("input", handleFormInp);
function handleFormInp(event) {
   const form = event.currentTarget;
    const {email, message }  = form.elements;
    
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
}




function getValue() {
    const savedData = localStorage.getItem(storageKey);
    if (savedData === null) {

        return;
    }

    try {
        const savedVal = JSON.parse(savedData);
        form.elements.email.value = savedVal.email;
        form.elements.message.value = savedVal.message;
        formData.email = savedVal.email;
        formData.message = savedVal.message;
    } catch (error) {
       alert("Something went wrong with saved data. Please fill the form again.");
    }
 }




