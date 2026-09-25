/* =========================================
   NAVBAR MOBILE MENU
========================================= */

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}


/* =========================================
   FOOD FILTER
========================================= */

function filterFood(category, button) {
    const cards = document.querySelectorAll(".food-card");
    const buttons = document.querySelectorAll(".filter");

    // Remove active class from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    // Add active class to clicked button
    button.classList.add("active");

    cards.forEach(function(card) {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


/* =========================================
   FOOD BUTTONS
========================================= */

function LambRackBtn() {
    alert(
        "😋 Oii! Lamb Rack order request received!\n\n" +
        "Chef is preparing your dish 🔥"
    );
}

function SeafoodBtn() {
    alert(
        "🐟 Charred Sea Bass selected!\n\n" +
        "Fresh from the kitchen — enjoy your meal!"
    );
}

function VegStarterBtn() {
    alert(
        "🍄 Wild Mushroom Tart selected!\n\n" +
        "A delicious vegetarian starter is coming!"
    );
}

function DessertBtn() {
    alert(
        "🍰 Burnt Caramel Cheesecake selected!\n\n" +
        "Save some room for dessert 😋"
    );
}