function createDiv(width, height, text) {
    const newDiv = document.createElement('div');

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;

    // Optional styles to make the div visible and styled
    newDiv.style.border = "2px solid #333";
    newDiv.style.backgroundColor = "#eaeaea";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "center";
    newDiv.style.fontFamily = "Arial";
    newDiv.style.fontSize = "16px";

    const container = document.getElementById("container");
    container.appendChild(newDiv);
}
