// creamos el array de lista de usuarios
const usuarios=[
    { nombre: "Administrador", documento: "54321", contraseña: "admin123", tipoUsuario: 1},
    { nombre: "usuario", documento: "12345", contraseña: "user123", tipoUsuario: 2 }
]
console.log(usuarios);

//creamos la función de inicio de sesión

function iniciarSesion(documento, contraseña) {
    for (let usuario of usuarios) {
        if (usuario.documento===documento & usuario.contraseña===contraseña) {
            return usuario;
        }
    }
    // return null;
    // console.log(iniciarSesion);
}

//creamos el array de los billetes

const billetes =[
    {denominacion: 2000, cantidad: 0},
    {denominacion: 5000, cantidad: 0},
    {denominacion: 10000, cantidad: 0},
    {denominacion: 20000, cantidad: 0},
    {denominacion: 50000, cantidad: 0},
    {denominacion: 100000, cantidad: 0},
]
function cargarCajero() {
    billetes.forEach(billete=> {
        let cantidad =parseInt(prompt(`Por favor ingrese la cantidad de billetes de ${billete.denominacion} Pesos Colombianos`));
        billete.cantidad += isNaN(cantidad) ? 0 : cantidad
    });
    billetes.forEach(billete=>{
        console.log(`Denominación: ${billete.denominacion} - cantidad: ${billete.cantidad}`);
    });
    const total= billetes.reduce((acc, billete)=> acc + billete.denominacion * billete.cantidad,0);
    console.log(`Total: ${total} Pesos Colombianos`)
}

//Creamos la función para retirar dinero

function retirarDinero(monto) {
    if(monto <= 0){
        console.log("El monto es inválido");
        return;
    }

    let montoReal= monto;
    let billetesEntregados = [];

    for (let billete of billetes){
        let cantidad = Math.floor(monto/billete.denominacion);
        cantidad = Math.min(cantidad, billete.cantidad);

    if (cantidad>0) {
        billetesEntregados.push({denominacion: billete.denominacion, cantidad })
    }
    }
}

function cajeroElectronico() {
    while(true){
        let documento = prompt ("Ingrese su numero de documento: ");
        let contraseña = prompt ("Ingrese su contraseña: ");

        let usuario = iniciarSesion(documento, contraseña);
        if (usuario){
        if (usuario.tipoUsuario ===1){
            cargarCajero();
        } else if (usuario.tipoUsuario===2){
            const total=billetes.reduce((acc, billete)=> acc+ billete.denominacion *billete.cantidad, 0);
            if(total===0){
                console.log("Cajero en mantenimiento, por favor vuelva pronto.");
            }else{
                let.monto=parseInt(prompt("Ingrese la cantidad que desea retirar"));
                retirarDinero(monto);
            }
        } 

    }else{
        console.log("usuario o contraseña incorrectos, intente nuevamente. ");
    }
}
}
cajeroElectronico();