
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
    createAnimation();

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
            if (window.getSelection().toString()) {
                navigator.clipboard.writeText(window.getSelection().toString());
            } else {
                let textToCopy = clearUpTerminalText(e.target.innerHTML);
                navigator.clipboard.writeText(textToCopy);    
            }
            showCopyAnimation();
        })
    }

    const allTerminalCodesJS = document.getElementsByClassName("terminalCodeJs");
    for (command of allTerminalCodesJS) {
        command.addEventListener("click", (e) => {
            if (window.getSelection().toString()) {
                navigator.clipboard.writeText(window.getSelection().toString());
            } else {
                let textToCopy = clearUpTerminalTextJs(e.target.innerHTML);
                navigator.clipboard.writeText(textToCopy);    
            }
            showCopyAnimation();
        })
    }

    const allTerminalCodesHTML = document.getElementsByClassName("terminalCodeHTML");
    for (command of allTerminalCodesHTML) {
        command.addEventListener("click", (e) => {
            if (window.getSelection().toString()) {
                navigator.clipboard.writeText(window.getSelection().toString());
            } else {
                let textToCopy = clearUpTerminalTextHTML(e.target.innerHTML);
                navigator.clipboard.writeText(textToCopy);    
            }
            showCopyAnimation();
        })
    }
}

const createAnimation = () => {
    alertBox = document.createElement("div");
    alertBox.innerHTML = "Kopiert";
    alertBox.setAttribute("id", "copyMessage");
    alertBox.style.opacity = "0";
    document.body.appendChild(alertBox);
}

const showCopyAnimation = () => {
    let alertBox = document.getElementById("copyMessage");
    alertBox.style.transition = "opacity .0s";
    alertBox.style.opacity = "1.0";
    window.setTimeout(() => {
        alertBox.style.transition = "opacity .5s";
        alertBox.style.opacity = 0;
    }, 300);
}

const clearUpTerminalText = (terminalText) => {
    return(terminalText.slice(2).replaceAll("<i>", "").replaceAll("</i>", ""));
}
const clearUpTerminalTextJs = (terminalText) => {
    return(terminalText.slice(2).replaceAll("<i>", "").replaceAll("</i>", "").replaceAll("&nbsp;&nbsp;", "  ").replaceAll("<br><br>", "\n\n").replaceAll("<br>", "\n"));
}
const clearUpTerminalTextHTML = (terminalText) => {
    return(terminalText.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&nbsp;&nbsp;", "    ").replaceAll("<br>", "\n").replaceAll("&nbsp;", "  "));
}

const htmlCodeToHtmlContent = (string) => {
    return(string.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("  " ,"&nbsp;&nbsp;").replaceAll("\n", "<br>"));
}

const jsCodeToHtmlContent = (string) => {
    return(string.replaceAll("  ", "&nbsp;&nbsp;").replaceAll("\n", "<br>"));
}

let textToTranslateFromHtml = ``;

let textToTranslateFromJs = ``;


if (textToTranslateFromHtml != ``) {
    alert(htmlCodeToHtmlContent(textToTranslateFromHtml));
} else if (textToTranslateFromJs != ``) {
    alert(jsCodeToHtmlContent(textToTranslateFromJs));
}
