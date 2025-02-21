document.addEventListener("DOMContentLoaded", function() {
    let searchBox = document.querySelector(".search-box input");
    let domainItems = document.querySelectorAll(".domain-item span");

    // The original domain names with their suffixes
    const originalDomains = [
        "Domeen.ee", "Domeen.eu", "Domeen.com", "Domeen.net", "Domeen.edu"
    ];

    // Function to update domain name based on search input
    searchBox.addEventListener("input", function() {
        let searchTerm = searchBox.value.trim(); // Get the value from the input field
        
        // Update all domain-item names
        domainItems.forEach((item, index) => {
            if (searchTerm) {
                // Get the domain extension (e.g., .ee, .eu, etc.)
                let domainExtension = originalDomains[index].split('.').pop();
                
                // Replace only the part before the domain extension
                item.textContent = `${searchTerm}.${domainExtension}`;
            } else {
                // Reset to original domain names if search term is empty
                item.textContent = originalDomains[index];
            }
        });
    });

    // The rest of your existing code (for button clicks etc.)
    let ValiNupud = document.querySelectorAll(".Vali-nupp");

    ValiNupud.forEach(nupp => {
        nupp.addEventListener("click", function(e) {
            // Check if the button is already in the "Valitud" state
            if (e.target.textContent === "Valitud") {
                // Reset to the original state
                e.target.textContent = "Vali"; // Original text
                e.target.style.color = "white";
                e.target.style.background = "blue";
                e.target.style.border = "none";
                e.target.style.padding = "10px 15px";
                e.target.style.borderRadius = "5px";
                e.target.style.cursor = "pointer";
            } else {
                // Change to "Valitud" state
                console.log(e.target.textContent);
                e.target.textContent = "Valitud";
                e.target.style.color = "black";
                e.target.style.background = "white";
                e.target.style.border = "1px solid blue";
            }
        });
    });
});
