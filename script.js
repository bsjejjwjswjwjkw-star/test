const subText = document.getElementById("sub-text");

const description = "На цьому сайті ви знайдете корисні статті про виховання, психологію дітей, здоров’я та розвиток. Матеріали створені для турботливих батьків.";

function startSubText() {
    subText.classList.add("show");

    let index = 0;
    function typeDescription() {
        if (index < description.length) {
            subText.textContent += description.charAt(index);
            index++;
            setTimeout(typeDescription, 35);
        }
    }

    typeDescription();
}

window.onload = function() {
    setTimeout(startSubText, 2300);
};
window.addEventListener("DOMContentLoaded", () => {
    startSubText();

    const categories = document.querySelectorAll(".category");
    const articles = document.querySelectorAll(".article");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const selected = category.getAttribute("data-category");

            articles.forEach(article => {
                const articleCategory = article.getAttribute("data-category");

                article.style.display =
                    selected === "all" || selected === articleCategory
                    ? "block"
                    : "none";
            });
        });
    });
});
