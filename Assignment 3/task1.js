let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Tamil Nadu", "Kerala"];
let result = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log(result);

