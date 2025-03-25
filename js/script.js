document.addEventListener('DOMContentLoaded', function () {
    // Get student ID and name
    const studentId = '200588539';
    const studentName = 'Ann Mary Swetilna';

    // Display student info
    document.getElementById('student-info').innerText = `Student ID: ${studentId} - ${studentName}`;

    // Get form elements
    const orderBtn = document.getElementById('order-btn');
    const pizzaDescriptionDiv = document.getElementById('pizza-description');

    // Pizza Class
    class Pizza {
        constructor(crust, sauce, cheese, toppings, meat) {
            this.crust = crust;
            this.sauce = sauce;
            this.cheese = cheese.length ? cheese.join(', ') : "no cheese";
            this.toppings = toppings.length ? toppings.join(', ') : "no extra toppings";
            this.meat = meat;
        }

        getDescription() {
            return `Your pizza has a ${this.crust} crust, ${this.sauce} sauce, ${this.cheese}, ${this.toppings}, and ${this.meat}.`;
        }
    }

    orderBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Get selected crust
        const crust = document.querySelector('input[name="crust"]:checked').value;

        // Get sauce
        const sauce = document.getElementById('sauce').value;

        // Get selected cheese options
        const cheese = Array.from(document.querySelectorAll('#cheese-div input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

        // Get selected toppings
        const toppings = Array.from(document.querySelectorAll('#toppings-div input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

        // Get selected meat
        const meat = document.querySelector('input[name="meat"]:checked').value;

        // Create new Pizza object
        const pizza = new Pizza(crust, sauce, cheese, toppings, meat);

        // Display pizza description
        pizzaDescriptionDiv.innerText = pizza.getDescription();
    });
});
