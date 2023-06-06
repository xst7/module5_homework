let mas = new Map();
mas.set(1, 'Я');
mas.set('u', 'учусь');
mas.set('in', 'в');
mas.set(4, 'skill');
mas.set(5, 'factory');
for (let element of mas){
    for (let x = 0; x < mas.size; x++){
    console.log(`Ключ - ${element[0]}, значение - ${element[1]}`);
    }
}
