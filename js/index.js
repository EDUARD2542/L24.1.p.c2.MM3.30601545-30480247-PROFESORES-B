
import Cl_contratado from "./Cl_contratado.js";

let profesorContratado = new Cl_contratado("RAFAEL", 30, 15)    
let profesorContratado2 = new Cl_contratado("FELICIA", 30, 20)

let salida = document.querySelector("#salida")

salida.innerHTML = `El nombre del profesor es ${profesorContratado.nombre}<br>
El bono del profesor es ${profesorContratado.bono}<br>
El sueldo del profesor es ${profesorContratado.suelda}<br>
El ingreso total del profesor es ${profesorContratado.ingresoTotal()}<br>
El nombre del profesor es ${profesorContratado2.nombre}<br>
El bono del profesor es ${profesorContratado2.bono}<br>
El sueldo del profesor es ${profesorContratado2.suelda}<br>
El ingreso total del profesor es ${profesorContratado2.ingresoTotal()}`



