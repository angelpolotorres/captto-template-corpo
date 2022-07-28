# Header

El header es global y común para todas las páginas del site. <br>
Lo identificamos con el id "header"

```html
<header id="header"></header>
```

## -Logo

El logo es común a todas las páginas y va dentro del header.<br>
Aplicamos el id "logo" en una etiqueta img

```html
<img id="logo" />
```

## -Nombre marca

Si no tenemos logo podemos usar el nombre de la marca como logo.<br>
Aplicamos el id "site-name" en una etiqueta h1 o incluso un div

```html
<h1 id="site-name"></h1>
```

## -Nav

El nav suele ser común a todas las páginas.<br>
Lo identificamos con el id "menu-nav".<br>
No aplicar el id directamente sobre una etiqueta ul.<br>
Aplicar sobre una etiqueta nav que contenga el resto.

```html
<nav id="menu-nav"></nav>
```

---

## Main

El main es el contenedor donde va el cuerpo del site.<br>
Cambia su contenido en cáda página<br>
Aplicamos la etiqueta "main-content" sobre la etiqueta "main"<br>

```html
<main id="main-content"></main>
```

## Footer

El footer es global y común para todas las páginas del sitio.<br>
Aplicamos la etiqueta "footer" sobre la etiqueta "footer"<br>
No aplicar directamente sobre una etiqueta "ul"

```html
<footer id="footer"></footer>
```
