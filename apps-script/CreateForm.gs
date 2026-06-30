const FORM_SPREADSHEET_ID = '13qGekNuRGa6BfZE-Jv_1RutLy29H4jmr38IZMZ_tK5o';

function createFallbackGoogleForm() {
  const form = FormApp.create('Mision Energia: diagnostico de Introduccion a la Fisica');

  form.setDescription(
    'Completen una respuesta por equipo. No lleva nota: sirve para reconstruir que vieron, que recuerdan y desde donde conviene retomar.'
  );
  form.setDestination(FormApp.DestinationType.SPREADSHEET, FORM_SPREADSHEET_ID);

  form.addTextItem().setTitle('Curso').setRequired(true);
  form.addTextItem().setTitle('Equipo').setRequired(true);
  form.addTextItem().setTitle('Integrantes').setRequired(true);

  form.addParagraphTextItem().setTitle('Temas que seguro vimos');
  form.addParagraphTextItem().setTitle('Temas que me suenan');
  form.addParagraphTextItem().setTitle('Temas que no vimos o no recuerdo');
  form.addParagraphTextItem().setTitle('Como trabajaban');
  form.addScaleItem()
    .setTitle('Confianza del equipo en este recuerdo')
    .setBounds(1, 5)
    .setLabels('Baja', 'Alta');

  form.addSectionHeaderItem().setTitle('Clasificador cientifico');
  form.addParagraphTextItem()
    .setTitle('Materia')
    .setHelpText('Tarjetas: atomo, molecula, electron, reaccion quimica, reaccion nuclear, calor, temperatura, energia electrica, potencia, circuito, radiacion, grafico, tabla, formula, conservacion.');
  form.addParagraphTextItem().setTitle('Energia');
  form.addParagraphTextItem().setTitle('Representar o medir');
  form.addParagraphTextItem().setTitle('Relacion explicada por el equipo');

  form.addSectionHeaderItem().setTitle('Caso cotidiano');
  form.addMultipleChoiceItem()
    .setTitle('Situacion elegida')
    .setChoiceValues([
      'Calentar agua para mate',
      'Usar una estufa electrica',
      'Cargar un celular',
      'Frenar una bicicleta',
      'Otra'
    ]);
  form.addParagraphTextItem().setTitle('Sistema observado');
  form.addParagraphTextItem().setTitle('Intercambios o transformaciones');
  form.addParagraphTextItem().setTitle('Variables importantes');
  form.addParagraphTextItem().setTitle('Una duda investigable');

  form.addSectionHeaderItem().setTitle('Mini datos');
  form.addParagraphTextItem()
    .setTitle('Que patron ven')
    .setHelpText('Se calentaron 200 ml de agua durante 6 minutos. Temperatura inicial: 20 °C. Temperaturas medidas: minuto 1: 31 °C, 2: 42 °C, 3: 53 °C, 4: 64 °C, 5: 75 °C, 6: 86 °C.');
  form.addParagraphTextItem().setTitle('Que grafico harian');
  form.addParagraphTextItem().setTitle('Conclusion posible');
  form.addParagraphTextItem().setTitle('Que falta saber');

  form.addSectionHeaderItem().setTitle('Modelo y reacciones');
  form.addParagraphTextItem()
    .setTitle('Modelo atomico que recuerdan')
    .setHelpText('Nucleo, electrones, protones, neutrones, niveles de energia, o lo que recuerden del modelo.');
  form.addParagraphTextItem()
    .setTitle('Reaccion quimica')
    .setHelpText('Que cambia, que se conserva y que pasa con los enlaces.');
  form.addParagraphTextItem()
    .setTitle('Reaccion nuclear')
    .setHelpText('Que cambia, que se conserva y que pasa con el nucleo.');
  form.addParagraphTextItem().setTitle('Duda o ejemplo sobre modelo y reacciones');

  form.addSectionHeaderItem().setTitle('Semaforo final');
  form.addParagraphTextItem().setTitle('Verde: puedo explicar');
  form.addParagraphTextItem().setTitle('Amarillo: necesito repasar');
  form.addParagraphTextItem().setTitle('Rojo: estoy perdido/a');
  form.addParagraphTextItem().setTitle('Pedido al profe');

  Logger.log('Formulario para responder: ' + form.getPublishedUrl());
  Logger.log('Formulario para editar: ' + form.getEditUrl());

  return {
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl()
  };
}
