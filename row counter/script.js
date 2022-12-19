let count = 0;
let innerCount = document.getElementById("count-display");
innerCount.textContent += " " + count;

function countFun () {
    count += 1;
    innerCount.textContent = " " + count;
    console.log(count);
}
countFun();