if (document.getElementById("dynamic-greeting")) {
    const greetings = [
        "Welcome to Food Paradise!",
        "Savor Every Bite with Us!",
        "Discover the Taste of Joy!",
        "Indulge in Culinary Delights!",
        "Your Next Meal Awaits!"
    ];
    let currentIndex = 0;
    function updateGreeting() {
        const greetingElement = document.getElementById("dynamic-greeting");
        greetingElement.textContent = greetings[currentIndex];
        currentIndex = (currentIndex + 1) % greetings.length;
    }
    setInterval(updateGreeting, 3000);
    updateGreeting();
}





const priceElements = document.querySelectorAll(".price");

priceElements.forEach((element) => {
    element.addEventListener("mouseover", function () {
        element.style.fontSize = "24px";
    });

    element.addEventListener("mouseout", function () {
        element.style.fontSize = "16px";
    });
});








const chooseButtons = document.querySelectorAll(".btnclass");
const mealImages = document.querySelectorAll(".img-class");

chooseButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        if (mealImages[index]) {
            mealImages[index].src = "/Images/check-omg.png";
        }
    });
});
const heartButtons = document.querySelectorAll(".btn-heart");
heartButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const icon = button.querySelector("i");
        if (icon.classList.contains("fa-regular", "fa-heart")) {
            icon.classList.remove("fa-regular", "fa-heart");
            icon.classList.add("fa-solid", "fa-heart");
        } else {
            icon.classList.remove("fa-solid", "fa-heart");
            icon.classList.add("fa-regular", "fa-heart");
        }
    });
});









document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    if (name.trim() === '' || name.length < 3) {
        document.getElementById('name-error').textContent = 'Name is required and should be at least 3 characters.';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (message.trim() === '' || message.length < 10) {
        document.getElementById('message-error').textContent = 'Message should be at least 10 characters long.';
        isValid = false;
    }

    if (isValid) {

        document.getElementById('name').value = name.toUpperCase();
        document.getElementById('email').value = email.toUpperCase();
        document.getElementById('message').value = message.toUpperCase();

        document.getElementById('name').style.color = '#39DB4A';
        document.getElementById('email').style.color = '#39DB4A';
        document.getElementById('message').style.color = '#39DB4A';

        const successMessage = document.createElement('p');
        successMessage.textContent = 'Your form has been submitted successfully!';
        successMessage.style.color = '#39DB4A';
        successMessage.style.fontWeight = 'bold';
        document.querySelector('.contact-form').appendChild(successMessage);
    }
});

