const arr = [1, 1, 1, 1];
let i = 0
for (i; arr[0] === arr[i+1]; i<arr.length){
    i++;
}
if (i === arr.length-1){
    console.log(true)
}else {
    console.log(false)
}