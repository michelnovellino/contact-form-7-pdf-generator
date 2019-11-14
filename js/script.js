/*

<div class="column one-second"style="display:none">[text* day1]</div>
<div class="column one-second"style="display:none" >[text* month]</div>
<div class="column one-second"style="display:none">[text* year2]</div>
  document.getElementsByName('day1').value = dates.day
  document.getElementsByName('month').value = dates.month
  document.getElementsByName('year2').value = dates.year
*/

if (
  window.location.pathname == "/servicios-de-asesoria/" ||
  window.location.pathname == "/alta-agencia-tributaria/"
) {
  moment.locale("es");
  var check = moment();
  var day = check.format("D");
  var month = check.format("MMMM");
  var year = check.format("YYYY");

  var dates = {
    month: month,
    day: day,
    year: year
  };

  document.addEventListener(
    "wpcf7submit",
    async function(event) {
      var inputs = event.detail.inputs;
      var dd;
      console.log(event.detail.status);
      console.log("inputs >>>>", inputs);
      if (window.location.pathname == "/servicios-de-asesoria/") {
        // playground requires you to assign document definition to a variable called dd

        dd = {
          content: [
            {
              style: "tableExample",
              table: {
                body: [
                  [
                    {
                      text: `Ref. AP${inputs[1].value}PA`,
                      margin: [10, 5, 100, 5],
                      bold: true
                    }
                  ]
                ]
              }
            },
            {
              columns: [
                { width: "*", text: "" },
                {
                  width: "auto",
                  table: {
                    body: [
                      [
                        {
                          text: `CONTRATO DE SERVICIOS DE 
                                           ASESORÍA`,
                          alignment: "center",
                          fontSize: 14,
                          bold: true
                        }
                      ]
                    ]
                  }
                }
              ]
            },
            {
              image:
                "data:image/png;base64,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",
              width: 200,
              height: 60
            },
            { text: "\n\n" },
            { text: "INTERVIENEN \n\n", bold: true, alignment: "center" },

            {
              fontSize: 11,
              text: `De una parte, la entidad mercantil VARGASRUIZABOGADOS S.L.P.U, con C.I.F. B56034168, inscrita en el Registro Mercantil de Córdoba 14022 Tomo 2484 Folio 91 Hoja CO36159 con domicilio fiscal en Calle Isla de Malaita núm. 3 5.º C 28035 de Madrid a efecto de notificaciones, en adelante EMPRESA. \n\n`
            },
            {
              fontSize: 11,
              text: [
                "Y de otra, ",
                { text: `DON ${inputs[0].value},`, bold: true },
                { text: " con N.I.F", bold: true },
                { text: ` ${inputs[1].value}`, bold: true },
                " a efecto de notificaciones en ",
                { text: "C", bold: true },
                { text: `/${inputs[2].value}`, bold: true },
                { text: " CP ", bold: true },
                { text: `${inputs[3].value}`, bold: true },
                { text: " de " },
                { text: ` ${inputs[4].value}   `, bold: true },
                { text: "Telf. " },
                { text: ` ${inputs[5].value}   `, bold: true },
                { text: "Email " },
                { text: ` ${inputs[6].value}  `, bold: true },
                { text: "En adelante CLIENTE. \n\n" }
              ]
            },
            {
              text:
                "Que ambas partes se reconocen capacidad legal y manifiestan,"
            },
            { text: "\n\n" },
            {
              text:
                "I.-Que la EMPRESA está especializada, entre otros, en la prestación de servicios de asesoría fiscal, laboral y contable, y servicios complementarios exclusivamente por medios telemáticos."
            },

            { text: "\n" },
            {
              text: [
                "II.-Que el CLIENTE está interesado en recibir de la EMPRESA, la prestación del servicio de asesoría, FISCAL, LABORAL Y CONTABLE que sean preceptivas, tal y como se define en el presente documento. Que el CLIENTE manifiesta con la presente que",
                {
                  text:
                    " cumple con todos los requisitos legales para ejercer la profesión de abogado o procurador.",
                  bold: true
                }
              ]
            },
            {
              text:
                "\nIII.-Que ambas partes han acordado celebrar el presente contrato de prestación de los servicios de acuerdo con las siguientes."
            },
            { text: "\n ESTIPULACIONES\n\n", alignment: "center", bold: true },
            {
              text: [
                { text: "Primera.- ", bold: true },
                "OBJETO DEL CONTRATO: Que el CLIENTE contrata los servicios de la EMPRESA para el asesoramiento laboral, contable y fiscal por medios telemáticos ON LINE.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Segunda.- ", bold: true },
                "PRECIO: El CLIENTE abonará por dichos servicios de asesoramiento la cantidad mensual preceptiva según tabla de Anexo I.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Tercera.‐ ", bold: true },
                "FORMA DE PAGO: El precio fijado se abonará por el CLIENTE a la EMPRESA mensualmente, mediante recibo domiciliado en la cuenta corriente que a tal efecto designe el CLIENTE en el aplicativo, a cuyo efecto la EMPRESA emitirá las correspondientes facturas.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Cuarta.‐ ", bold: true },
                "DOCUMENTACIÓN E INFORMACIÓN: la EMPRESA realizará su trabajo en sus instalaciones siendo obligación del CLIENTE la recepción y envío de la documentación preceptiva en formato PDF por los medios telemáticos que la EMPRESA pone a disposición de sus clientes, siendo el CLIENTE responsable de la custodia de los originales.",
                "\n\n"
              ]
            },
            {
              color: "red",
              text: [
                {
                  text: `Que el CLIENTE se compromete con la EMPRESA a tener registrados todos los datos necesarios en el aplicativo (siendo responsable de su veracidad) para la presentación de los impuestos`
                },
                {
                  text: ` 8 días hábiles antes del vencimiento establecido por la administración;`,
                  bold: true
                },
                {
                  text: ` en el mismo sentido, igual plazo para el caso que el CLIENTE encargue a la EMPRESA la contabilización de sus facturas o documentos análogos a coste tabla de ANEXO I. En caso que el CLIENTE encargue alta/baja/modificación contractual de un empleado, se compromete en comunicarlo a la EMPRESA`
                },
                { text: ` con mínimo de 5 días hábiles `, bold: true },
                {
                  text: `sumandos a los plazos establecidos en la Seguridad Social o normativa aplicable para el acto a generar.`
                }
              ]
            },
            { text: "\n\n" },
            {
              text: [
                { text: "Quinta.- ", bold: true },
                "PROTECCIÓN DE DATOS.‐ De acuerdo con lo que establece la Ley Orgánica de Protección de Datos (LOPD) 15/1999 y su Reglamento, le informamos que los datos personales recogidos en este documento u otros serán incluidos en un fichero bajo la responsabilidad de VARGASRUIZABOGADOS S.L.P.U, con la finalidad de cumplir los compromisos entre las partes. Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición en: lopd@vargasruizabogados.com",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Sexta.-  ", bold: true },
                " CONFIDENCIALIDAD.‐  Todos los documentos, escritos, información, etc. elaborados por la EMPRESA en relación con el CLIENTE o su personal o sus actividades durante la vigencia de este contrato son y seguirán siendo siempre propiedad del CLIENTE.",
                "\n\n",
                "No obstante, la parte arrendadora tendrá derecho a conservar copia de tales documentos, escritos, información, etc. en la medida en que lo estime conveniente.  La EMPRESA, se obliga a guardar secreto profesional, tanto durante la vigencia de este contrato o cuanto después de su terminación, sobre las materias que no estando en el dominio público sean privativas del CLIENTE, quedando exceptuada de esta obligación información que la arrendadora deba revelar en cumplimiento de leyes o reglamentos o por requerirlo u ordenarlo una agencia u organismo administrativo o un juez o tribunal competente en ejercicio de sus competencias.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Séptima.‐ ", bold: true },
                "DURACIÓN: El presente contrato de prestación de servicios no tiene una duración mínima.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Octava.‐ ", bold: true },
                "En todo caso, y si la duración de los servicios pactados superase el año, el importe fijado por la prestación del servicio contratado se revisará cumulativamente en un porcentaje igual a la subida del IPC en el periodo de los últimos 12 meses, siempre y cuando éste índice sea de signo positivo. ",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Novena.‐ ", bold: true },
                "TERMINACIÓN Y RESOLUCIÓN: La falta de pago de cualquiera mensualidad, dará derecho a la EMPRESA a resolver el contrato previa comunicación de 7 días naturales y, si lo estimara oportuno, a proceder a su reclamación judicial, aplicándose desde la fecha del incumplimiento el interés de demora establecido en la Ley. Que cualquiera de las partes podrá rescindir los servicios mediante cualquier comunicación fehaciente sin tener que alegar motivo alguno pero siempre con un preaviso de TREINTA DÍAS NATURALES, salvo supuesto anterior.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Decimo.- ", bold: true },
                " Cualquier modificación del presente contrato deberá realizarse por escrito e incorporarse al mismo como un nuevo Anexo, con excepción de las variaciones en las cuotas que pudieran acordarse y que se entenderán aceptadas desde el momento en que se realicen las transferencias con las nuevas cantidades.",
                "\n\n",
                {
                  text:
                    "Para que el presente contrato vincule a las partes, deberá ser firmado con certificado digital reconocido tanto el CLIENTE como la EMPRESA, comprometiéndose el primero a remitir el presente contrato y Orden SEPA en formato PDF a contratos@vargasruizabogados.com. "
                },
                "\n\n",
                {
                  text:
                    "En el caso que el CLIENTE no disponga de certificado digital reconocido podrá ser rubricado acompañándose con copia de DNI en vigor por ambas caras."
                },
                "\n\n"
              ]
            },
            { text: "\n\n" },
            {
              text: `En Madrid a ${dates.day} de ${dates.month} de ${dates.year}.-`
            },
            { text: "\n\n" },
            { text: "\n\n" },

            {
              alignment: "center",
              pageBreak: "after",
              columns: [
                {
                  text: [
                    { text: "LA EMPRESA.", fontSize: 10 },
                    "\n\n",
                    { text: "info@vargasruizabogados.com ", fontSize: 8 }
                  ]
                },
                {
                  text: [
                    { text: "EL CLIENTE", fontSize: 10 },
                    "\n\n",
                    { text: "www.vargasruizabogados.com ", fontSize: 8 }
                  ]
                }
              ]
            },
            { text: "ANEXO I \n\n", bold: true, alignment: "center" },
            { text: "\n" },
            { text: "Tarifas.", bold: true },
            { text: "\n" },
            {
              style: "tableExample",
              table: {
                headerRows: 1,
                // dontBreakRows: true,
                // keepWithHeaderRows: 1,
                widths: ["*", "50%"],
                body: [
                  [
                    {
                      alignment: "center",
                      text: "MODALIDAD\n\n",
                      style: "tableHeader",
                      fontSize: 8
                    },
                    {
                      alignment: "center",
                      text: "MENSUAL (IVA INCLUIDO)\n\n",
                      style: "tableHeader",
                      fontSize: 8
                    }
                  ],
                  [
                    {
                      text: "FISCAL AUTONOMO: Estimación Directa. (1)",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    },
                    {
                      text: "  49.99 €",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    }
                  ],
                  [
                    {
                      text:
                        "(1) Si es alta nueva como autónomo durante el primer año de vigencia del contrato",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    },
                    {
                      text: "  \n39,99 €",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    }
                  ],
                  [
                    {
                      text: "LABORAL: Por nómina.",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    },
                    {
                      text: "  10 €",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    }
                  ],
                  [
                    {
                      text: [
                        {
                          text:
                            "CONTABLE: Por cada factura/doc.análogo encargado por el CLIENTE a la EMPRESA para contabilizar.",
                          alignment: "left",
                          fontSize: 9
                        }
                      ],
                      alignment: "center",
                      margin: [18, 10],
                      fontSize: 10
                    },
                    {
                      text: "  \n 0,33 €\n",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    }
                  ],
                  [
                    {
                      text:
                        "El coste por cargo rechazado por banco del cliente",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    },
                    {
                      text: "  10 €",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    }
                  ],
                  [
                    {
                      text: "Pymes (SA:SL:SLP…)",
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    },
                    {
                      text: ` Preguntar a la EMPRESA en 
                         info@vargasruizabogados.com`,
                      alignment: "center",
                      margin: [0, 10],
                      fontSize: 9
                    }
                  ],
                  ["\n ", ""]
                ]
              },
              layout: {
                fillColor: function(rowIndex, node, columnIndex) {
                  return node.table.body.length - 1 == rowIndex ||
                    rowIndex === 0
                    ? "#CCCCCC"
                    : null;
                }
              }
            },
            {
              text:
                "\n\nDe no establecerse pacto en contrario, dichos honorarios se verán incrementados anualmente en el porcentaje del IPC del sector servicios, correspondiente al año anterior.",
              fontSize: 9
            },
            {
              text:
                "\nEn los citados servicios según Modalidad están incluidos",
              fontSize: 9,
              color: "red",
              decoration: "underline"
            },
            {
              text: [
                { text: ".", fontSize: 50, color: "red" },
                { text: "LABORAL", color: "red" },
                { text: "\n\n" },
                {
                  text:
                    "1.- Elaboración y presentación de contratos de trabajo, prórrogas, nóminas, seguros sociales, formalización de despidos, y finalizaciones de contratos, formalización de, altas, bajas y variaciones en la Seguridad Social de trabajadores y autónomo, salvo que este último seleccione su Mutualidad Profesional ante la cual la EMPRESA no realizara ningún tipo de gestión o tramite del Cliente o terceros ante la misma.",
                  fontSize: 9
                },
                { text: "\n\n" },
                {
                  text:
                    " 2.- Elaboración de los Certificados de retenciones de I.R.P.F. practicadas a los trabajadores. Certificado de empresa. Comunicaciones a SEPE.",
                  fontSize: 9
                }
              ]
            },
            {
              text: [
                { text: ".", fontSize: 50, color: "red" },
                { text: "FISCAL", color: "red" },
                { text: "\n\n" },
                {
                  text:
                    "1.- Presentación por medios exclusivamente telemáticos de las declaraciones tributarias mensuales o trimestrales (130, 303, 111, 115) que correspondan en función del tipo según actividad.",
                  fontSize: 9
                },
                { text: "\n\n" },
                {
                  text:
                    " 2.- Presentación de las declaraciones informativas anuales (190,180,390,347) preceptivos por exclusivamente telemáticos. No incluye declaración de la renta (Modelo 100) u otros modelos ajenos a la actividad profesional del Cliente.",
                  fontSize: 9
                },
                { text: "\n\n" },
                {
                  text:
                    "3.- Presentación por medios exclusivamente telemáticos de Altas, Bajas o Variaciones censales ante Agencia Tributaria.",
                  fontSize: 9
                }
              ]
            },
            {
              text: [
                { text: ".", fontSize: 50, color: "red" },
                { text: "CONTABLE", color: "red" },
                { text: "\n\n" },
                {
                  text:
                    "1.-  Llevanza/registro de la contabilidad del cliente conforme a la legislación vigente en cada momento, en función del tipo de entidad.",
                  fontSize: 9
                },
                { text: "\n\n" },
                {
                  text: [
                    {
                      text: "En los citados servicios no están incluidos:",
                      fontSize: 9,
                      color: "red",
                      decoration: "underline"
                    },
                    {
                      text:
                        " actuaciones/asistencias ante Notarios, Registros o demás Organismos. En el mismo sentido el presente contrato no contempla asistir a inspecciones o actuaciones de análoga naturaleza, o tramites presenciales ante cualquier administración de cualquier naturaleza, tampoco a prestar servicios de recepción de notificaciones telemáticas siendo responsabilidad de las mismas el propio cliente.",
                      fontSize: 9
                    }
                  ],
                  fontSize: 9
                }
              ]
            },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            {
              alignment: "center",
              columns: [
                {
                  text: [
                    { text: "LA EMPRESA.", fontSize: 10 },
                    "\n\n",
                    { text: "info@vargasruizabogados.com ", fontSize: 8 }
                  ]
                },
                {
                  text: [
                    { text: "EL CLIENTE", fontSize: 10 },
                    "\n\n",
                    { text: "www.vargasruizabogados.com ", fontSize: 8 }
                  ]
                }
              ]
            },
            {
              pageBreak: "before",
              columns: [
                /* { width: "*", text: "" }, */

                {
                  image:
                    "data:image/png;base64,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",
                  width: 160,
                  height: 50
                },
                { width: "10%", text: "" },
                { width: "10%", text: "" },
                {
                  width: "auto",
                  table: {
                    body: [
                      [
                        {
                          text: [
                            {
                              text: `ORDEN DE DOMICIALIZACIÓN DE ADEUDO 
                    DIRECTO SEPA`,
                              alignment: "center",
                              fontSize: 10,
                              bold: true
                            }
                            /*                             {
                              text: "SEPA Direct Debit Mandate",
                              fontSize: 10,
                              bold: true,
                              alignment: "center"
                            } */
                          ],
                          margin: [20, 10, 20, 10]
                        }
                      ]
                    ]
                  }
                }
              ]
            },
            { text: "\n" },
            {
              table: {
                widths: ["100%", "*"],
                body: [
                  [
                    {
                      text: [
                        {
                          text: `Referencia de la orden de domiciliado/Mandate reference; AP${inputs[1].value}PA`,

                          fontSize: 9,
                          bold: true
                        },
                        { text: "\n\n" },
                        {
                          text: [
                            {
                              text:
                                "Identificador del acreedor/ Creditor’s identifier; ",
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: "VR Abogados & Asesores -  C.I.F B56034168",
                              fontSize: 10
                            }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        { text: "\n\n" },
                        {
                          text: [
                            {
                              text: "Nombre del acreedor/ Creditor’s name: ",
                              fontSize: 10,
                              bold: true
                            },
                            { text: "VARGASRUIZABOGADOS S.L.P.U", fontSize: 10 }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        { text: "\n\n" },
                        {
                          text: [
                            {
                              text: "Dirección/Adress; ",
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text:
                                "Calle Isla de Malaita, 3 5.º C CP 28035 Madrid.",
                              fontSize: 10
                            }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        { text: "\n\n" },
                        {
                          text: [
                            {
                              text: "País/ Country;  ",
                              fontSize: 10,
                              bold: true
                            },
                            { text: "España.", fontSize: 10 }
                          ],
                          fontSize: 10,
                          bold: true
                        }
                      ],
                      margin: 10
                    }
                  ]
                ]
              }
            },
            { text: "\n" },
            {
              table: {
                widths: ["100%", "*"],
                body: [
                  [
                    {
                      text: [
                        {
                          text: [
                            {
                              text: "Nombre del deudor/es/Debtor’s name ",
                              fontSize: 9,
                              bold: true
                            },
                            {
                              text: "(titular de la cuenta)",
                              fontSize: 10
                            },

                            { text: "\n\n" },
                            {
                              text: `${inputs[0].value}`,
                              fontSize: 10,
                              margin: [100, 100, 100, 100]
                            }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        { text: "\n\n" },
                        {
                          text: [
                            {
                              text: "Dirección del deudor/Adress of de debtor ",
                              fontSize: 10,
                              bold: true
                            },

                            { text: "\n\n" },
                            {
                              text: `${inputs[2].value}`,
                              fontSize: 10
                            },
                            { text: "\n\n" }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        {
                          text: [
                            {
                              text: "Swift BIC ",
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: "(puede tener 8 u 11 posiciones) ",
                              fontSize: 10
                            },

                            { text: "\n\n" },
                            {
                              text: "N/A",
                              fontSize: 10,
                              bold: true
                            },
                            { text: "\n\n" }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        {
                          text: [
                            {
                              text: "Núm. de Cuenta- IBAN/Account number-IBAN ",
                              fontSize: 10,
                              bold: true
                            },

                            { text: "\n\n" },
                            {
                              text: `${inputs[7].value}`,
                              fontSize: 10
                            },
                            { text: "\n\n" }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        {
                          text: [
                            {
                              text: "Tipo de Pago: Type of payment    ",
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: "Pago recurrente/ recurrent payment",
                              fontSize: 10
                            },
                            { text: "\n\n " }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        {
                          text: [
                            {
                              text:
                                "Fecha-Localidad /Date-location in which you are signing ",
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: ` ${dates.day} de ${dates.month} de ${dates.year} - ${inputs[4].value}`,
                              fontSize: 10
                            },
                            { text: "\n\n" }
                          ],
                          fontSize: 10,
                          bold: true
                        },
                        {
                          text: [
                            {
                              text:
                                "Firma del deudor/Signature of the debtor; ",
                              fontSize: 10,
                              bold: true
                            },
                            {
                              text: " ……………………………………………………….",
                              fontSize: 10
                            }
                          ],
                          fontSize: 10,
                          bold: true
                        }
                      ],

                      margin: 10
                    }
                  ]
                ]
              }
            },
            { text: "\n" },
            {
              text: `Mediante la firma de esta orden de domiciliación, el deudor autoriza (A) al acreedor a enviar instrucciones a la entidad del deudor para adeudar su cuenta y (B) a la entidad para efectuar los adeudos en su cuenta siguiendo las instrucciones del acreedor. Esta orden de domiciliación está prevista para operaciones exclusivamente entre empresas y/o autónomos. El deudor no tiene derecho a que su entidad le reembolse una vez se haya realizado el cargo a cuenta, pero puede solicitar a su entidad que no efectúe el adeudo en la cuenta hasta la fecha debida. Podrá obtener información detallada del procedimiento en su entidad financiera./ By signing this mandate form, you authorize (A) the Creditor to send instructions to your bank to debit your account and (B) your bank to debit your account in accordance with the instructions from the Creator. This mandate is only intended for business to business transactions. You are not entitled to a refund from your bank after  been debited, but you are entitled to request your bank not to debit your account up until the day on which the payment is due. Please contact your bank for detailed procedures in such a case.`,
              fontSize: 9
            },

            { text: "\n\n" },

            {
              text:
                "TODOS LOS CAMPOS HAN DE SER CUMPLIMENTADOS OBLIGATORIAMENTE.UNA VEZ FIRMADA ESTA ORDEN DE COMICILIACIÓN DEBE SER ENVIADA AL ACREEDOR PARA SU CUSTODIA. LA ENTIDAD DEL DEUDOR REQUIERE AUTORIZACIÓN DE ESTE PREVIA AL CARGO EN CUENTA DE LOS ADEUDOS DIRECTOS B2B. EL DEUDOR PODRÁ GESTIONAR DICHA AUTORIZACIÓN CON LOS MEDIOS QUE SU ENTIDAD PONGA A DISPOSICIÓN./ALL GAPS ARE MANDATORY ONCE THIS MANDATE HAS BEEN SIGNED MUST BE SENT TO CREDITOR POR STORAGE. NEVERTHELESS THE BANK OF DEBTOR REQUIRES DEBTOR’S AUTHORIZATION BEFORE DEBITING B2B DIRECT DEBITS IN THE ACCOUNT. THE DEBTOR WILL BE ABLE TO MANAGE THE MENTIONED AUTHORIZATION THROUGH THE MEANS PROVIDED BY HIS BANK.",
              fontSize: 8
            }
          ],
          cellRight: {
            fontSize: 10,
            fillColor: "blue",
            alignment: "right"
          },
          defaultStyle: {
            fontSize: 11,
            alignment: "justify"
          }
        };

        event.detail.status == "validation_failed"
          ? ""
          : pdfMake.createPdf(dd).open();
      } else if (window.location.pathname == "/alta-agencia-tributaria/") {
        moment.locale("es");

        var dd = {
          content: [
            {
              style: "tableExample",
              table: {
                body: [
                  [
                    {
                      text: `Ref. ALTA${inputs[1].value}`,
                      margin: [10, 5, 100, 5],
                      bold: true
                    }
                  ]
                ]
              }
            },
            {
              columns: [
                { width: "*", text: "" },
                {
                  width: "auto",
                  table: {
                    body: [
                      [
                        {
                          text: `CONTRATO DE SERVICIOS PARA ALTA
                                       EN AGENCIA TRIBUTARIA`,
                          alignment: "center",
                          fontSize: 14,
                          bold: true
                        }
                      ]
                    ]
                  }
                }
              ]
            },
            { text: "\n\n" },
            {
              image:
                "data:image/png;base64,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",
              width: 200,
              height: 60
            },
            { text: "\n\n" },
            { text: "INTERVIENEN \n\n", bold: true, alignment: "center" },

            {
              fontSize: 11,
              text: `De una parte, la entidad mercantil VARGASRUIZABOGADOS S.L.P.U, con C.I.F. B56034168, inscrita en el Registro Mercantil de Córdoba 14022 Tomo 2484 Folio 91 Hoja CO36159 con domicilio fiscal en Calle Isla de Malaita núm. 3 5.º C 28035 de Madrid a efecto de notificaciones, en adelante EMPRESA. \n\n`
            },
            {
              fontSize: 11,
              text: [
                "Y de otra, ",
                { text: `DON ${inputs[0].value},`, bold: true },
                { text: " con N.I.F ", bold: true },
                { text: `${inputs[1].value}`, bold: true },
                " a efecto de notificaciones en ",
                { text: "C", bold: true },
                { text: `/${inputs[2].value}  `, bold: true },
                { text: "CP", bold: true },
                { text: ` ${inputs[3].value}`, bold: true },
                { text: " de " },
                { text: `${inputs[4].value}  `, bold: true },
                { text: "Telf. " },
                { text: `${inputs[5].value},  `, bold: true },
                { text: "Email " },
                { text: `${inputs[6].value} `, bold: true },
                { text: "En adelante CLIENTE. \n\n" }
              ]
            },
            {
              text:
                "Que ambas partes se reconocen capacidad legal y manifiestan,"
            },
            { text: "\n\n" },
            {
              text:
                "I.-Que la EMPRESA está especializada, entre otros, en la prestación de servicios de asesoría fiscal, laboral y contable, y servicios complementarios exclusivamente por medios telemáticos."
            },
            { text: "\n" },
            {
              text: [
                "II.- Que el CLIENTE está interesado en recibir únicamente de la EMPRESA, gestión de alta como autónomo en Agencia Tributaria por medios telemáticos. Que el CLIENTE manifiesta con la presente que",
                {
                  text:
                    " cumple con todos los requisitos legales para ejercer la profesión de abogado o procurador y es responsable de la veracidad de los datos aportados para realizar la gestión.",
                  bold: true
                }
              ]
            },
            { text: "\n" },
            {
              text:
                "III.-Que ambas partes han acordado celebrar el presente contrato de prestación del servicio de acuerdo con las siguientes"
            },
            { text: "\n" },
            { text: "\n\n" },
            { text: "ESTIPULACIONES \n\n", bold: true, alignment: "center" },
            {
              text: [
                { text: "Primera.- ", bold: true },
                "OBJETO DEL CONTRATO: TRAMITAR TELEMATICAMENTE ANTE AGENCIA TRIBUTARIA  ALTA DEL CLIENTE COMO AUTONOMO EN MODALIDAD DE ESTIMACION DIRECTA SIMPLIFICADA (036/037), 130, 111 y 303 a la fecha estipulada en la estipulación Segunda.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Segunda.- ", bold: true },
                {
                  text:
                    "Que el cliente interesa cursar alta en Agencia Tributaria el ",
                  bold: false
                },
                {
                  text: `${moment(inputs[7].value).format("DD-MM-YYYY")}`,
                  bold: true
                },
                { text: " con domicilio fiscal en" },
                { text: " C", bold: true },
                { text: `/${inputs[2].value}  `, bold: true },
                { text: "CP", bold: true },
                { text: ` ${inputs[3].value}`, bold: true },
                { text: " de " },
                { text: `${inputs[4].value}  `, bold: true },
                "siendo esta fecha posterior a la del presente contrato.",
                "\n\n",
                "El cliente es conocedor que el presente contrato no contempla gestión de alta en la Mutualidad Profesional o en la Seguridad Social (RETA) u organismo análogo.",
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Tercera.- ", bold: true },
                "PRECIO:",
                {
                  text: " 10 EUROS/IVA INCLUIDO.",
                  bold: true
                },
                "\n\n"
              ]
            },
            {
              text: [
                { text: "Cuarta.- ", bold: true },
                "FORMA DE PAGO: ingreso en el número de cuenta",
                {
                  text: " que le será facilitada por la empresa al CLIENTE  ",
                  bold: true
                },
                { text: "con el concepto" },
                {
                  text: ` ALTA${inputs[1].value} `,
                  bold: true
                },
                {
                  text:
                    "En el momento que sea justificado el abono de la cantidad de la cláusula tercera ser dará por aceptado el encargo por parte de la EMPRESA se emitirá factura y se procederá a gestionar el objeto del presente contrato."
                },
                "\n\n",
                {
                  text: [
                    { text: "Quinta.- ", bold: true },
                    "DOCUMENTACIÓN E INFORMACIÓN: la EMPRESA realizará su trabajo en sus instalaciones siendo obligación del CLIENTE la recepción y envío de la documentación preceptiva por los medios telemáticos que la EMPRESA pone a disposición de sus clientes, el cliente recibirá el modelo presentado en Agencia Tributaria en el email que ha facilitado en el presente contrato.",
                    "\n\n"
                  ]
                },
                {
                  text: [
                    { text: "Sexta.- ", bold: true },
                    "PROTECCIÓN DE DATOS.‐ De acuerdo con lo que establece la Ley Orgánica de Protección de Datos (LOPD) 15/1999 y su Reglamento, le informamos que los datos personales recogidos en este documento u otros serán incluidos en un fichero bajo la responsabilidad de VARGASRUIZABOGADOS S.L.P.U, con la finalidad de cumplir los compromisos entre las partes. Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición en: lopd@vargasruizabogados.com",
                    "\n\n"
                  ]
                },
                {
                  text: [
                    { text: "Séptima.- ", bold: true },
                    "Para que el presente contrato vincule a las partes, deberá ser firmado con certificado digital reconocido, tanto el CLIENTE como la EMPRESA, comprometiéndose el primero a remitir el presente contrato junto con justificante de ingreso en formato PDF a contratos@vargasruizabogados.com.",
                    "\n\n"
                  ]
                },
                {
                  text:
                    "En el caso que el CLIENTE no disponga de certificado digital reconocido podrá ser rubricado el presente contrato comprometiéndose a remitirlo a contratos@vargasruizabogados.com acompañándose con copia de DNI en vigor por ambas caras, ambos documentos en formato PDF."
                }
              ]
            },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            {
              text: `En Madrid a ${dates.day} de ${dates.month} de ${dates.year}.-`
            },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            { text: "\n\n" },
            {
              alignment: "center",
              columns: [
                {
                  text: [
                    { text: "LA EMPRESA.", fontSize: 10 },
                    "\n\n",
                    { text: "info@vargasruizabogados.com ", fontSize: 8 }
                  ]
                },
                {
                  text: [
                    { text: "EL CLIENTE", fontSize: 10 },
                    "\n\n",
                    { text: "www.vargasruizabogados.com ", fontSize: 8 }
                  ]
                }
              ]
            }
          ],
          cellRight: {
            fontSize: 10,
            fillColor: "blue",
            alignment: "right"
          },
          defaultStyle: {
            fontSize: 11,
            alignment: "justify"
          }
        };

        event.detail.status == "validation_failed"
          ? ""
          : pdfMake.createPdf(dd).open();
      } else {
        dd = {
          content: ["First paragraph", `sin datos`]
        };
      }
    },
    false
  );
}
