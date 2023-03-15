/*hacer un multifuncion
con un switch escoger la funcionalidad que queremos ya sea:
- calculadora
- calcular el indice de masa corporal (IMC)
- sacar un promedio de edades */

function opciones(opcion){
    //seleccionar la funcionaledad segun la opcion que decida el usuario 
    switch(opcion){
        case "1": //calculadora
            calculadora(prompt("Qué operación desea realizar?\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir."));
            break;
        case "2":
            calcularIMC();
            break;
        case "3":
            promedioEdades(Number(prompt("Cuantas edades desea ingresar?")));
            break;
        case "4":
            let n = 0;
            do{
                n = parseInt(prompt("De qué número desea sacar el factorial?"));
            }while(isNaN(n))
            factorial(n);
            break;
        case "5":
            if(!confirm("Esta seguro que desea salir??")){
                opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Salir.\nPor favor ingrese el número correspondiente."));
            } else{
                alert("Gracias por su visita, tenga buen día");
            }
            break;
        default: 
            opciones(prompt("Por favor ingrese una opción válida (Ingrese el número)\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número\n5. Salir."));
            break;
    }
}

function ingresarNumeros(){
    let num = 0;
    do{
        num = Number(prompt("Ingrese un número"));
    }while(isNaN(num))
    return num;
}

function calculadora(operacion){
    switch(operacion){
        case "1": //suma
            let cantidad = parseInt(prompt("cuantos numeros desea sumar??"));
            let sumNums = new Array(0);
            let suma = 0;
            for (let i = 1; i <= cantidad; i++) {
                sumNums.push(Number(prompt(`Ingrese el ${i}º numero`)));
            }
            for(let i = 0; i < sumNums.length; i++){
                suma += sumNums[i];
            }
            alert(`El resultado de la suma es ${suma}`);
            break;
        case "2": //resta
            let num1 = ingresarNumeros(),
                num2 = ingresarNumeros();
            alert(`El resultado de la resta es ${num1-num2}`);
            break;
        case "3": //multi
            let numA = ingresarNumeros(),
                numB = ingresarNumeros();
            alert(`El resultado de la resta es ${numA*numB}`);
            break;
        case "4": //div
            let num11 = ingresarNumeros(),
                num22 = ingresarNumeros();
            if(num22 === 0){
                alert("No se puede realizar la división entre 0")
            } else{
                alert(`El resultado de la resta es ${num11-num22}`);
            }
            break;
        default:
            calculadora(prompt("Por favor ingrese una opción válida\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir."));
            break;
    }
    if(confirm("Desea continuar con otra funcionalidad")){
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Salir.\nPor favor ingrese el número correspondiente."));
    } else{
        alert("Gracias por su visita, tenga buen día");
    }
}

function calcularIMC(){
    let peso, altura, imc = 0;
    do{
        peso = Number(prompt("Ingrese su peso"));
        if(peso == 0){
            peso = NaN;
        }
    }while(isNaN(peso) && peso != 0)
    do{
        altura = Number(prompt("Ingrese su altura (en cm)"));
        if(altura == 0){
            altura = NaN;
        }
    }while(isNaN(altura) && altura != 0)
    imc = peso / ((altura/100)**2);
    if(imc < 18.5){
        alert(`Su índice de masa es ${imc}\nUsted esta con bajo peso`);
    } else if(imc >= 18.5 && imc < 25){
        alert(`Su índice de masa es ${imc}\nUsted esta con peso saludable`);
    } else if(imc >= 25 && imc < 30){
        alert(`Su índice de masa es ${imc}\nUsted esta con sobrepeso`);
    } else{
        alert(`Su índice de masa es ${imc}\nUsted tiene obesidad`);
    }
    if(confirm("Desea continuar con otra funcionalidad")){
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Salir.\nPor favor ingrese el número correspondiente."));
    } else{
        alert("Gracias por su visita, tenga buen día");
    }
}

function promedioEdades(cantidad){
    let edades = new Array(0);
    let promedio = 0;
    for(let i = 1; i <= cantidad; i++){
        edades.push(Number(prompt(`Ingrese la ${i}ª edad.`)));
    }
    for (let i = 0; i < edades.length; i++) {
        promedio += edades[i];
    }
    alert(`El promedio de las edades ${edades} es ${promedio/cantidad}`);
    if(confirm("Desea continuar con otra funcionalidad")){
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Salir.\nPor favor ingrese el número correspondiente."));
    } else{
        alert("Gracias por su visita, tenga buen día");
    }
}

function factorial(numF){
    let fact = 1;
    for (let i = 1; i <= numF; i++) {
        fact = fact * i;
    }
    alert(`El factorial de ${numF} es: ${fact}`);
    if(confirm("Desea continuar con otra funcionalidad")){
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Salir.\nPor favor ingrese el número correspondiente."));
    } else{
        alert("Gracias por su visita, tenga buen día");
    }
}

opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Salir.\nPor favor ingrese el número correspondiente."));

