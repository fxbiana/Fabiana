document.addEventListener("DOMContentLoaded", function () {
    // Array of items to find
    const itemsToFind = ["Wizard Hat", "Clock", "Dog Bone", "Seashell", "Gumball Machine", "Spider", "Mob", "Owl", "Monkey", "Pig", "Star Wand", "Duck", "Green Bottle", "Claws"];

    // Counter for found items
    let foundCount = 0;

    // Function to handle item found
    function foundItem(itemName) {
        const item = document.getElementById(itemName);
        if (item) {
            item.style.textDecoration = "line-through";
            foundCount++;
            document.getElementById("foundCount").innerText = foundCount;

            if (foundCount === itemsToFind.length) {
                const playAgain = confirm("Congratulations! You found all items. Do you want to play again?");
                if (playAgain) {
                    replay();
                }
            }
        }
    }

    // Attach click event listeners to each item
    itemsToFind.forEach(function (itemName) {
        const itemElement = document.querySelector(`[alt="${itemName}"]`);
        if (itemElement) {
            itemElement.addEventListener("click", function () {
                foundItem(itemName);
            }, false);
        }
    });

    // Function to reload the page and start a new game
    function replay() {
        location.reload();
    }
});
