const text = document.getElementById("text-container");

document.getElementById("colorchange").addEventListener("click", () => {
    const color = document.getElementById("colorbox").value;
    text.style.color = color;
});

document.getElementById("fontsize").addEventListener("input", () => {
    const size = document.getElementById("fontsize").value;
    text.style.fontSize = size + "px";
});

document.getElementById("italic").addEventListener("click", () => {
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", () => {
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", () => {
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", (e) => {
    text.style.fontFamily = e.target.value;
});

document.getElementById("getstyle").addEventListener("click", () => {
    const computed = window.getComputedStyle(text);
    let output = `color: ${computed.color}; `;
    output += `font-size: ${computed.fontSize}; `;
    output += `text-decoration: ${computed.textDecorationLine}; `;
    output += `font-style: ${computed.fontStyle}; `;
    output += `font-weight: ${computed.fontWeight}; `;
    output += `font-family: ${computed.fontFamily};`;

    document.getElementById("css-props").innerText = output;
});
