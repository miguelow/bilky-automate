# No más bilky

Esto es una primera versión, se acepta feedback

## Instal el proyecto

1. Tener instalado node
2. Ejecutar

```bash
npm i
```

## Configuración

1. Abre el archivo `cypress/e2e/bilky.cy.js`
2. Localiza las siguientes líneas:
```js
const DNI = '12345678A'    // Reemplaza con tu DNI
const PASSWORD = 'tu_contraseña'  // Reemplaza con tu contraseña
```
3. Reemplaza con tus valores

## Ejecución

Hay 2 formas de ejecutar el test, de manera visual o por consola

### Modo visual: 
```bash
npx cypress open
```
1. Se abrirá la interfaz de Cypress
2. Selecciona "E2E Testing"
3. Elige tu navegador preferido
4. Haz click en bilky.cy.js

### Modo headless: 
```bash
npx cypress run --spec "cypress/e2e/bilky.cy.js"
```