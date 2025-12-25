# Arte Algorítmico II

Una interpretación interactiva de la obra "Berlin Layout" de Max Bill, desarrollada con p5.js como parte del curso de Pensamiento Computacional y Programación.

## 🎨 Demo en Vivo

👉 **[Ver Demo](https://arte-algoritmico-ii.vercel.app/)**

## 📖 Descripción

Este proyecto es una recreación algorítmica e interactiva de la obra "Berlin Layout" de Max Bill. La pieza explora la intersección entre el arte concreto y la programación creativa, permitiendo al espectador interactuar con la composición a través del movimiento del cursor.

### Obra Original
- **Artista:** Max Bill
- **Obra:** Berlin Layout
- **Fuente:** [Alliance Graphique Internationale](https://a-g-i.org/design/berlin-layout)

## ✨ Características

### Interacciones
- **Transiciones de Color:** Al mover el cursor horizontalmente (eje X), los colores cambian gradualmente:
  - Rojo → Rosado
  - Amarillo → Verde
  - Azul → Morado
  
- **Separación Dinámica:** La posición del mouse en el eje X también controla la separación entre las franjas (64-90 píxeles)

- **Animación de Franjas:**
  - 🔴 Franjas rojas: se mueven hacia abajo
  - 🔵 Franjas azules: se mueven hacia arriba
  - 🟡 Franjas amarillas: permanecen estáticas

### Elementos Visuales
- Marco beige que contiene la composición
- Información del proyecto en la parte inferior
- Instrucciones de uso para el espectador
- Console log que muestra valores en tiempo real (t y separación)

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar p5.js desde CDN)

### Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/antomarinooo/arte-algoritmico-II.git
   cd arte-algoritmico-II
   ```

2. **Abrir el proyecto:**
   - Abrir `index.html` en tu navegador web
   - O usar un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     ```

3. **Interactuar:**
   - Mueve el cursor horizontalmente sobre el canvas
   - Observa cómo cambian los colores y la separación de las franjas
   - Abre la consola del navegador (F12) para ver los valores en tiempo real

## 🛠️ Tecnologías Utilizadas

- **[p5.js](https://p5js.org/)** (v1.11.10) - Biblioteca de JavaScript para programación creativa
- **HTML5** - Estructura del proyecto
- **CSS3** - Estilos básicos
- **JavaScript** - Lógica de interacción y animación
- **[Google Fonts - DM Sans](https://fonts.google.com/specimen/DM+Sans)** - Tipografía

## 📁 Estructura del Proyecto

```
arte-algoritmico-II/
├── index.html          # Página principal HTML
├── sketch.js           # Código p5.js con la lógica de la obra
├── style.css           # Estilos CSS
├── p5.js              # Biblioteca p5.js (local, opcional)
├── p5.sound.min.js    # Extensión de sonido p5.js (local, opcional)
└── README.md          # Este archivo
```

## 🎓 Detalles Técnicos

### Variables Principales

- **`misColores`**: Array bidimensional con pares de colores para las transiciones
  ```javascript
  [
    ["#ED3833", "#FF9CF5"], // rojo a rosado
    ["#F5A841", "#B9E157"], // amarillo a verde
    ["#40368F", "#8F4DFF"]  // azul a morado
  ]
  ```

- **`separacion`**: Control dinámico del espaciado entre franjas (64-90px)

### Funciones p5.js Clave

- **`lerpColor()`**: Interpolación de colores basada en la posición del mouse
- **`map()`**: Mapea valores del mouse a rangos utilizables
- **`constrain()`**: Limita la separación a valores mínimos y máximos
- **`beginShape()` / `endShape()`**: Dibujo de formas personalizadas (franjas)

### Configuración del Canvas

- **Dimensiones:** 660 × 900 píxeles
- **Color de fondo:** `#F5E5D7` (beige)
- **Sin bordes:** `noStroke()`

## 👤 Autor

**Antonia Cajigal Marino**
- Fecha de creación: 8 de octubre de 2025
- Curso: Pensamiento Computacional y Programación - Sección 7

### Docentes
- Matías Ferrari
- Nicolás Mena

## 📚 Referencias

- Bill, M. (s.f.). *Berlin Layout*. Alliance Graphique Internationale. https://a-g-i.org/design/berlin-layout
- The Coding Train. (s.f.). *p5.js tutorials*. https://thecodingtrain.com/
- p5.js Reference. (s.f.). https://p5js.org/reference/

## 📄 Licencia

Este proyecto es un trabajo académico desarrollado para el curso de Pensamiento Computacional y Programación.

## 🤝 Contribuciones

Este es un proyecto académico personal, pero si tienes sugerencias o encuentras algún problema, no dudes en abrir un issue.

---

<p align="center">
  Hecho con ❤️ y código por Antonia Cajigal Marino
</p>
