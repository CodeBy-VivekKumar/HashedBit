function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log(correctfn("He is a baad boy", "baad", "good"));
