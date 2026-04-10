# Plan de desarrollo — Nueva landing LASA Papelera

## 1. Objetivo de desarrollo
Construir una nueva landing para LASA Papelera que represente mejor a la empresa, mejore la claridad comercial y sirva como base sólida para futuras mejoras.

El objetivo inicial no es hacer una web compleja, sino una primera versión sólida, clara, prolija y funcional.

---

## 2. Enfoque general
El proyecto se va a desarrollar por etapas:

1. Definición del brief
2. Redacción de contenidos base
3. Definición del criterio visual
4. Maquetado de la landing
5. Ajustes visuales y responsive
6. Revisión final
7. Publicación

---

## 3. Criterio de construcción
La nueva landing debe priorizar:

- claridad
- jerarquía visual
- marca fuerte
- textos concretos
- imágenes reales
- contacto comercial simple
- buena experiencia en desktop y mobile

No se debe sobrecargar con funcionalidades innecesarias.

---

## 4. Alcance de la primera versión
La primera versión del sitio debe incluir:

- Hero principal
- Sección historia / quiénes somos
- Sección qué hacemos
- Sección líneas de productos
- Sección por qué elegir LASA
- Sección planta / capacidad / imágenes reales
- Sección contacto
- Footer institucional

---

## 5. MVP del proyecto
El MVP debe resolver correctamente estas necesidades mínimas:

- presentar la marca LASA Papelera
- explicar qué hace la empresa
- mostrar trayectoria y confianza
- ordenar las líneas de producto
- ofrecer contacto rápido por WhatsApp
- verse bien en notebook y celular

---

## 6. Stack sugerido
### Opción elegida para el proyecto
Usar **HTML + CSS + JavaScript** para la primera versión.

### Motivo
Para una landing institucional/comercial, esta opción permite:
- avanzar más rápido
- entender mejor la estructura del sitio
- controlar bien el diseño
- evitar complejidad innecesaria al inicio

### Posible evolución futura
Más adelante, si el proyecto crece, se puede migrar a:
- Vite + React
- o integrar un backend / panel / catálogo más dinámico

---

## 7. Estructura sugerida dentro de `05-web`
Crear esta base:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
  - `img/`
  - `icons/`

---

## 8. Etapas de trabajo técnico

### Etapa 1 — Estructura base
Crear el HTML general con las secciones principales:
- header
- hero
- historia
- qué hacemos
- productos
- por qué elegir LASA
- planta/capacidad
- contacto
- footer

### Etapa 2 — Estilos base
Definir:
- variables CSS
- paleta
- tipografías
- espaciados
- contenedores
- botones
- grilla responsive

### Etapa 3 — Maquetado por secciones
Diseñar cada sección de forma ordenada:
1. Hero
2. Historia
3. Qué hacemos
4. Productos
5. Diferenciales
6. Planta e imágenes
7. Contacto
8. Footer

### Etapa 4 — Responsive
Ajustar:
- menú
- tamaños de texto
- espaciados
- imágenes
- CTAs
- disposición de columnas

### Etapa 5 — Ajustes finales
Revisar:
- consistencia visual
- contraste
- legibilidad
- orden de lectura
- botones
- accesibilidad básica

---

## 9. Criterios visuales de desarrollo
Durante el desarrollo se debe respetar:

- una composición fuerte en el hero
- marca protagonista
- pocas cosas por sección
- fotos reales como ancla visual
- nada de bloques innecesarios
- nada de tarjetas porque sí
- nada de sobrecarga visual
- una dirección estética sobria, industrial y confiable

---

## 10. Criterios técnicos mínimos
La landing debe cumplir con lo siguiente:

- cargar correctamente en navegador de escritorio
- adaptarse bien a celular
- tener HTML ordenado y semántico
- usar clases claras
- mantener CSS prolijo y reutilizable
- evitar código innecesario
- mantener el proyecto simple y entendible

---

## 11. Contenido a preparar antes del maquetado final
Antes de cerrar la versión visual final, conviene tener definidos:

- logo en buena calidad
- fotos reales seleccionadas
- listado final de categorías de productos
- número de WhatsApp a usar
- datos completos de contacto
- dirección final
- posibles redes sociales a mostrar o no

---

## 12. Orden práctico de trabajo
### Paso 1
Armar estructura HTML base

### Paso 2
Aplicar estilos globales

### Paso 3
Construir hero principal

### Paso 4
Construir secciones internas

### Paso 5
Construir contacto y footer

### Paso 6
Ajustar responsive

### Paso 7
Revisar y corregir

---

## 13. Objetivo de esta primera versión
La primera versión debe dejar una landing:
- clara
- profesional
- ordenada
- coherente con la empresa
- lista para mostrar, ajustar y evolucionar

No hace falta hacer “todo”.  
Hace falta hacer bien la base.

---

## 14. Próximo paso
Luego de este plan, el siguiente paso es crear en `05-web` la estructura inicial del proyecto:

- `index.html`
- `styles.css`
- `script.js`
- carpeta `assets/img`

Y comenzar por el hero + estructura general de secciones.
