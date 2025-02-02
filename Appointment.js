// all elements

const name = document.querySelector("#name");
const appointmentDateTime = document.querySelector("#appointmentDateTime");
const phoneNumber = document.querySelector("#phoneNumber");
const country = document.querySelector("#country");
const form = document.querySelector("#appointmentForm");

const showError = (input, message) => {
    let parentElement = input.parentElement; 
    parentElement.classList = "form-control error";
    const small = parentElement.querySelector("small");
    const errorIcon = parentElement.querySelectorAll("i")[1];
    const successIcon = parentElement.querySelectorAll("i")[0];
    errorIcon.style.visibility = "visible";postMessage,
    successIcon.style.visibility = "hidden";
    small.innerText = message;
}

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = "form-control success";
    const errorIcon = parentElement.querySelectorAll("i")[1];
    const successIcon = parentElement.querySelectorAll("i")[0];
    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";
}

const checkRequired = (elements) => {
    elements.forEach(element => {
        if (element.value.trim() === "") {
            showError(element, "This field is required");
        } else {
            showSuccess(element);
        }
    });
}

const checkName = (input) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (input.value.trim() === "") {
        showError(input, "Name is required");
    } else if (!nameRegex.test(input.value.trim())) {
        showError(input, "Name must contain only alphabetic characters");
    } else {
        showSuccess(input);
    }
}

const checkDateTime = (input) => {
    const now = new Date();
    const inputDate = new Date(input.value);
    if (input.value === "") {
        showError(input, "Date and Time is required");
    } else if (inputDate < now) {
        showError(input, "Date and Time cannot be in the past");
    } else {
        showSuccess(input);
    }
}

const checkNumber = (input) => {
    const numberValue = parseInt(input.value, 10);
    if (input.value === "") {
        showError(input, "Phone Number is required");
    } else if (isNaN(numberValue)) {
        showError(input, "Must be a valid number");
    } else {
        showSuccess(input);
    }
}

const checkCountry = (input) => {
    if (input.value === "") {
        showError(input, "Country is required");
    } else {
        showSuccess(input);
    }
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkRequired([name, appointmentDateTime, phoneNumber, country]);
    checkName(name);
    checkDateTime(appointmentDateTime);
    checkNumber(phoneNumber);
    checkCountry(country);
    
});

