# Requerimientos

La aplicacion de e-commerce va a contar con los siguientes requerimientos:

## Usuarios no autenticados.
Un Visitante anónimo debería poder navegar tu e-commerce, 
ver y buscar productos.


Como invitado puedo ver.

- PRODUCTOS:
    - Ver la lista completa de productos (catálogo), para ver todo lo disponible para
      comprar.
    - Refinar el listado por categorías, para poder ver los items en los que estoy
      interesado.
    - Buscar productos, para poder encontrar rápido los productos que quiero comprar.
    - Ver los detalles de un producto individual (incluida las fotos, descripciones,
      reviews, etc...), asi puede determinar.
  

- CARRITO:
    - Poder agregar items a mi carrito de compras desde el listado o desde a página
      de detalles de un producto, para poder comprarlos despues.
    - Sacar items de mi carrito, en caso que decida no quererlos.
    - Editar cantidades de los items de mi carrito, en caso que quiera mas o menos
      cantidad de un item en particular.
    - Refrescar la página, o irme y volver, y todavía tener mi carrito de compras (sin
      haberme creado una cuenta). (Podés usar sessionStorage, localStorage,
      cookies, o JWT).
    - Poder crearme una cuenta, loguearme y seguir editando ese mismo carrito, asi
      no pierdo los items seleccionados.


- CHECKOUT:
    - Poder comprar todos los items de un mi carrito.
    - Especificar una dirección de envio y un email cuando hago el checkout, asi me
      envien la compra a lugar que dije.
    - Recibir un email de confirmación que hice la compra.
    - Recibir un email de notificación cuando la orden fue despachada.


- GESTION DE CUENTA:
    - Poder crear una cuenta, asi puede hacer otras cosas como dejar un review.
    - Poder logearme usando Google o Github, para no tener que acordarme de un
      password nuevo.
  

## Usuario autenticados

Los usuarios que hayan creado su cuenta, podrán hacer todo lo que puede hacer un usuario
guest y además:


Como un Usuario Autenticado yo quiero...

- GESTION DE CUENTA:
    - Poder desloguearme, asi nadie más pueda usar mi sesión.
    - Ver el historial de ordenes previas, asi puede reever las ordenes que hice en el
      pasado.
    - Ver los detalles de una orden que hice en el pasado, incluyendo:
        - Los items comprados, con sus cantidades.
        - Links a la página del producto comprado.
        - Fecha y hora de la compra.
- REVIEWS:
    - Poder dejar reviews a los productos, que incluyan texto y un sistema de cinco
      estrellas.


## Admin

Los usuarios administradores pueden manejar el sitio, los productos que se listan y los items
que están disponibles.

Como un administrador yo quiero...

- GESTION DE PRODUCTOS:
    - Poder crear y editar productos, con nombre, descripción, precio y uno o más
      fotos, tal que los visitantes puedan ver la última información de lo que se vende.
    - Poder crear categorías, para que los usuarios puedan filtrar los items.
    - Poder agregar o sacar categorías de los items (los items deben poder aceptar
      múltiples categorías).
    - Gestionar la disponibilidad de un item. (un item que no esta disponible, no
      deberá estar listado en la página, pero su detalle debe seguir siendo accesible
      desde el historial de compras o con su URL, pero debe mencionar que el item no
      está disponible).
- GESTION DE ORDENES:
    - Poder ver una lista de todas las ordenes, para poder ver y revisar las ordener.
    - Poder filtrar as ordenes por su estado (creada, procesando, cancelada,
      completa).
    - Ver los detalles de una orden específica, asi puedo revisarla y actualizar su
      estado.
    - Poder cambiar el estado de una orden (creada => procesando, procesando =>
      cancelada || completa).
- GESTION DE USUARIOS:
    - Poder hacer que un usuario se convierta en admin.
    - Borrar a un usuario, asi no puedan logearse más.
    - Forzar una password reset para un usuario.


## Validación de Datos

Cuando crees los modelos, debes considerar los tipos de datos que vas a recibir, qué cosas van
a ser requeridas y cómo vas a devolver los errores a los usuarios.
Algunas constrains qué deberás implementar:

- Productos:
    - Deben tener titulo, descripcion, precio, cantidad
    - Deben pertenecer a por lo menos una categoría.
    - Deben tener una foto, si no tienen una foto, deben tener un placeholder de foto
      por defecto.
- Usuarios:
    - Deben tener una dirección de mail válida.
    - Su email debe ser único.
- Ordenes:
  - Una orden debe pertenecer a un usuario o a un guest (autenticado vs no
    autenticado).
  - Las ordenes deben tener línea de orden que contiene el precio, productId, y cantidad.
  - Si un usuario completa una orden, esa orden debe mantener el precio del item al
    momento de la compra, sin importar que el precio del producto cambie después.
- Reviews:
  - Todas las reviews deben pertenecer a un producto.
  - Todas las reviews deben pertenecer a un usuario.
  - Todas las reviews deben tener por lo menos x caractéres.

Este proyecto tiene muchas tareas para realizar, asi que es fácil sentirse abrumado. Estas son
las features que esperamos que muestres en cada demo:

- Demo 1:
  - Catálogo de productos
  - Los usuarios pueden ver los productos y filtrar por categoría.
  - Los administradores pueden editar y agregar productos
- Demo 2:
  - Los usuarios pueden buscar productos en el catálogo.
  - El catálogo está paginado.
  - Los usuarios tienen un carrito al que pueden agregar productos.
- Demo 3:
  - Los usuarios pueden ver su historial de compras.
  - Los usuarios tienen su carrito en cualquier device al que se logueen.
- Demo Final:
  - Los usuarios pueden hacer el checkout.
  - Los admins pueden ver las ordenes pendientes.
  - Los usuarios reciben mails de notificaciones.
        