
/*const op = require('./ejercicio1');
op.suma(6,10);
op.resta(6,10);
op.multiplicacion(6,10);
op.division(6,10);
op.potencia(6,10);
op.radica(6);
console.log(op);
*/

/*
console.log('Digita la operacion que deseas realizar');
const operacion = process.openStdin();

operacion.addListener("data", (data) => 
{                            
    switch ($operacion) 
    {
        case "suma":
            const op = require('./ejercicio2');
                op.suma(6,10);
                console.log(op);
                process.exit();
        break;
        /*
        case resta:
            op.resta(6,10);
            console.log(op);
        break;

        case multiplicacion:
            op.multiplicacion(6,10);
            console.log(op);
        break;

        case division:
            op.division(6,10);
            console.log(op);
        break;

        case potencia:
            op.potencia(6,10);
            console.log(op);
        break;

        case radica:
            op.radica(6,10);
            console.log(op);
        break;
        
    }
})
*/

// 1. Requerir módulo http
const http = require ('http');

// Función callback para manejar el servidor
function handleServer(req,res)
{
    res.writeHead(404,{"Content-type":'text-html'})
    res.write('<h1> Esta es la respuesta del servidor OK</h1>')
    res.end()
}

// 2.  Crear el servidor nativo y definir una funcion
const server = http.createServer(handleServer).listen(5000)