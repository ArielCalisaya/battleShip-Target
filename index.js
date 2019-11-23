/*
*   Cantidad/Tamaño
*/
let fila = 10;
let columna = 10;
let cuadro = 50;

let container = document.getElementById('tableroDelJuego')

// Creacion de cuadricula mediante bucle añadiendo hijos al div(#tableroDelJuego) padre

for ( x=0 ; x < columna; x++ ){
    for( y= 0; y< fila; y++){

        let cuadros = document.createElement('div');
        cuadros.setAttribute("class", "grid")
        container.appendChild(cuadros);

        cuadros.id = 'n' + x + y;

        let XPosition = x * cuadro;
        let YPosition = y * cuadro;

        cuadros.style.left = XPosition + 'px';
        cuadros.style.top = YPosition + 'px';
        cuadros.style.borderColor = '#04B404';
        cuadros.style.background = '#173B0B';
    }
}

let Tiros = 0;

// Modelacion del tablero de juego

let tablero = [
    [0,0,0,0,1,0,0,0,0,1],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,1,1,1],
    [0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,1,1],
    [0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
]

// Event Handler

container.addEventListener('click', handleFire, false);
function handleFire(e){
    if (e.target !== e.currentTarget){
        let x = e.target.id.substring(2,3);
        let y = e.target.id.substring(1,2);

        if(tablero[x][y] == 0){
            e.target.style.background= 'red';
            tablero[x][y] = 3;

        }
        else if(tablero[x][y] == 1){
            e.target.style.background= '#00ff00';
            tablero[x][y]=2;
            Tiros++;

            if(Tiros == 20){
                alert('You Win, Atinaste Todos los tiros!!!');
            }
        }
        else if (tablero[x][y] > 1) {
            alert('ya has disparado aqui')
        }
    }
    e.stopPropagation();
}
