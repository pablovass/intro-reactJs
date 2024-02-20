# ejemplo de como hacer este ejercicio
Primero, asegúrate de tener Node.js instalado en tu sistema. Luego, sigue estos pasos:

1. Crea un nuevo directorio para tu proyecto y entra en él:
```
mkdir react-example
cd react-example
```

2. Inicializa un nuevo proyecto de Node.js:
```
npm init -y
```

3. Instala las dependencias necesarias:
```
npm install react react-dom babelify babel-preset-react browserify --save-dev
```

4. Crea un archivo llamado `index.html` para tu aplicación:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Example</title>
</head>
<body>
    <div id="root"></div>
    <script src="bundle.js"></script>
</body>
</html>
```

5. Crea un archivo llamado `app.js` donde escribirás tu código de React:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

6. Ahora, necesitas configurar Babel para que compile el código JSX en JavaScript válido. Crea un archivo llamado `.babelrc` en la raíz del proyecto y añade lo siguiente:
```json
{
  "presets": ["@babel/preset-react"]
}
```

7. Finalmente, crea un archivo `bundle.js` que contendrá tu aplicación React compilada. Ejecuta el siguiente comando en tu terminal:
```
npx browserify -t babelify app.js -o bundle.js
```

8. Abre `index.html` en tu navegador y deberías ver tu aplicación React funcionando correctamente.

¡Y eso es todo! Ahora tienes un proyecto React básico configurado con Babel y Browserify.