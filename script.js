const subText = document.getElementById("sub-text");

const description = "На цьому сайті ви знайдете корисні статті про прикорм дітей, психологію та все що зв'язане з дітьми. Матеріали створені для турботливих батьків.";

function startSubText() {
    subText.textContent = description;

    // ⬇️ маленькая пауза перед появлением
    setTimeout(() => {
        subText.classList.add("show");
    }, 100);
}

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(startSubText, 800);

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
