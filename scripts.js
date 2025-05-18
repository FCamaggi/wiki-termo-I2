// Scripts para el sitio de Termodinámica I2
document.addEventListener('DOMContentLoaded', () => {
    // Tema inicial
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

    // Cambio de tema
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Configuración de marked para código y fórmulas matemáticas
    marked.setOptions({
        highlight: function (code, lang) {
            return code;
        },
        breaks: true,
        gfm: true
    });

    // Función para cargar y renderizar markdown
    async function loadMarkdown(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error('No se pudo cargar el archivo');

            const markdown = await response.text();
            const content = document.getElementById('markdown-content');
            content.innerHTML = marked.parse(markdown);

            // Procesar fórmulas matemáticas con KaTeX
            renderMathInElement(content, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ],
                throwOnError: false
            });

            // Ajustes post-renderizado
            highlightCurrentNavItem(path);
            processCodeBlocks();
            updateDocumentTitle();
            processLinks();
        } catch (error) {
            console.error('Error al cargar el markdown:', error);
            document.getElementById('markdown-content').innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <h2>Error al cargar el contenido</h2>
                    <p>No se pudo cargar el archivo: ${path}</p>
                    <p>Por favor, intente nuevamente o contacte al administrador.</p>
                </div>
            `;
        }
    }

    // Resaltar elemento actual en la navegación
    function highlightCurrentNavItem(path) {
        const navItems = document.querySelectorAll('.nav-content a');
        navItems.forEach(item => {
            if (item.getAttribute('data-md') === path) {
                item.style.fontWeight = 'bold';
                item.style.color = 'var(--accent-color)';
            } else {
                item.style.fontWeight = 'normal';
                item.style.color = 'var(--text-primary)';
            }
        });
    }

    // Procesar bloques de código para mejorar visualización
    function processCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            // Detectar si es un diagrama ASCII
            if (block.textContent.includes('┌') || block.textContent.includes('┐') ||
                block.textContent.includes('└') || block.textContent.includes('┘') ||
                block.textContent.includes('│')) {
                block.parentElement.classList.add('ascii-diagram');
            }
        });
    }

    // Actualizar título del documento basado en el contenido
    function updateDocumentTitle() {
        const h1 = document.querySelector('#markdown-content h1');
        if (h1) {
            document.title = `${h1.textContent} - Termodinámica I2`;
        } else {
            document.title = 'Termodinámica I2 - Documentación';
        }
    }

    // Procesar enlaces internos para navegación
    function processLinks() {
        const links = document.querySelectorAll('#markdown-content a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.md')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadMarkdown(href);
                    // Actualizar URL sin recargar
                    history.pushState(null, '', '#' + href);
                });
            }
        });
    }

    // Manejar navegación con los enlaces del menú
    document.querySelectorAll('.nav-content a[data-md]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const path = item.getAttribute('data-md');
            loadMarkdown(path);
            // Actualizar URL sin recargar
            history.pushState(null, '', '#' + path);
        });
    });

    // Cargar contenido inicial
    let initialPath = 'resumenes/Indice.md';

    // Verificar si hay un hash en la URL
    if (window.location.hash) {
        const path = window.location.hash.substring(1);
        if (path.endsWith('.md')) {
            initialPath = path;
        }
    }

    loadMarkdown(initialPath);

    // Manejar navegación con los botones adelante/atrás
    window.addEventListener('popstate', () => {
        let path = 'resumenes/Indice.md';
        if (window.location.hash) {
            path = window.location.hash.substring(1);
        }
        loadMarkdown(path);
    });
});
