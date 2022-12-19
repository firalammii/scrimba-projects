const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}",
    "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

function generate (digits) {
    let pw1 = "";
    let pw2 = "";
    for (let i = 0; i < digits; i++) {
        pw1 += characters[Math.floor(Math.random() * characters.length)];
        pw2 += characters[Math.floor(Math.random() * characters.length)];
    }
    document.getElementById("input1").value = pw1;
    document.getElementById("input2").value = pw2;
}
function copy (id) {
    let copied = document.getElementById(id);
    copied.select();
    copied.setSelectionRange; (0, 99999);
    navigator.clipboard.writeText(copied.value);
    console.log(copied.value);
}