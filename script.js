
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
    addCopyButton();

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
        headerCreated.style.color = "rgba(255, 255, 255, 1)";
        headerCreated.addEventListener("click", () => {
            for (header of allChapters) {
                if (headerCreated.innerHTML == header.innerHTML) {
                    header.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }
            return;
        })
        chapterContent.appendChild(headerCreated);
    }
}

const addCopyButton = () => {
    const allTerminalCodes = document.getElementsByClassName("terminalCode");
    for (command of allTerminalCodes) {
        command.addEventListener("click", (e) => {
            let textToCopy = clearUpTerminalText(e.target.innerHTML);
            navigator.clipboard.writeText(textToCopy);
            let oldText = e.target.innerHTML;
            e.target.innerHTML = e.target.innerHTML.slice(0, -4) + "<div style=\"color=white; text-align: right; font-size: .5rem; margin-top: -.58rem\">COPIED</div></div>";
            setTimeout(() => {e.target.innerHTML = oldText}, 700);
        })
    }
}

const clearUpTerminalText = (terminalText) => {
    return(terminalText.slice(2).replaceAll("<i>", "").replaceAll("</i>", ""));
}
