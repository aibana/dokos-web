# Dokos — Tu Centro de Documentos Inteligente

### La app de escritorio que transforma la forma en que lees, editas y gestionas tus archivos.

---

## El problema

Cada dia trabajas con **decenas de archivos distintos**: Markdown, JSON, YAML, PDFs, notebooks, logs, APIs... y terminas saltando entre 5 herramientas diferentes para poder verlos. Perdiendo tiempo, perdiendo contexto, perdiendo foco.

**Dokos lo resuelve todo desde un solo lugar.**

---

## Que es Dokos?

Dokos es una **aplicacion de escritorio nativa** (Windows, Mac, Linux) disenada para profesionales que trabajan con documentacion tecnica, codigo y archivos de configuracion. Combina la potencia de un editor profesional con la simplicidad de un visor universal.

> Una sola app. Todos tus archivos. Sin friccion.

---

## Por que elegir Dokos?

### 1. Soporte para +18 formatos de archivo

No importa que formato uses, Dokos lo entiende:

| Documentos | Datos & Config | Codigo & Tecnico |
|---|---|---|
| Markdown (.md) | JSON | 15+ lenguajes de programacion |
| PDF | YAML | Jupyter Notebooks (.ipynb) |
| EPUB (e-books) | TOML | Archivos de log |
| HTML | INI / .cfg / .conf | OpenAPI / Swagger |
| Texto plano | CSV / TSV | SVG (vectores) |
| | | Imagenes (PNG, JPG, GIF, WebP...) |

**Cada formato tiene su visor especializado**, no es un simple editor de texto que muestra todo igual.

---

### 2. Markdown de primer nivel

Dokos fue construido con Markdown en el corazon:

- **GitHub Flavored Markdown** completo: tablas, listas de tareas, tachado, autolinks
- **Formulas matematicas** con LaTeX ($inline$ y $$bloques$$)
- **Diagramas Mermaid** interactivos con zoom, pan y pantalla completa
- **Alertas estilo GitHub** (info, warning, danger, note)
- **Resaltado de sintaxis** en bloques de codigo
- **Tabla de contenidos** auto-generada con profundidad configurable
- **Emojis**, abreviaturas, listas de definiciones y HTML embebido
- **3 modos de edicion**: solo texto, vista previa, o split (editor + preview en tiempo real)

---

### 3. Editor profesional integrado

Basado en **Monaco Editor** (el mismo motor de VS Code):

- Barra de formato con atajos para encabezados, negrita, cursiva, listas, codigo y mas
- Atajos de teclado: `Ctrl+B` (negrita), `Ctrl+I` (cursiva), `Ctrl+S` (guardar), `Ctrl+E` (editar)
- **Autoguardado inteligente**: por tiempo, al cambiar de pestana o desactivado
- Indicador de cambios sin guardar con confirmacion antes de cerrar
- Numeros de linea, minimap, guias de indentacion, pares de llaves
- Estilos de cursor personalizables, ligaduras tipograficas, renderizado de espacios en blanco

---

### 4. Visores especializados que marcan la diferencia

Cada tipo de archivo tiene su visor optimizado:

- **JSON / YAML / TOML**: 3 modos de vista — Arbol colapsable, Grafo interactivo y Raw
- **CSV**: Tabla con encabezados fijos, columnas ordenables y filtros
- **PDF**: Navegacion por paginas, zoom con Ctrl+Scroll, atajos de teclado
- **EPUB**: Navegacion por capitulos, tabla de contenidos lateral, control de tamano de fuente
- **Jupyter Notebooks**: Celdas de codigo con resaltado, outputs renderizados, soporte de imagenes
- **Logs**: Colores por nivel (Error, Warn, Info, Debug), filtrado por severidad, auto-scroll
- **SVG**: Preview con zoom/pan, fondos intercambiables (cuadricula, claro, oscuro), visor a pantalla completa
- **HTML**: Preview en vivo, vista de codigo, modo split
- **OpenAPI/Swagger**: Vista de API tipo Swagger UI con endpoints, parametros, schemas y ejemplos auto-generados

---

### 5. Gestion de proyectos y pestanas

Trabaja con multiples archivos como un profesional:

