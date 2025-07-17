function toggleVisibility() {
    const paragraph = document.getElementById("useless-paragraph");

    // Toggle visibility using display property
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}
