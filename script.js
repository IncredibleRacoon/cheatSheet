
function startFunction() {
    document.getElementById("chapterContainer").addEventListener("mouseover", () => {
        document.getElementById("chapterContainer").style.width = "800px";
    });
    document.getElementById("menubarContainer").addEventListener("mouseover", () => {
        document.getElementById("chapterContainer").style.width = "0px";
    });
    document.getElementById("contentContainer").addEventListener("mouseover", () => {
        document.getElementById("chapterContainer").style.width = "0px";
    });

    createChapterContent();

}

const createChapterContent = () => {
    const chapterContent = document.getElementById("chapterContent");
    const allChapters = document.querySelectorAll("h2, h3");
    for (chapter of allChapters) {
        let headerCreated = document.createElement("h" + chapter.tagName.toString()[1]);
        headerCreated.innerHTML = chapter.innerHTML;
        headerCreated.style.marginLeft = 20 * (chapter.tagName.toString()[1] - 1) + "px";
        headerCreated.style.fontWeight = 100;
        headerCreated.style.marginTop = "1rem";
        headerCreated.style.color = "rgba(27, 29, 105, 0.8)";
        chapterContent.appendChild(headerCreated);
    }
}
