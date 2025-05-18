# Guía para Despliegue en Netlify

Este documento explica cómo desplegar el sitio web de materiales de Termodinámica I2 en Netlify.

## Prerequisitos

1. Tener una cuenta en [Netlify](https://www.netlify.com/)
2. Tener el repositorio disponible en GitHub, GitLab o Bitbucket (opcional pero recomendado)

## Opción 1: Despliegue mediante repositorio Git

### Paso 1: Subir el código a un repositorio
1. Crea un repositorio en GitHub, GitLab o Bitbucket
2. Sube todos los archivos a ese repositorio:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [URL_DEL_REPOSITORIO]
   git push -u origin main
   ```

### Paso 2: Conectar con Netlify
1. Inicia sesión en tu cuenta de Netlify
2. Haz clic en "New site from Git"
3. Selecciona el proveedor de Git donde tienes tu repositorio
4. Autoriza a Netlify para acceder a tus repositorios
5. Selecciona el repositorio con los archivos del sitio web

### Paso 3: Configurar el despliegue
1. Deja el campo "Build command" vacío, ya que no necesitamos compilar nada
2. En "Publish directory", escribe simplemente "/"
3. Haz clic en "Deploy site"

## Opción 2: Despliegue mediante arrastrar y soltar (Drag & Drop)

### Paso 1: Preparar archivos
1. Asegúrate de tener todos los archivos necesarios en tu carpeta I2

### Paso 2: Subir a Netlify
1. Inicia sesión en tu cuenta de Netlify
2. Ve al panel de control (dashboard)
3. Arrastra y suelta la carpeta I2 completa en el área designada "Drag and drop your site folder here"
4. Espera a que se complete la carga y el procesamiento

## Paso 3: Configurar el dominio personalizado (opcional)

1. Una vez desplegado el sitio, Netlify te asignará un subdominio aleatorio (ejemplo: elegant-curie-123456.netlify.app)
2. Para cambiarlo, ve a "Site settings" > "Domain management"
3. Haz clic en "Options" junto al dominio de Netlify
4. Selecciona "Edit site name" y elige un nombre personalizado (ejemplo: termo-i2.netlify.app)

## Verificación y mantenimiento

### Verificar el despliegue
1. Accede a la URL proporcionada por Netlify
2. Navega por el sitio y asegúrate de que todos los contenidos se muestran correctamente
3. Verifica que las fórmulas matemáticas se renderizen adecuadamente
4. Comprueba que los enlaces internos funcionen correctamente

### Actualizar el sitio
- **Si usaste la opción Git**: Simplemente haz push de tus cambios al repositorio. Netlify detectará automáticamente los cambios y actualizará el sitio.
- **Si usaste la opción Drag & Drop**: Deberás volver a subir todos los archivos cada vez que hagas cambios.

## Resolución de problemas comunes

### Las fórmulas matemáticas no se muestran correctamente
- Verifica que las referencias a KaTeX estén correctamente incluidas en el archivo HTML
- Asegúrate de que las fórmulas en los archivos Markdown usen la sintaxis correcta: `$formula$` o `$$formula$$`

### Los enlaces entre archivos no funcionan
- Asegúrate de que las rutas sean relativas y correctas
- Verifica que los archivos referenciados existan en las ubicaciones correctas

### Problemas con el archivo de configuración de Netlify
- Verifica que el archivo `netlify.toml` esté en la raíz del proyecto
- Comprueba que la configuración de redireccionamiento esté correcta
