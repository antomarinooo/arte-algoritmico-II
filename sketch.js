// Antonia Cajigal
// miércoles 8 de octubre de 2025

// Obra original de Max Bill: Berlin Layout
// Alliance Graphique Internationale. (s.f.). Berlin Layout
// Alliance Graphique Internationale. https://a-g-i.org/design/berlin-layout

// GUÍA DE USO:
// ----
// al mover el cursor en el eje x del canvas (con mouseX), se hará un cambio gradual de un color x a otro color y.
// también mouseX va a hacer que según la posición del mouse cambie la separación de las franjas.

// Las franjas rojas van hacia abajo
// Las franjas azules van hacia arriba
// las franjas amarillas se quedan estáticas

// ----------------- paso 1: DEFINIR VARIABLES

// definí una libreria de colores con los colores originales de la obra de max y unos colores alternativos para cada uno. Mediante un array simple, haciendo uso de la función let para definir una variable, hice que cada color tenga su color de transición, por ej: el rojo pasa a a ser un rosado, el amarillo un verde y el azul un morado.
//esto es un array, cada indice es un sub-array.
let misColores = [
["#ED3833", "#FF9CF5"], // sub-array 0 -> rojo a rosado
["#F5A841", "#B9E157"], // sub-array 1 -> amarillo a verde
["#40368F", "#8F4DFF"]  // sub-array 2 -> azul a morado
];

// Estructura array:

// | sub-array |  [0]   |  [1]   |
// |-----------|--------|--------|
// |     0     | [0][0] | [0][1] |
// |     1     | [1][0] | [1][1] |
// |     2     | [2][0] | [2][1] |


let separacion = 64;
//acá definí la variable de separación, o sea que el espaciado por defecto va a ser 64px

function setup() {
createCanvas(660, 900);
}

// ----------------- paso 2: crear función para dibujar.

function draw () {
background("#F5E5D7");
noStroke(); //elimina el borde (stroke)

  
  
// ----------------- paso 3: INTERACCIONES

  // >>>>> paso 3.1: acá voy a definir las variables para la velocidad
  // de los grupos de franjas que quiero.

  let velocidadRojas = frameCount * (1);
  let velocidadAzules = frameCount * (-1);

  // FUNCION MAP  
  
    let t = map(mouseX, 0, width, 0, 1);
  
  // Si el mouse está a la izquierda (mouseX = 0), t = 0.
  // Si el mouse está en el centro (mouseX = width/2), t = 0.5.
  // Si el mouse está a la derecha (mouseX = width), t = 1.
  
  // entonces va a relacionar cada valor del mouseX con el que le va a otorgar
  
  // cuando el cursor se mueva en el eje x (mouseX)
  // convierte la posición del mouse en un número entre 0 y 1.
  // izquierda -> 0, centro -> 0.5, derecha -> 1

  
  // >>>>> paso 3.3: determinar colores graduales según cursor (map)

  // El primer numero dentro de los corchetes indica el indice (subarray)
  // El segundo numero dentro de los corchetes a cual variante del sub array
  // t es un valor entre 0 y 1 que indica la posición dentro del gradiente
  // 0 es primer color del par, 1 -> segundo color del par
  // t: posición del mouse (definido por la variable anterior)


  // lerp -> interpolacion de colores

  let rojoGradual = lerpColor(color(misColores[0][0]), color(misColores[0][1]), t);
  // rojo a rosado
  let amarilloGradual = lerpColor(color(misColores[1][0]), color(misColores[1][1]), t);
  // amarillo a verde
  let azulGradual = lerpColor(color(misColores[2][0]), color(misColores[2][1]), t);
  // azul a morado

  
  // >>>>> paso 3.2: map para ajustar separacion con el mouseX
  separacion = map(mouseX, 0, width, 64, 90);
  
      // >>>>> paso 3.2.1: Limitar valores de separación
      separacion = constrain(separacion, 64, 90); // utilicé un constrain
      //hace que se determine un mínimo y un máximo


// ----------------- paso 4: dibujar franjas

// amarillo
  
fill(amarilloGradual);
for (let i = 0; i < 100; i++) {
let miPosicion = -300 + i * separacion;
  
// EXPLICACIÓN BUCLE FOR LOOP

// Comienza desde la vuelta 0 (i = 0).
// Si i es menor que 100 (porque quiero que haga 100 copias) el bucle seguirá operando.
// Si lo anterior se cumple, entonces se le va a sumar 1 a i, eso significa el i++ (que es lo mismo que i = i + 1)
// cuando detecte que i es igual o mayor que 100 el bucle parará (o sea que hizo 100 copias).
  
beginShape();
vertex(192, 330 + miPosicion); // los vértices + la separación entre cada franja.
vertex(222, 330 + miPosicion);
vertex(450, 102 + miPosicion);
vertex(420, 102 + miPosicion);
endShape(CLOSE);
}

// rojo
  
fill(rojoGradual);
for (let i = 0; i < 100 ; i++) {
let miPosicion = -2200 + i * separacion + velocidadRojas;
  
beginShape();
vertex(63, 360 + miPosicion);
vertex(63, 390 + miPosicion);
vertex(324, 132 + miPosicion);
vertex(324, 102 + miPosicion);
endShape(CLOSE);
}
  
// azul
  
fill(azulGradual);
for (let i = 0; i < 100; i++) {
let miPosicion = -3000 + i * separacion + velocidadAzules;
  
beginShape();
vertex(324, 360 + miPosicion);
vertex(324, 390 + miPosicion);
vertex(582, 132 + miPosicion);
vertex(582, 102 + miPosicion);
endShape(CLOSE);
}
  
  

// ----------------- paso 5: HACER MARCO


// acá hice cuatro rectangulos (uno arriba, otro abajo, a la izq y a la der) para que se haga un efecto de marco.
fill("#F5E5D7"); // mismo color que el fondo

// Rectángulo superior
rect(0, 0, width, 80);

// Rectángulo inferior
rect(0, height - 220, width, 220);

// Rectángulo izquierdo
rect(0, 0, 80, height);

// Rectángulo derecho
rect(width - 80, 0, 80, height);
  
  
// ----------------- paso 6: TEXTO OBRA

fill("#1E1E1E");
textSize(20);
textAlign(LEFT, BOTTOM);
textSize(16);
textFont('DM Sans');
  
text("Antonia Cajigal Marino | Obra original de Max Bill: Berlin Layout", 80, height -160);
text("8/10/2025 | Pensamiento computacional y programación | sección 7", 80, height -140);
text("Docentes: Matías Ferrari - Nicolás Mena", 80, height -120);
  
//20 px de separación entre cada texto
  

// ----------------- paso 7: TEXTO INSTRUCCIONES
  
  
fill("#A3A3A3");
textSize(20);
textAlign(LEFT, BOTTOM);
textSize(12);
textFont('DM Sans');
  
text("Al mover el cursor horizontalmente se cambia el color y la separación entre franjas.", 80, height - 75);
  

// ----------------- paso 8: console log que muestra los datos
  
console.log('t:', t.toFixed(2), 'Separacion:', Math.round(separacion));
  
} //fin de la función draw