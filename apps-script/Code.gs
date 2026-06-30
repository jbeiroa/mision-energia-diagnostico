const SPREADSHEET_ID = '13qGekNuRGa6BfZE-Jv_1RutLy29H4jmr38IZMZ_tK5o';
const SHEET_NAME = 'Respuestas';

const FIELDS = [
  'fecha',
  'curso',
  'equipo',
  'integrantes',
  'm1_seguro',
  'm1_suenan',
  'm1_no',
  'm1_metodo',
  'm1_conf',
  'm2_materia',
  'm2_energia',
  'm2_rep',
  'm2_relacion',
  'm3_situacion',
  'm3_sistema',
  'm3_intercambios',
  'm3_variables',
  'm3_pregunta',
  'm4_patron',
  'm4_grafico',
  'm4_conclusion',
  'm4_falta',
  'm5_verde',
  'm5_amarillo',
  'm5_rojo',
  'm5_pedido',
  'modelo_atomico',
  'reaccion_quimica',
  'reaccion_nuclear',
  'modelo_reacciones_duda'
];

function doGet() {
  return ContentService
    .createTextOutput('Mision Energia endpoint activo')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    appendResponse_(payload);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function parsePayload_(e) {
  if (e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }

  if (e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  throw new Error('No se recibio payload.');
}

function appendResponse_(payload) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const row = FIELDS.map((field) => {
    if (field === 'fecha') {
      return payload.fecha || new Date().toISOString();
    }
    return payload[field] || '';
  });

  sheet.appendRow(row);
}

function testAppendResponse() {
  appendResponse_({
    fecha: new Date().toISOString(),
    curso: 'TEST',
    equipo: 'Prueba',
    integrantes: 'Apps Script',
    m1_seguro: 'Fila de prueba'
  });
}
