
function startFunction() {
    document.getElementById("chapterContainer").addEventListener("mouseover", () => {
        document.getElementById("chapterContainer").style.width = "500px";
    });
    document.getElementById("menubarContainer").addEventListener("mouseover", () => {
        document.getElementById("chapterContainer").style.width = "0px";
    });
    document.getElementById("contentContainer").addEventListener("mouseover", () => {
        document.getElementById("chapterContainer").style.width = "0px";
    });
}