- **Sistema de pestanas** completo: abrir, cerrar, reordenar, fijar, reabrir las ultimas 20 cerradas
- **Menu contextual** en pestanas: cerrar otras, cerrar a la izquierda/derecha, copiar ruta, revelar en explorador
- **Historial de proyectos** con favoritos, acceso rapido y filtro por tipo de archivo
- **Sesiones persistentes**: al volver a un proyecto, se restauran tus pestanas, archivo activo y carpetas expandidas
- **Comparacion de archivos (Diff)**: selecciona 2 archivos y comparalos lado a lado
- **Busqueda global** (`Ctrl+Shift+F`): busca en todo el proyecto con soporte de regex, filtros por extension y carpeta

---

### 6. Personalizacion total

Haz que Dokos se sienta tuyo:

**8 temas incluidos:**
- 5 temas oscuros: GitHub Dark, Atom Dark, Solarized Dark, Monokai, Dracula
- 3 temas claros: GitHub Light, Atom Light, Solarized Light
- Modo oscuro: automatico (sigue al sistema), forzar claro o forzar oscuro

**Personalizacion granular:**
- Tema del documento, del codigo y de los diagramas por separado
- Colores de iconos personalizables por categoria de archivo
- Campo de CSS personalizado para ajustes avanzados

**Tipografia:**
- Fuente de interfaz, de documento y monoespaciada configurables por separado
- Tamano de fuente, alto de linea, espaciado de parrafos
- Ancho maximo del documento (sm, md, lg, xl, completo)
- Zoom del documento (80% - 150%)
- Padding configurable (compacto, normal, amplio)

**Exporta e importa tu configuracion** como JSON para usarla en multiples equipos.

---

### 7. Disponible en 9 idiomas

Dokos habla tu idioma:

| | | |
|---|---|---|
| Espanol | English | Portugues |
| Deutsch | Francais | Hindi |
| Japones | Ruso | Chino |

Toda la interfaz traducida: menus, configuracion, mensajes y visores.

---

### 8. Rendimiento y experiencia nativa

- **App nativa** construida con Tauri 2 (Rust): arranca en segundos, consume minima memoria
- **No es una app web empaquetada** — usa el motor nativo del sistema operativo
- **Observador de archivos en tiempo real**: si editas un archivo externamente, Dokos se actualiza automaticamente
- **Soporte multi-ventana**: abre varios proyectos en ventanas independientes
- **Barra de titulo personalizada** con controles de ventana integrados

---

## Quien deberia usar Dokos?

| Perfil | Caso de uso |
|---|---|
| **Desarrolladores** | Revisar documentacion, APIs, configs y logs en un solo lugar |
| **Technical Writers** | Escribir y previsualizar Markdown con formato profesional |
| **DevOps / SREs** | Inspeccionar YAML, TOML, logs y archivos de configuracion |
| **Data Scientists** | Visualizar Jupyter Notebooks, CSVs y JSONs |
| **API Developers** | Explorar especificaciones OpenAPI/Swagger sin levantar un servidor |
| **Estudiantes** | Tomar notas en Markdown con formulas LaTeX y diagramas |
| **Equipos de QA** | Analizar logs, comparar archivos y revisar respuestas de API |
| **Cualquier profesional** | Que trabaje con multiples formatos de archivo a diario |

---

## Funcionalidades clave de un vistazo

- 18+ formatos de archivo soportados
- Editor basado en Monaco (motor de VS Code)
- Markdown con LaTeX, Mermaid, GFM y 10+ plugins
- Visores especializados por tipo de archivo
- Sistema de pestanas con sesiones persistentes
- Busqueda global con regex
- Comparacion de archivos (Diff)
- 8 temas incluidos + personalizacion completa
- 9 idiomas
- Gestion de proyectos con favoritos e historial
- Autoguardado inteligente
- Arbol de archivos con menu contextual completo
- Tabla de contenidos auto-generada
- Exportar/importar configuracion
- App nativa, rapida y liviana
- Multi-ventana

---

## Lo que viene

- **Chat con IA integrado** — consulta tus documentos directamente desde Dokos
- Mas formatos de archivo
- Plugins y extensiones
- Colaboracion en tiempo real

---

## Resumen

**Dokos no es solo un visor de Markdown.** Es tu centro de documentos completo: lee, edita, busca, compara y organiza todos tus archivos tecnicos desde una sola aplicacion nativa, rapida y hermosa.

> Deja de saltar entre herramientas. Abre Dokos.

---

*Dokos — Lee todo. Desde un solo lugar.*
