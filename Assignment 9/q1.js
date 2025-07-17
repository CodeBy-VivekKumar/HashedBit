function variableScopeDemo() {
  var a = "I am var";       // Function scoped
  let b = "I am let";       // Block scoped
  const c = "I am const";   // Block scoped and constant

  console.log(a);  // I am var
  console.log(b);  // I am let
  console.log(c);  // I am const
}
variableScopeDemo();
