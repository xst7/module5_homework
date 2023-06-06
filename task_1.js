x = prompt ('введити число')
x = +x
if (isNaN(x)){
    console.log('Упс, кажется, вы ошиблись')
} else if (x % 2 === 0){
    console.log('вы ввели четное число')
} else {
    console.log('вы ввели нечетное число')
}
