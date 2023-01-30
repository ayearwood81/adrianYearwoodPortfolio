const portfolio = {};

portfolio.isMenuOpen = false;
portfolio.isFormOpen = false;
portfolio.menuButtonElement = document.querySelector(".menuButton");
portfolio.menuItemsElement = document.querySelector(".dropMenuLinks");
portfolio.allButtons = document.querySelectorAll("button");
portfolio.socialLinks = document.querySelectorAll(".socialLink")
portfolio.emailButton = document.querySelector(".showEmailForm");
portfolio.emailForm = document.querySelector(".emailForm");

portfolio.menuButtonElement.addEventListener("click", () => {
    if(portfolio.isMenuOpen === false) {
        portfolio.menuItemsElement.style.display = "block";
        portfolio.isMenuOpen = true;
    } else {
        portfolio.menuItemsElement.style.display = "";
        portfolio.isMenuOpen = false;
    }
})

portfolio.allButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.cursor = "pointer";
    })
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    })
})

portfolio.socialLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
    })
    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    })
})

portfolio.emailButton.addEventListener("click", () => {
    if (portfolio.isFormOpen === false) {
        document.querySelector(".emailForm").style.display = "flex";
        document.querySelector(".showEmailForm").textContent = "Close Form"
        portfolio.isFormOpen = true;
    } else {
        document.querySelector(".emailForm").style.display = "";
        document.querySelector(".showEmailForm").textContent = "Email Adrian"
        portfolio.isFormOpen = false;
    }
})