![Guardian Bank](/public/assets/white_logo_title.webp)

## Integrantes del grupo

- Gabriel Checchi.
- Camila Gonzalez.
- Jeremias Arrieta.

## Nuevos cambios en el Sprint 7

- Se migro gran parte del proyecto a Django.
- Se implemento una base de datos Sqlite3 con Django, junto con la autenticacion y registro de usuarios.
- Se movieron varios estilos "de unico uso" a Tailwind CSS.

## Nuevos cambios en el Sprint 6

- Se agrego la base de datos del ITBANK.

## Nuevos cambios en el Sprint 5

- Se agrego el paquete 'sprint5', el cual puede utilizarse ejecutando el comando 'python sprint5 .\sprint5\input.json' desde el root del proyecto. La ruta al archivo JSON puede cambiarse por la deseada.

## Nuevos cambios en el Sprint 4

- Se agrego el script de python listado_cheques.py para el filtrado de cheques bancarios.

## Nuevos cambios en el Sprint 3

- Se migro el proyecto a NextJS 13 (App Router).
- Se implemento provisionalmente Supabase como base de datos y para llevar a cabo la autenticación de usuarios.
- Se agregaron nuevas funcionalidades, como la transferencia entre cuentas del Guardian Bank, el pago de facturas y la revision de datos de tarjetas de credito, incluyendo la modificacion de sus limites. Tambien se implemento una pagina de consultas hacia el banco, pudiendo acceder a la misma desde el boton "Atencion al cliente" en el Header.
- Actualización del dinero disponible en una cuenta en tiempo real.
- Al crear un nuevo usuario, se le crearan automaticamente facturas y tarjetas ficticias a su nombre para que puedas probar las nuevas funcionalidades.
- Se llevaron a cabo optimizaciones para el SEO, como uso de etiquetas h1-h6 significativas, generacion de metadata unica para cada pagina y uso de URLs amigables, ademas de asegurar una buena accesibilidad web.
- Se llevaron a cabo optimizaciones para el rendimiento de la pagina, como la importacion dinamica de componentes, implementacion de paginas de carga, y la migracion de todo el codigo y procesamiento posible hacia el servidor, generando algunas paginas de forma estatica durante tiempo de compilación.

## Posibles cambios para futuros sprints

- Rediseñar el estilo de todas las paginas (excepto la de inicio de sesion y registro, la cual ya fue rediseñada).
- Migrar todos (o la gran mayoria) de estilos a Tailwind CSS.
- Implementar una lista de actividades recientes (pagos y transferencias).
- Implementar un boton para ver notificaciones recientes.
- Implementar el boton de "Recuerdame" para el inicio de sesion.
- Implementar la pagina de recuperacion de contraseña.
- Implementar mejores mensajes de error.
