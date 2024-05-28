
function task_2() {
    let name = "Иван"
    let admin = name
    alert(admin)
};

function task_3() {
    let name = "Ilya"
    alert(`hello ${1}`);
    alert(`hello ${"name"}`);
    alert(`hello ${name}`);
};

function task_4() {
    let name = prompt("Введите свое имя");
    alert(`Привет, ${name}!`);
};

function task_5() {
    let a = 1, b = 1;
    let c = ++a;
    let d = b++;
    alert(`a = ${a}\nb = ${b}\nc = ${c}\nd = ${d}`)
};

function task_6() {
    let a = 2;
    let x = 1 + (a *= 2);
    alert(`a = ${a}\nx = ${x}`);
};

function task_7() {
    let a = Number(prompt("Первое число?","1"))
    let b = Number(prompt("Первое число?","2"))
    alert(`Сумма: ${a+b}`);
}

function task_8() {
    alert(`
        7>2: ${7>2}\n
        \"cтол\">\"стул\": ${"cтол">"стул"}\n
        \"4\">\"52\": ${"4">"52"}\n
        undefined == null: ${undefined==null}\n
        undefined === null: ${undefined===null}\n
        null == \"\\n0\\n\": ${null=="\n0\n"}\n
        null === +\"\\n0\\n\": ${null===+"\n0\n"}\n
    `);
};

function task_9() {
    if ("0"){
        alert("Привет");
    }
};

function task_10() {
    let answer = prompt('Какое "официальное" название JavaScript?');
    if(answer == "ECMAScript"){
        alert("Верно!");
    }
    else {
        alert(`Не знаете? \"ECMAScript!\"`);
    };
}

function task_11() {
    let a = Number(prompt("Число?","1"));
    let b = 0;
    if(a>0) {
        b = 1;
    }
    else if (a < 0) {
        b = -1;
    }
    else {
        b = 0;
    };
    alert(`Знак: ${b}`);
};

function task_12() {
    let a = Number(prompt("Первое число?","1"));
    let b = Number(prompt("Второе число?","1"));
    let c = "Мало";
    if(a+b < 4) {
        c = "Мало";
    }
    else {
        c = "Много"
    };
    alert(`Вывод: ${c}`);
};

function task_13() {
    let login = prompt("Логин:","").toLowerCase();
    let message;
    if(login == "сотрудник"){
        message = "Привет";
    }
    else if(login == "директор"){
        message = "Здравствуйте";
    }
    else{
        message = "Нет логина";
    };
    alert(message);
};

function task_14() {
    alert(null || 4 || undefined);
};

function task_15() {
    alert(alert(1) || 2 || alert(3));
};

function task_16() {
    alert(1 && null && 2);
};

function task_17() {
    alert(alert(1) && alert(2));
};

function task_18() {
    alert(null || 2 && 3 || 4);
};

function task_19() {
    let value = NaN;
    value &&= 10;
    value ||= 20;
    value &&= 30;
    value ||= 40;
    alert(value);
};

function task_20() {
    let age = Number(prompt("Возраст?","1"));
    if(14 >= age <= 90) {
        alert("Возраст в диапозоне 14-90");
    }
    else{
        alert("Вне диапозона 14-90");
    };
};

function task_21() {
    let age = Number(prompt("Возраст?","1"));
    if(age < 17 || age > 99) {
        alert("Вне диапозона 17-99");
    }
    else{
        alert("Возраст в диапозоне 17-99");
    };
};

function task_22() {
    if(-1 || 0) alert('first');
    if(-1 && 0) alert('second');
    if(null || -1 && 1) alert('third');
};

function task_23() {
    let login = prompt("Логин:");
    if(login==null){
        alert("Отменено");
    }
    else if(login.toLowerCase()=="админ"){
        let password = prompt("Пароль:");
        if(password==null){
            alert("Отменено");
        }
        else if(password=="Я главный"){
            alert("Здравствуйте!");
        }
        else{
            alert("Неверный пароль");
        };
    }
    else{
        alert("Я вас не знаю");
    };
};

//

function add(a,b) {
    return a+b;
};
function sub(a,b) {
    return a-b;
};
function div(a,b) {
    return a/b;
};
function mul(a,b) {
    return a*b;
};
function len(string) {
    return string.length
};
function even(a) {
    return a%2==0;
};

function task_2_1() {
    let input_a = Number(document.getElementById("calc-a").value);
    let action = document.getElementById("calc-action").value;
    let input_b = Number(document.getElementById("calc-b").value);
    let obj_output = document.getElementById("calc-output");
    let var_output = null;
    //
    if(action=="*"){
        var_output = input_a*input_b;
    }
    else if(action=="/"){
        var_output = input_a/input_b;
    }
    else if(action=="+"){
        var_output = input_a+input_b;
    }
    else if(action=="-"){
        var_output = input_a-input_b;
    };
    //
    obj_output.textContent = var_output;
};

function task_2_2() {
    let obj_input = document.getElementById("length-input");
    let obj_output = document.getElementById("length-output");
    obj_output.textContent = len(obj_input.value);
};

function task_2_3() {
    let obj_input = Number(document.getElementById("symbol-input").value);
    let obj_output = document.getElementById("symbol-output");
    //
    let value = "Ноль";
    if(obj_input > 0){
        value = "Положительное"
    }
    else if(obj_input < 0){
        value = "Отрицательное"
    };
    //
    obj_output.textContent = value;
};

function task_2_4() {
    let a = parseFloat(document.getElementById("avg-a").value);
    let b = parseFloat(document.getElementById("avg-b").value);
    let output = document.getElementById("avg-output");
    output.textContent = (a+b)/2;
};

function task_2_5() {
    let object = {
        name: document.getElementById("object-name").value,
        age: document.getElementById("object-age").value,
    };
    console.log(object.name);
    console.log(object.age);
    alert("Возраст и имя выведены в консоль");
};

function task_2_6() {
    let a = parseFloat(document.getElementById("even-a").value);
    let output = document.getElementById("even-output");
    let is_even = "";
    if(even(a)){
        is_even = "Чётное";
    }
    else{
        is_even = "Нечетное";
    };
    output.textContent = is_even;
};

function task_2_8() {
    let a = parseFloat(document.getElementById("log-a").value);
    let b = parseFloat(document.getElementById("log-b").value);
    let output = document.getElementById("log-output");
    let is_div = "";
    if(Math.round(a/b) == a/b){
        is_div = `Да (${a/b})`;
    }
    else{
        is_div = `Нет (${a/b})`;
    };
    output.textContent = is_div;
};