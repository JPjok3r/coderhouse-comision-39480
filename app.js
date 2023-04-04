/*hacer un multifuncion
con un switch escoger la funcionalidad que queremos ya sea:
- calculadora
- calcular el indice de masa corporal (IMC)
- sacar un promedio de edades */

class Persona{

    constructor(nombre, edad, fecha){
        this.nombre = nombre;
        this.edad = edad;
        this.fecha = fecha;
    }


}

const personas = [];
let patronFecha = /^\d{2}-\d{2}-\d{4}/;
let alarma = {
    "hora": 0,
    "minutos": 0,
    "activo": false
};

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
        case "5": /** control de usuario */
            if(personas.length = 0){
                if(confirm("El registro esta vacío. Desea ingresar datos??")){
                    let nombre = prompt("Ingrese el nombre a registrar"),
                        edad = parseInt(prompt("Ingrese la edad")),
                        fechaN = prompt("Ingrese la fecha de nacimiento\nPor favor ingrese la fecha en formato\nMM-DD-AAAA(Mes-Día-Año)");
                    let aux = true;
                    do{
                        if(patronFecha.test(fechaN)){
                            aux = false;
                        } else{
                            fechaN = prompt("Formato inválido de fecha ingresada.\nPor favor ingrese la fecha en formato\nMM-DD-AAAA(Mes-Día-Año)");
                        }
                    }while(aux);
                    personas.push(new Persona(nombre, edad, new Date(fechaN)));
                    controlPersonas();
                } else{
                    controlPersonas();
                }
            }
            break;
        case "6":
            temporizador();
            break;
        case "7":
            if(!confirm("Esta seguro que desea salir??")){
                opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
            } else{
                alert("Gracias por su visita, tenga buen día");
            }
            break;
        default: 
            opciones(prompt("Por favor ingrese una opción válida (Ingrese el número)\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir."));
            break;
    }
}

function ingresarNumeros(desc="Ingrese un número"){
    let num = 0;
    do{
        num = Number(prompt(desc));
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
                sumNums.push(ingresarNumeros(`Ingrese el ${i}º numero`));
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
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
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
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
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
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
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
        opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
    } else{
        alert("Gracias por su visita, tenga buen día");
    }
}

function controlPersonas() {
    let op = prompt("Que desea realizar??\n1. Registrar nueva persona\n2. Eliminar persona\n3. Buscar persona por nombre\n4. Mostrar personas con cumpleaños en el mismo mes.\n5. Modificar un registro\n6. Eliminar todo el registro\n7. Salir");
    switch(op){
        case "1":
            let nombre = prompt("Ingrese el nombre a registrar"),
                edad = parseInt(prompt("Ingrese la edad")),
                fechaN = prompt("Ingrese la fecha de nacimiento\nPor favor ingrese la fecha en formato\nMM-DD-AAAA(Mes-Día-Año)");
            let aux = true;
            do{
                if(patronFecha.test(fechaN)){
                    aux = false;
                } else{
                    fechaN = prompt("Formato inválido de fecha ingresada.\nPor favor ingrese la fecha en formato\nMM-DD-AAAA(Mes-Día-Año)");
                }
            }while(aux);
            personas.push(new Persona(nombre, edad, new Date(fechaN)));
            break;
        case "2":
            if(personas.length === 0){
                alert("El registro está vacío.");
            } else{
                //llamar a controlOpcionValida() enviando la funcion a realizar, ya sea modificar u otra funcion
                controlarOpcionValida(eliminar, "Qué registro desea eliminar?");
            }
            controlPersonas();
            break;
        case "3":
            let nombreBuscado = prompt("Ingrese el nombre a buscar");
            const personaEncontrada = personas.filter(value => value === nombreBuscado);
            let mensaje = ""
            personaEncontrada.forEach((data, index) => {
                mensaje += `${index+1}. ${data.nombre} - Edad: ${data.edad} - Fecha: ${data.fecha}`;
            });
            alert(mensaje);
            controlPersonas();
            break;
        case "4":
            let mes = parseInt(prompt("De qué mes quiere ver los cumpleañeros\n1. Enero\n2. Febrero\n3. Marzo\n4. Abril\n5. Mayo\n6. Junio\n7. Julio\n8. Agosto\n9. Septiembre\n10. Octubre\n11. Noviembre\n12. Diciembre"));
            if(mes > 0 && mes < 13){
                const nombres = personas.filter(value => value.fecha.getMonth() === mes-1);
                let msg = "Los cumpleañeros son:\n";
                nombres.forEach(data => {
                    msg += `${data.nombre}\n`;
                });
                alert(msg);
            } else{
                alert("Ingresó una opción incorrecta");
            }
            controlPersonas();
            break;
        case "5":
            if(personas.length === 0){
                alert("El registro está vacío. Imposible realizar la operación\nPor favor llene el registro y vuelva a realizar la operación");
            } else{
                
                controlarOpcionValida(modificar, "Qué registro desea modificar?");
            }
            controlPersonas();
            break;
        case "6":
            if(personas.length > 0){
                if(confirm("Está seguro que desea eliminar todo el registro??")){
                    while(personas.length != 0){
                        personas.splice();
                    }
                    alert("El registro se eliminó con éxito!")
                } else{
                    alert("Operación cancelada!!");
                }
                controlPersonas();
            } else{
                alert("El registro ya está vacío");
                controlPersonas();
            }
            
            break;
        case "7":
            if(confirm("Desea continuar con otra funcionalidad")){
                opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
            } else{
                alert("Gracias por su visita, tenga buen día");
            }
            break;
        default:
            alert("Por favor ingrese una opción válida");
            controlPersonas();
            break;
    }
}

