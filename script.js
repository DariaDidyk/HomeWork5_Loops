function task1() {
// 1. Переписать примеры с итерацией числа и прерыванием цикла с помощью while и do/while
    let userIsHappy = true;
    let number = 0;

    do {
    let userIsHappy = confirm("Are you happy that the number is " + ++number + "?");
    } while (userIsHappy);

    for (let number = 1, isUserHappy = true; isUserHappy; number++) {
        isUserHappy = confirm("Are you happy that the number is " +  number + "?");
    }

    for (let i = 5; i < 10; i++) {
        if (!( i % 2)) break;
        console.log(i);
    }
}

task1();

function task2 () {
// 2.(Переписать самостоятельно) Скрипт о запросе на угадывание сгенерированного числа так, чтобы человек мог отменить игру, либо угадывать, пока число не станет соответствовать

    let userNumber;
    let random;

    do {
        userNumber = prompt("Угaдайте число от 1 до 10");
        random = Math.floor(Math.random() * (10-1)) + 1;    
        if (!userNumber) break;    
        if (+userNumber === random) {
            console.log(userNumber);
            alert("Вы угадали!!!") 
            break;
        } else {
            alert("Вы не угадали!!!"); 
        } 
    } while (!(+userNumber === random))
}

task2();

function task3() {
// 3. Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.

    let userNum = +prompt("Введите целое число меньше 10");

    for (let i = userNum; i < 100; i = i + userNum) {
        console.log(i);
    }

    for (let i = 1; i < 10; i++) {
        console.log(userNum * i);
    }

    let Count = +prompt("Сколько вывести чисел?");
    let i = 1;
    do {
        if (userNum > 10) {
            console.log("Введите число меньше 10!!!!!!!!") 
            break;
        }
        else if (userNum < 10) {
            console.log(userNum * i);
            i = i + 1;
        } 
    } while(i <= Count);
}
task3();
