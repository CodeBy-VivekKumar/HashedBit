function countWords(para) {
    return para.trim().split(/\s+/).length;
}
console.log(countWords("I love programming and building projects with JavaScript."));
