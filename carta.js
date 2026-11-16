/*
  CARTA
  =====
  Aquí están los datos del local, los colores, el horario y todos los productos con sus precios.
  Lo más fácil es editarla desde el panel (tu-pagina/admin). Para editarla aquí, cambia el texto
  entre comillas o el número y guarda el archivo.

  Reglas rápidas:
  - Los precios van sin punto ni signo: 14500 (no "$14.500").
  - "tema": colores de la marca. "color" es el principal (botones, detalles) y "colorDestacado" el de
    los títulos destacados. Van en formato #rrggbb. Si quedan vacíos, se usan el rojo y el amarillo de la plantilla.
  - Horario: "13:00-22:00" o "cerrado". Para dos turnos: "12:00-15:30, 19:00-23:00".
    Si "horario" queda en null, la página no muestra abierto/cerrado y siempre deja pedir.
  - horarioConfirmado: con false el horario solo se muestra como referencia ("por confirmar"):
    no aparece abierto/cerrado ni se bloquean pedidos. Cámbialo a true cuando esté confirmado.
  - diasCerrados: fechas en que no se atiende aunque el horario diga abierto. Ej: ["2026-12-25"].
  - "textos": los títulos y textos fijos de la página (portada, carta, pasos, pie).
  - Lo que quede vacío ("") no se muestra: por ejemplo, sin "direccion" no aparece la sección Ubicación.
  - "secciones" son los botones grandes de la carta (Promos, Sushi, Hamburguesas…) y cada una tiene
    sus "categorias" (si hay más de una, aparecen como botones chicos).
  - Producto agotado: agrega "disponible": false
  - Producto en la portada (promo destacada): agrega "destacado": true y una "foto".
  - Fotos: guárdalas en la carpeta img/carta/ y escribe la ruta, ej: "img/carta/mi-foto.webp".
    Si una categoría tiene al menos un producto con foto, se muestra en tarjetas; si no, en lista.
  - "detalle" con varias líneas (separadas por \n) se muestra como «Ver qué incluye».
  - "opciones": lo que el cliente elige (ej: ["Simple", "Doble"]).
    Si cada opción tiene otro precio, ponlo en "preciosOpciones".
  - "personalizar": los grupos de "personalizacion" que el cliente elige en ese producto o en toda
    la categoría (ej: ["punto", "agregados"] en las hamburguesas). Un producto con su propio
    "personalizar" no usa el de la categoría.
  - Grupos de "personalizacion":
      "tipo": "elegir" con "min": 1 y "max": 1  → el cliente elige una sí o sí (ej: punto de la carne).
      "tipo": "extra" con "max": 10             → agregados opcionales con precio (ej: tocino +$1.000).
      "porRoll": true                           → se elige en cada roll (proteína, relleno, envoltura).
      "porDefecto": true en una opción          → queda marcada de entrada.
  - "cupones": códigos de descuento (un cupón por pedido).
      "tipo": "porcentaje" (10 = 10%) o "monto" (2000 = $2.000), con su "valor".
      Opcionales: "minimo" (pedido mínimo), "tope" (descuento máximo de un porcentaje),
      "desde" y "hasta" ("2026-12-31"), "dias" (["martes"]), "modo" ("retiro" o "delivery"),
      "aplica" (ids de categorías: el descuento se calcula solo sobre esas), "activo": false (apagado)
      y "visible": false (no aparece en la página; sirve para redes o volantes).
      Ojo: los códigos se pueden ver en este archivo. El local confirma cada cupón en el WhatsApp.
  - "rolls": cuántos rolls arma el cliente en ese producto (20 cortes = 2 rolls de 10).
  - En una opción de "personalizacion", "gratis": 1 significa que la primera de esa opción no se cobra
    y desde la segunda se cobra su precio (ej: la primera envoltura en palta y la primera en queso).
  Cuidado con las comas: cada elemento de una lista va separado por una coma.
*/
window.CARTA = {
  "negocio": {
    "nombre": "Sushi Demo",
    "whatsapp": "56900000000",
    "whatsappVisible": "+56 9 0000 0000",
    "facebook": "",
    "instagram": "",
    "direccion": "Calle Demo 123",
    "sector": "",
    "ciudad": "Coquimbo",
    "region": "",
    "mapa": "https://www.google.com/maps/search/?api=1&query=Plaza+de+Armas+de+Coquimbo",
    "mapaBusqueda": "Plaza de Armas de Coquimbo, Chile",
    "datosTransferencia": "Banco Demo\nCuenta corriente 00000000\nRUT 11.111.111-1\npagos@demo.cl",
    "sucursales": [],
    "sectoresDelivery": [
      {
        "nombre": "Centro",
        "detalle": "Hasta 3 km del local",
        "precio": 2000
      },
      {
        "nombre": "Sector norte",
        "detalle": "Ejemplo de sector con otro valor de delivery",
        "precio": 2500
      },
      {
        "nombre": "Sector sur",
        "detalle": "Ejemplo de sector con otro valor de delivery",
        "precio": 3000
      }
    ],
    "mapaCentro": {
      "lat": -29.9533,
      "lng": -71.3436
    },
    "pagosDelivery": [
      "Efectivo",
      "Transferencia"
    ],
    "pagosRetiro": [
      "Efectivo",
      "Transferencia",
      "Tarjeta"
    ]
  },
  "tema": {
    "color": "#d73b37",
    "colorDestacado": "#ff9a6b"
  },
  "horario": {
    "lunes": "12:30-22:30",
    "martes": "12:30-22:30",
    "miercoles": "12:30-22:30",
    "jueves": "12:30-22:30",
    "viernes": "12:30-23:30",
    "sabado": "12:30-23:30",
    "domingo": "13:00-22:00"
  },
  "horarioConfirmado": false,
  "diasCerrados": [],
  "textos": {
    "portada": {
      "titulo": "¿Pedimos",
      "destacado": "sushi?",
      "bajada": "Tablas, rolls, gohan y más. Pide para retiro o delivery y envía tu pedido por WhatsApp."
    },
    "carta": {
      "titulo": "Elige tu",
      "destacado": "antojo",
      "bajada": "Tablas, entrantes, creaciones de la casa, rolls, gohan, sushiburger y arma tu roll. Suma lo que quieras al pedido."
    },
    "cupones": {
      "titulo": "Cupones",
      "destacado": "de la semana",
      "bajada": "Toca «Usar cupón» y el descuento se aplica solo en tu pedido. Un cupón por pedido."
    },
    "arma": {
      "titulo": "Arma tu",
      "destacado": "roll"
    },
    "pasos": {
      "titulo": "Haz tu pedido",
      "destacado": "en 3 pasos.",
      "lista": [
        {
          "titulo": "Elige o arma",
          "texto": "Escoge tu tabla, rolls o gohan, o arma tu roll como más te guste."
        },
        {
          "titulo": "Retiro o delivery",
          "texto": "Retira en el local o pide delivery: el valor depende de tu sector."
        },
        {
          "titulo": "Envía por WhatsApp",
          "texto": "Elige cómo pagas al retirar o al recibir y envía tu pedido: llega directo a nuestro WhatsApp."
        }
      ]
    },
    "ubicacion": {
      "titulo": "Te esperamos"
    },
    "antojo": {
      "titulo": "¿Qué se te",
      "destacado": "antoja hoy?"
    }
  },
  "secciones": [
    {
      "nombre": "Tablas",
      "categorias": [
        {
          "id": "tablas",
          "nombre": "Tablas",
          "nota": "Individuales y familiares. Se permiten como máximo 2 modificaciones por tabla. Cada modificación tiene costo adicional.",
          "productos": [
            {
              "id": "tabla-20",
              "nombre": "Tabla 20 piezas",
              "precio": 9990,
              "foto": "img/carta/tabla-20.webp",
              "detalle": "Sésamo: kanikama, queso crema y palmito.\nPalta: pollo, queso crema y cebollín.",
              "incluye": "2 salsas (soya o teriyaki)"
            },
            {
              "id": "tabla-40",
              "nombre": "Tabla 40 piezas",
              "precio": 17990,
              "foto": "img/carta/tabla-40.webp",
              "detalle": "Sésamo: camarón, queso crema y cebollín.\nPanko: pollo, queso crema y cebollín.\nPalta: kanikama, queso crema y palmito.\nNori: salmón y queso crema.",
              "incluye": "3 salsas (soya o teriyaki)",
              "destacado": true
            },
            {
              "id": "tabla-60",
              "nombre": "Tabla 60 piezas",
              "precio": 25990,
              "foto": "img/carta/tabla-60.webp",
              "detalle": "Sésamo: camarón, queso crema y cebollín.\nQueso: kanikama, palta y palmito.\nPalta: champiñón, queso crema y aceituna.\nTempura: camarón, queso crema y cebollín.\nPanko: pollo, palta y queso crema.\nNori: salmón y palta.",
              "incluye": "4 salsas (soya o teriyaki)"
            },
            {
              "id": "tabla-80",
              "nombre": "Tabla 80 piezas",
              "precio": 33990,
              "foto": "img/carta/tabla-80.webp",
              "detalle": "Sésamo: camarón, queso crema y cebollín.\nQueso: kanikama, palta y palmito.\nPanko: pollo, palta y queso crema.\nPalta: champiñón, queso crema y aceituna.\nNori: camarón y queso crema.\nTempura: pollo, queso crema y cebollín.\nSalmón: salmón, palta y queso crema.\nCiboulette: choclo, palta y queso crema.",
              "incluye": "5 salsas (soya o teriyaki)"
            }
          ]
        },
        {
          "id": "tablas-especiales",
          "nombre": "Tablas especiales",
          "nota": "Se permiten como máximo 2 modificaciones por tabla. Cada modificación tiene costo adicional.",
          "productos": [
            {
              "id": "tabla-mixta",
              "nombre": "Tabla Mixta",
              "precio": 21990,
              "foto": "img/carta/tabla-mixta.webp",
              "detalle": "Palta: camarón, queso crema y cebollín.\nPanko: pollo, palta y queso crema.\n+ 3 gyozas y 2 camarones tempura.",
              "nota": "24 piezas.",
              "incluye": "2 salsas (soya o teriyaki) y 1 salsa acevichada",
              "destacado": true
            },
            {
              "id": "tabla-pollo",
              "nombre": "Tabla Pollo",
              "precio": 19990,
              "foto": "img/carta/tabla-pollo.webp",
              "detalle": "Panko: pollo, queso crema y cebollín.\nQueso flameado: pollo, palta y queso crema.\n+ 5 bolitas de pollo.",
              "nota": "24 piezas.",
              "incluye": "2 salsas (soya o teriyaki) y 1 salsa blanca"
            },
            {
              "id": "tabla-salmon",
              "nombre": "Tabla Salmón",
              "precio": 23990,
              "foto": "img/carta/tabla-salmon.webp",
              "detalle": "Salmón: salmón, palta y queso crema.\nSésamo: salmón, palta y queso crema.\n+ 4 cortes de sashimi de salmón y 3 bolitas de salmón.",
              "nota": "24 piezas.",
              "incluye": "2 salsas (soya o teriyaki)",
              "destacado": true
            }
          ]
        },
        {
          "id": "tablas-veggie",
          "nombre": "Tablas veggie",
          "nota": "Se permiten como máximo 2 modificaciones por tabla. Cada modificación tiene costo adicional.",
          "productos": [
            {
              "id": "veggie-clasica",
              "nombre": "Veggie Clásica",
              "precio": 16990,
              "foto": "img/carta/veggie-clasica.webp",
              "detalle": "Palta: palmito, pimentón y palta.\nSésamo: palta, pepino y choclo.\nPepino: zanahoria, pepino y queso crema.",
              "nota": "30 piezas.",
              "incluye": "2 salsas (soya o teriyaki)"
            },
            {
              "id": "veggie-premium",
              "nombre": "Veggie Premium",
              "precio": 21990,
              "foto": "img/carta/veggie-premium.webp",
              "detalle": "Palta: palmito, pimentón y palta.\nQueso: palta, pepino y choclo.\nPanko: champiñón, queso crema y aceituna.\n+ 3 nigiris de palta.",
              "nota": "33 piezas.",
              "incluye": "3 salsas (soya o teriyaki)"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Entrantes",
      "categorias": [
        {
          "id": "entrantes",
          "nombre": "Entrantes",
          "productos": [
            {
              "id": "proteinas-rebosadas",
              "nombre": "Proteínas rebosadas",
              "precio": 4990,
              "foto": "img/carta/tempura.webp",
              "detalle": "En tempura o panko, a elección.",
              "opciones": [
                "Pollo (6 unidades)",
                "Camarones (8 unidades)",
                "Salmón (7 unidades)"
              ],
              "preciosOpciones": {
                "Pollo (6 unidades)": 4990,
                "Camarones (8 unidades)": 5490,
                "Salmón (7 unidades)": 5990
              },
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "rebozado",
                "salsa-incluida"
              ]
            },
            {
              "id": "nigiris",
              "nombre": "Nigiris",
              "precio": 3490,
              "foto": "img/carta/nigiris.webp",
              "detalle": "4 unidades.",
              "opciones": [
                "Palta",
                "Camarón",
                "Salmón",
                "Atún",
                "Pulpo"
              ],
              "preciosOpciones": {
                "Palta": 3490,
                "Camarón": 3990,
                "Salmón": 4290,
                "Atún": 4290,
                "Pulpo": 5490
              },
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "salsa-incluida"
              ]
            },
            {
              "id": "gyozas",
              "nombre": "Gyozas",
              "precio": 4490,
              "foto": "img/carta/gyozas.webp",
              "detalle": "5 unidades, al vapor en soya o fritas.",
              "opciones": [
                "Pollo",
                "Camarón",
                "Cerdo",
                "Verduras"
              ],
              "personalizar": [
                "preparacion-gyoza"
              ]
            },
            {
              "id": "sashimi",
              "nombre": "Sashimi",
              "precio": 6490,
              "foto": "img/carta/sashimi.webp",
              "detalle": "Salmón o atún, en 6 o 9 cortes.",
              "opciones": [
                "Salmón, 6 cortes",
                "Salmón, 9 cortes",
                "Atún, 6 cortes",
                "Atún, 9 cortes"
              ],
              "preciosOpciones": {
                "Salmón, 6 cortes": 6490,
                "Salmón, 9 cortes": 8990,
                "Atún, 6 cortes": 6490,
                "Atún, 9 cortes": 8990
              },
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "salsa-incluida"
              ]
            }
          ]
        }
      ]
    },
    {
      "nombre": "Creaciones de la casa",
      "categorias": [
        {
          "id": "creaciones-de-la-casa",
          "nombre": "Creaciones de la casa",
          "productos": [
            {
              "id": "bolitas-salmon",
              "nombre": "Bolitas de salmón",
              "precio": 5990,
              "foto": "img/carta/bolitas-salmon.webp",
              "detalle": "Salmón, queso crema y especias, apanadas en panko.",
              "nota": "6 unidades.",
              "incluye": "1 salsa blanca"
            },
            {
              "id": "bolitas-pollo",
              "nombre": "Bolitas de pollo",
              "precio": 5490,
              "foto": "img/carta/bolitas-pollo.webp",
              "detalle": "Pollo, queso crema y especias, apanadas en panko. Con salsa teriyaki.",
              "nota": "6 unidades.",
              "incluye": "1 salsa teriyaki"
            },
            {
              "id": "bolitas-veggie",
              "nombre": "Bolitas veggie",
              "precio": 5490,
              "foto": "img/carta/bolitas-veggie.webp",
              "detalle": "Champiñón, queso crema y especias, apanadas en panko.",
              "nota": "6 unidades.",
              "incluye": "1 salsa blanca"
            },
            {
              "id": "bolitas-kanikama",
              "nombre": "Bolitas de kanikama",
              "precio": 5490,
              "foto": "img/carta/bolitas-kanikama.webp",
              "detalle": "Kanikama, queso crema y especias, apanadas en panko. Con salsa acevichada.",
              "nota": "6 unidades.",
              "incluye": "1 salsa acevichada"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Rolls premium",
      "categorias": [
        {
          "id": "rolls-premium",
          "nombre": "Rolls premium",
          "personalizar": [
            "ingrediente-extra",
            "salsa-incluida"
          ],
          "productos": [
            {
              "id": "roll-acevichado",
              "nombre": "Roll Acevichado",
              "precio": 8490,
              "foto": "img/carta/roll-acevichado.webp",
              "detalle": "Camarón, queso crema y cebollín, envuelto en salmón. Cubierto de salsa acevichada.",
              "incluye": "1 salsa (soya o teriyaki)",
              "destacado": true
            },
            {
              "id": "roll-tempura",
              "nombre": "Roll Tempura",
              "precio": 6490,
              "foto": "img/carta/roll-tempura.webp",
              "detalle": "Pollo, queso crema y cebollín, frito en tempura. Con salsa teriyaki y sésamo.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-panko",
              "nombre": "Roll Panko Crunch",
              "precio": 6490,
              "foto": "img/carta/roll-panko.webp",
              "detalle": "Pollo, palta y queso crema, apanado en panko. Con salsa blanca y topping crocante.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-salmon",
              "nombre": "Roll Salmón Palta",
              "precio": 7990,
              "foto": "img/carta/roll-salmon.webp",
              "detalle": "Salmón, palta y queso crema, envuelto en salmón con sésamo.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-teriyaki",
              "nombre": "Roll Teriyaki",
              "precio": 6990,
              "foto": "img/carta/roll-teriyaki.webp",
              "detalle": "Pollo teriyaki y queso crema, envuelto en sésamo. Con salsa teriyaki y almendras tostadas.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-spicy",
              "nombre": "Roll Spicy",
              "precio": 7490,
              "foto": "img/carta/roll-spicy.webp",
              "detalle": "Camarón, queso crema y cebollín, envuelto en masago. Con salsa spicy.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-queso",
              "nombre": "Roll Queso Flameado",
              "precio": 6990,
              "foto": "img/carta/roll-queso.webp",
              "detalle": "Kanikama, palmito y queso crema, envuelto en queso crema flameado. Con salsa teriyaki.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-atun",
              "nombre": "Roll Atún",
              "precio": 7990,
              "foto": "img/carta/roll-atun.webp",
              "detalle": "Atún, pepino y queso crema, envuelto en atún con sésamo.",
              "incluye": "1 salsa (soya o teriyaki)"
            },
            {
              "id": "roll-furay",
              "nombre": "Roll Furay",
              "precio": 7490,
              "foto": "img/carta/roll-furay.webp",
              "detalle": "Camarón furay, palta y queso crema, envuelto en palta. Con salsa acevichada y camarón tempura encima.",
              "incluye": "1 salsa (soya o teriyaki)",
              "destacado": true
            },
            {
              "id": "roll-tartar",
              "nombre": "Roll Tartar Spicy",
              "precio": 8490,
              "foto": "img/carta/roll-tartar.webp",
              "detalle": "Camarón, palta y queso crema, apanado en panko. Con tartar de salmón y salsa spicy.",
              "incluye": "1 salsa (soya o teriyaki)"
            }
          ]
        }
      ]
    },
    {
      "nombre": "Gohan y sushiburger",
      "categorias": [
        {
          "id": "gohan-sushiburger",
          "nombre": "Gohan y sushiburger",
          "productos": [
            {
              "id": "gohan",
              "nombre": "Gohan",
              "precio": 7490,
              "foto": "img/carta/gohan.webp",
              "detalle": "Escoge 2 ingredientes base (rebosados o fríos) y 3 ingredientes secundarios.",
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "base-2",
                "preparacion-base",
                "secundarios-3",
                "ingrediente-extra",
                "salsa-incluida"
              ],
              "destacado": true
            },
            {
              "id": "sushi-burger",
              "nombre": "Sushi burger",
              "precio": 7990,
              "foto": "img/carta/sushiburger.webp",
              "detalle": "Escoge 2 ingredientes base (rebosados o fríos) y 3 ingredientes secundarios.",
              "incluye": "2 salsas (soya o teriyaki)",
              "personalizar": [
                "base-2",
                "preparacion-base",
                "secundarios-3",
                "ingrediente-extra"
              ]
            }
          ]
        }
      ]
    },
    {
      "nombre": "Arma tu roll",
      "categorias": [
        {
          "id": "arma-tu-roll",
          "nombre": "Arma tu roll",
          "productos": [
            {
              "id": "roll-con-arroz",
              "nombre": "Arma tu roll con arroz",
              "precio": 4990,
              "foto": "img/carta/arma-roll.webp",
              "detalle": "1 envoltura + 1 ingrediente base + 2 ingredientes secundarios.",
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "ar-envoltura",
                "ar-base",
                "rebosar",
                "ar-secundarios-2",
                "ingrediente-extra",
                "sin-nori",
                "salsa-incluida"
              ]
            },
            {
              "id": "roll-sin-arroz",
              "nombre": "Arma tu roll sin arroz",
              "precio": 6490,
              "foto": "img/carta/sin-arroz.webp",
              "detalle": "1 envoltura + 1 ingrediente base + 4 ingredientes secundarios.",
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "sa-envoltura",
                "ar-base",
                "rebosar",
                "sa-secundarios-4",
                "ingrediente-extra",
                "salsa-incluida"
              ]
            },
            {
              "id": "hosomaki",
              "nombre": "Hosomaki",
              "precio": 3990,
              "foto": "img/carta/hosomaki.webp",
              "detalle": "Envuelto en nori + 1 ingrediente base + 1 ingrediente secundario.",
              "incluye": "1 salsa (soya o teriyaki)",
              "personalizar": [
                "hoso-base",
                "rebosar",
                "hoso-secundario",
                "ingrediente-extra",
                "salsa-incluida"
              ]
            }
          ]
        }
      ]
    },
    {
      "nombre": "Extras",
      "categorias": [
        {
          "id": "salsas",
          "nombre": "Salsas y otros",
          "productos": [
            {
              "id": "acevichada",
              "nombre": "Salsa acevichada",
              "precio": 900
            },
            {
              "id": "spicy",
              "nombre": "Salsa spicy",
              "precio": 900
            },
            {
              "id": "soya-teriyaki",
              "nombre": "Soya o teriyaki",
              "precio": 790,
              "opciones": [
                "Soya",
                "Teriyaki"
              ]
            },
            {
              "id": "blanca",
              "nombre": "Salsa blanca",
              "precio": 900
            },
            {
              "id": "agridulce",
              "nombre": "Salsa agridulce",
              "precio": 900
            },
            {
              "id": "jengibre-wasabi",
              "nombre": "Jengibre o wasabi",
              "precio": 790,
              "opciones": [
                "Jengibre",
                "Wasabi"
              ]
            }
          ]
        },
        {
          "id": "bebestibles",
          "nombre": "Bebestibles",
          "productos": [
            {
              "id": "bebida-lata",
              "nombre": "Bebida en lata 350 ml",
              "precio": 1500,
              "foto": "img/carta/bebidas.webp",
              "opciones": [
                "Cola",
                "Cola zero",
                "Lima limón",
                "Naranja"
              ]
            },
            {
              "id": "bebida-grande",
              "nombre": "Bebida 1,5 litros",
              "precio": 2990,
              "foto": "img/carta/bebidas.webp",
              "opciones": [
                "Cola",
                "Cola zero",
                "Lima limón",
                "Naranja"
              ]
            },
            {
              "id": "agua",
              "nombre": "Agua mineral 500 ml",
              "precio": 1200,
              "foto": "img/carta/bebidas.webp",
              "opciones": [
                "Sin gas",
                "Con gas"
              ]
            }
          ]
        }
      ]
    }
  ],
  "cupones": [],
  "personalizacion": [
    {
      "id": "salsa-incluida",
      "nombre": "Salsa incluida",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "soya",
          "nombre": "Soya",
          "precio": 0
        },
        {
          "id": "teriyaki",
          "nombre": "Teriyaki",
          "precio": 0
        }
      ]
    },
    {
      "id": "rebozado",
      "nombre": "Rebosado",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "tempura",
          "nombre": "Tempura",
          "precio": 0
        },
        {
          "id": "panko",
          "nombre": "Panko",
          "precio": 0
        }
      ]
    },
    {
      "id": "preparacion-gyoza",
      "nombre": "Preparación",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "vapor",
          "nombre": "Al vapor en soya",
          "precio": 0
        },
        {
          "id": "fritas",
          "nombre": "Fritas",
          "precio": 0
        }
      ]
    },
    {
      "id": "base-2",
      "nombre": "Ingredientes base",
      "tipo": "elegir",
      "min": 2,
      "max": 2,
      "opciones": [
        {
          "id": "camaron",
          "nombre": "Camarón",
          "precio": 0
        },
        {
          "id": "salmon",
          "nombre": "Salmón",
          "precio": 0
        },
        {
          "id": "kanikama",
          "nombre": "Kanikama",
          "precio": 0
        },
        {
          "id": "champinon",
          "nombre": "Champiñón",
          "precio": 0
        },
        {
          "id": "pollo",
          "nombre": "Pollo",
          "precio": 0
        },
        {
          "id": "atun",
          "nombre": "Atún",
          "precio": 0
        },
        {
          "id": "lomo-salteado",
          "nombre": "Lomo salteado",
          "precio": 2200
        },
        {
          "id": "pulpo",
          "nombre": "Pulpo",
          "precio": 3290
        }
      ]
    },
    {
      "id": "preparacion-base",
      "nombre": "La base, ¿rebosada o fría?",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "rebosado",
          "nombre": "Rebosado",
          "precio": 0
        },
        {
          "id": "frio",
          "nombre": "Frío",
          "precio": 0
        }
      ]
    },
    {
      "id": "secundarios-3",
      "nombre": "Ingredientes secundarios",
      "tipo": "elegir",
      "min": 3,
      "max": 3,
      "opciones": [
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 0
        },
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 0
        },
        {
          "id": "palmito",
          "nombre": "Palmito",
          "precio": 0
        },
        {
          "id": "cebollin",
          "nombre": "Cebollín",
          "precio": 0
        },
        {
          "id": "ciboulette",
          "nombre": "Ciboulette",
          "precio": 0
        },
        {
          "id": "aji-verde",
          "nombre": "Ají verde",
          "precio": 0
        },
        {
          "id": "pepino",
          "nombre": "Pepino",
          "precio": 0
        },
        {
          "id": "pimenton",
          "nombre": "Pimentón",
          "precio": 0
        },
        {
          "id": "aceitunas",
          "nombre": "Aceitunas",
          "precio": 0
        },
        {
          "id": "albahaca",
          "nombre": "Albahaca",
          "precio": 0
        },
        {
          "id": "choclito",
          "nombre": "Choclito cóctel",
          "precio": 0
        },
        {
          "id": "zanahoria",
          "nombre": "Zanahoria",
          "precio": 0
        }
      ]
    },
    {
      "id": "ar-envoltura",
      "nombre": "Envoltura",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 0
        },
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 0
        },
        {
          "id": "sesamo",
          "nombre": "Sésamo",
          "precio": 0
        },
        {
          "id": "nori",
          "nombre": "Nori",
          "precio": 0
        },
        {
          "id": "panko",
          "nombre": "Panko",
          "precio": 0
        },
        {
          "id": "tempura",
          "nombre": "Tempura",
          "precio": 0
        },
        {
          "id": "ciboulette",
          "nombre": "Ciboulette",
          "precio": 0
        },
        {
          "id": "masago",
          "nombre": "Masago",
          "precio": 1500
        },
        {
          "id": "salmon",
          "nombre": "Salmón",
          "precio": 2500
        },
        {
          "id": "atun",
          "nombre": "Atún",
          "precio": 2500
        }
      ]
    },
    {
      "id": "ar-base",
      "nombre": "Ingrediente base",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "kanikama",
          "nombre": "Kanikama",
          "precio": 0
        },
        {
          "id": "champinon",
          "nombre": "Champiñón",
          "precio": 0
        },
        {
          "id": "atun",
          "nombre": "Atún",
          "precio": 0
        },
        {
          "id": "pollo",
          "nombre": "Pollo",
          "precio": 0
        },
        {
          "id": "camaron",
          "nombre": "Camarón",
          "precio": 0
        },
        {
          "id": "salmon",
          "nombre": "Salmón",
          "precio": 0
        },
        {
          "id": "lomo-salteado",
          "nombre": "Lomo salteado",
          "precio": 2200
        },
        {
          "id": "pulpo",
          "nombre": "Pulpo",
          "precio": 3290
        }
      ]
    },
    {
      "id": "ar-secundarios-2",
      "nombre": "Ingredientes secundarios",
      "tipo": "elegir",
      "min": 2,
      "max": 2,
      "opciones": [
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 0
        },
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 0
        },
        {
          "id": "palmito",
          "nombre": "Palmito",
          "precio": 0
        },
        {
          "id": "pepino",
          "nombre": "Pepino",
          "precio": 0
        },
        {
          "id": "pimenton",
          "nombre": "Pimentón",
          "precio": 0
        },
        {
          "id": "aceitunas",
          "nombre": "Aceitunas",
          "precio": 0
        },
        {
          "id": "cebollin",
          "nombre": "Cebollín",
          "precio": 0
        },
        {
          "id": "ciboulette",
          "nombre": "Ciboulette",
          "precio": 0
        },
        {
          "id": "aji-verde",
          "nombre": "Ají verde",
          "precio": 0
        },
        {
          "id": "albahaca",
          "nombre": "Albahaca",
          "precio": 0
        },
        {
          "id": "choclito",
          "nombre": "Choclito",
          "precio": 0
        },
        {
          "id": "zanahoria",
          "nombre": "Zanahoria",
          "precio": 0
        }
      ]
    },
    {
      "id": "sin-nori",
      "nombre": "Sin nori",
      "tipo": "extra",
      "min": 0,
      "max": 1,
      "opciones": [
        {
          "id": "sin-nori",
          "nombre": "Roll sin nori",
          "precio": 1000
        }
      ]
    },
    {
      "id": "hoso-base",
      "nombre": "Ingrediente base",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "kanikama",
          "nombre": "Kanikama",
          "precio": 0
        },
        {
          "id": "champinon",
          "nombre": "Champiñón",
          "precio": 0
        },
        {
          "id": "atun",
          "nombre": "Atún",
          "precio": 0
        },
        {
          "id": "pollo",
          "nombre": "Pollo",
          "precio": 0
        },
        {
          "id": "camaron",
          "nombre": "Camarón",
          "precio": 0
        },
        {
          "id": "salmon",
          "nombre": "Salmón",
          "precio": 0
        }
      ]
    },
    {
      "id": "hoso-secundario",
      "nombre": "Ingrediente secundario",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 0
        },
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 0
        },
        {
          "id": "palmito",
          "nombre": "Palmito",
          "precio": 0
        },
        {
          "id": "pepino",
          "nombre": "Pepino",
          "precio": 0
        },
        {
          "id": "pimenton",
          "nombre": "Pimentón",
          "precio": 0
        },
        {
          "id": "aceitunas",
          "nombre": "Aceitunas",
          "precio": 0
        },
        {
          "id": "cebollin",
          "nombre": "Cebollín",
          "precio": 0
        },
        {
          "id": "ciboulette",
          "nombre": "Ciboulette",
          "precio": 0
        },
        {
          "id": "aji-verde",
          "nombre": "Ají verde",
          "precio": 0
        },
        {
          "id": "albahaca",
          "nombre": "Albahaca",
          "precio": 0
        },
        {
          "id": "choclito",
          "nombre": "Choclito",
          "precio": 0
        },
        {
          "id": "zanahoria",
          "nombre": "Zanahoria",
          "precio": 0
        }
      ]
    },
    {
      "id": "sa-envoltura",
      "nombre": "Envoltura",
      "tipo": "elegir",
      "min": 1,
      "max": 1,
      "opciones": [
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 0
        },
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 0
        },
        {
          "id": "nori",
          "nombre": "Nori",
          "precio": 0
        },
        {
          "id": "panko",
          "nombre": "Panko",
          "precio": 0
        },
        {
          "id": "tempura",
          "nombre": "Tempura",
          "precio": 0
        },
        {
          "id": "salmon",
          "nombre": "Salmón",
          "precio": 2500
        },
        {
          "id": "atun",
          "nombre": "Atún",
          "precio": 2500
        }
      ]
    },
    {
      "id": "sa-secundarios-4",
      "nombre": "Ingredientes secundarios",
      "tipo": "elegir",
      "min": 4,
      "max": 4,
      "opciones": [
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 0
        },
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 0
        },
        {
          "id": "palmito",
          "nombre": "Palmito",
          "precio": 0
        },
        {
          "id": "pepino",
          "nombre": "Pepino",
          "precio": 0
        },
        {
          "id": "pimenton",
          "nombre": "Pimentón",
          "precio": 0
        },
        {
          "id": "aceitunas",
          "nombre": "Aceitunas",
          "precio": 0
        },
        {
          "id": "cebollin",
          "nombre": "Cebollín",
          "precio": 0
        },
        {
          "id": "ciboulette",
          "nombre": "Ciboulette",
          "precio": 0
        },
        {
          "id": "aji-verde",
          "nombre": "Ají verde",
          "precio": 0
        },
        {
          "id": "albahaca",
          "nombre": "Albahaca",
          "precio": 0
        },
        {
          "id": "choclito",
          "nombre": "Choclito",
          "precio": 0
        },
        {
          "id": "zanahoria",
          "nombre": "Zanahoria",
          "precio": 0
        }
      ]
    },
    {
      "id": "ingrediente-extra",
      "nombre": "Ingrediente extra",
      "tipo": "extra",
      "min": 0,
      "max": 3,
      "opciones": [
        {
          "id": "queso-crema",
          "nombre": "Queso crema",
          "precio": 990
        },
        {
          "id": "palta",
          "nombre": "Palta",
          "precio": 990
        },
        {
          "id": "palmito",
          "nombre": "Palmito",
          "precio": 990
        },
        {
          "id": "pepino",
          "nombre": "Pepino",
          "precio": 990
        },
        {
          "id": "pimenton",
          "nombre": "Pimentón",
          "precio": 990
        },
        {
          "id": "aceitunas",
          "nombre": "Aceitunas",
          "precio": 990
        },
        {
          "id": "cebollin",
          "nombre": "Cebollín",
          "precio": 990
        },
        {
          "id": "ciboulette",
          "nombre": "Ciboulette",
          "precio": 990
        },
        {
          "id": "aji-verde",
          "nombre": "Ají verde",
          "precio": 990
        },
        {
          "id": "albahaca",
          "nombre": "Albahaca",
          "precio": 990
        },
        {
          "id": "choclito",
          "nombre": "Choclito",
          "precio": 990
        },
        {
          "id": "zanahoria",
          "nombre": "Zanahoria",
          "precio": 990
        }
      ]
    },
    {
      "id": "rebosar",
      "nombre": "Rebosar el ingrediente base",
      "tipo": "extra",
      "min": 0,
      "max": 1,
      "opciones": [
        {
          "id": "tempura",
          "nombre": "Rebosado en tempura",
          "precio": 990
        },
        {
          "id": "panko",
          "nombre": "Rebosado en panko",
          "precio": 990
        }
      ]
    }
  ],
  "ingredientes": {}
};
