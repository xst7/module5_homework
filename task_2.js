let x = 'stroka'
let a = 1
let b = ''
let c = false
if (typeof (x) === typeof (a)){
    console.log('Тип переменной х: ' + typeof (x));
}else if (typeof (x) === typeof (b)){
    console.log('Тип переменной х: ' + typeof (x));
}else if (typeof (x) === typeof (c)){
    console.log('Тип переменной х: ' + typeof (x));
}else {
    console.log('Тип x не определён')
}