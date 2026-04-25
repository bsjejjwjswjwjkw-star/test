const subText = document.getElementById("sub-text");

const description = "На цьому сайті ви знайдете корисні статті про прикорм дітей, психологію та все що зв'язане з дітьми. Матеріали створені для турботливих батьків.";

function startSubText() {
    subText.textContent = description;
    subText.classList.add("show");
}

window.onload = function() {
    setTimeout(startSubText, 800);
};


function startSubText() {
    subText.textContent = description;
    subText.classList.add("show");
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
