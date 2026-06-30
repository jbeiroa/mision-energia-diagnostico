# Mision Energia

Actividad diagnostica para Introduccion a la Fisica.

## Pagina

Abrir `index.html` o `diagnostico_intro_fisica.html`.

## Entrega con Google Sheets + Apps Script

La hoja receptora es:

https://docs.google.com/spreadsheets/d/13qGekNuRGa6BfZE-Jv_1RutLy29H4jmr38IZMZ_tK5o/edit

Pasos:

1. Abrir la hoja.
2. Ir a `Extensiones` -> `Apps Script`.
3. Pegar el contenido de `apps-script/Code.gs`.
4. Guardar.
5. Ejecutar una vez `testAppendResponse` y autorizar permisos.
6. Ir a `Implementar` -> `Nueva implementacion`.
7. Tipo: `Aplicacion web`.
8. Ejecutar como: `Yo`.
9. Quien tiene acceso: `Cualquier persona`.
10. Copiar la URL de la aplicacion web.
11. Pegar esa URL en `diagnostico_intro_fisica.html`, en la constante `SUBMIT_URL`.

Cuando `SUBMIT_URL` tiene una URL, el boton `Enviar respuestas` queda activo.

Si se modifica `apps-script/Code.gs`, actualizar el codigo en Apps Script y crear una nueva version de la implementacion web. La pagina puede mandar campos nuevos, pero la Sheet solo los recibe si el Web App publicado usa el `Code.gs` actualizado.

Para verificar el despliegue, abrir la URL `/exec` en el navegador. Si esta bien publicada debe mostrar:

`Mision Energia endpoint activo`

Si aparece una pantalla de Google Drive con "No se pudo abrir el archivo", revisar la implementacion:

- Tipo: `Aplicacion web`.
- Ejecutar como: `Yo`.
- Quien tiene acceso: `Cualquier persona`.
- Usar la URL que termina en `/exec`, no el ID de implementacion.

## Google Forms

Opcion automatica:

1. En Apps Script, crear un archivo `CreateForm.gs`.
2. Pegar el contenido de `apps-script/CreateForm.gs`.
3. Ejecutar `createFallbackGoogleForm`.
4. Autorizar permisos.
5. Abrir `Ver` -> `Registros` para copiar la URL publica y la URL de edicion del Form.

Opcion manual:

El archivo `google-form-preguntas.md` contiene la estructura completa del formulario alternativo.