function modificar(position){
    let mod = prompt(`Qué dato quiere modificar??\n1. Nombre: ${personas[position-1].nombre}\n2. Edad: ${personas[position-1].edad}\n3. Fecha Nac.: ${personas[position-1].fecha}`);
    switch(mod){
        case "1":
            personas[position-1].nombre = prompt("Ingrese el nuevo nombre");
            break;
        case "2":
            personas[position-1].edad = parseInt(prompt("Ingrese la edad"));
            break;
        case "3":
            let fechaN = prompt("Ingrese la nueva fecha a registrar");
            let aux = true;
            do{
                if(patronFecha.test(fechaN)){
                    aux = false;
                } else{
                    fechaN = prompt("Formato inválido de fecha ingresada.\nPor favor ingrese la fecha en formato\nMM-DD-AAAA(Mes-Día-Año)");
                }
            }while(aux);
            personas[position-1].fecha = new Date(fechaN);
            break;
        default:
            alert("Por favor ingrese una opcion valida!");
            modificar();
            break;
    }
}

function eliminar(position){
    if(position === 1){
        personas.shift()
    } else if(position === personas.length){
        personas.pop();
    } else{
        personas.splice(position-1,1);
    }
}

function controlarOpcionValida(fn, msg){
    let mensaje = `${msg}\n`;
    personas.forEach((data, index) => {
        mensaje += `${index+1}. ${data.nombre} - ${data.edad} Años - Nacido: ${data.fecha}\n`;
    });
    let opr = parseInt(prompt(mensaje));
    if(opr > 0 && opr <= personas.length){
        fn(opr);
    } else{
        alert("Por favor ingrese una opcion valida!");
        controlarOpcionValida(fn, msg);
    }
}

function temporizador(){
    let temp = parseInt(prompt("En cuanto tiempo desea que suene la alarma del temporizador(en minutos)"));
    let horario = new Date();
    let hh = horario.getHours();
    let mm = horario.getMinutes();
    if((mm + temp) > 59){
        alarma.hora = hh + 1;
        alarma.minutos = (mm + temp) - 60;
        alarma.activo = true;
    } else{
        alarma.hora = hh;
        alarma.minutos = mm + temp;
        alarma.activo = true;
    }
    
}

function reloj(){
    let hoy = new Date();
    let hora = hoy.getHours();
    let minuto = hoy.getMinutes();
    let sec = hoy.getSeconds();
    if (minuto < 10) {
        minuto = "0" + minuto
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (hora == alarma.hora && minuto == alarma.minutos && alarma.activo) {
        window.open("https://www.youtube.com/watch?v=YykjpeuMNEk&t=107s&autoplay=1");
        alarma.activo = false;
    }

    let tm = document.getElementById("tm");
    tm.textContent = (hora + ":" + minuto + ":" + sec);
}

opciones(prompt("Seleccione una de las funciones a realizar:\n1. Calculadora.\n2. Calcular IMC (Indice de masa corporal).\n3. Promedio de edades.\n4. Factorial de un número.\n5. Operaciones con usuariosn\n6. Temporizador con alarma\n7. Salir.\nPor favor ingrese el número correspondiente."));
setInterval(reloj, 1000);

