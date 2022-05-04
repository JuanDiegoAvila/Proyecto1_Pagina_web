/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: ./public/img/logo.svg
/* harmony default export */ const logo = (__webpack_require__.p + "dd81870f003ef40c1cb32ab7c07a98dd.svg");
;// CONCATENATED MODULE: ./public/img/menu.svg
/* harmony default export */ const menu = (__webpack_require__.p + "391d5a378b53a7662d7b01d813eebc4b.svg");
;// CONCATENATED MODULE: ./public/img/profile.svg
/* harmony default export */ const profile = (__webpack_require__.p + "9b854197abfb6fa93570719e27b320d1.svg");
;// CONCATENATED MODULE: ./public/img/search.svg
/* harmony default export */ const search = (__webpack_require__.p + "be868f13196237bc142ef1a96867e56b.svg");
;// CONCATENATED MODULE: ./src/styles/TitleBar.css
/* harmony default export */ const TitleBar = (__webpack_require__.p + "77e4cd2995a47c81926daa125b72dd53.css");
;// CONCATENATED MODULE: ./src/TitleBar.jsx







var TitleBar_TitleBar = function TitleBar() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "title-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "logo",
    style: {
      backgroundImage: "url(".concat(logo, ")")
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, "Productos"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, "Soluciones"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, "Aprendizaje"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, "Ayuda y Servicios"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, "Comunidad"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, "Ver M\xE1s")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "comenzemos-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "comencemos"
  }, "Comencemos")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "other-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "other",
    style: {
      backgroundImage: "url(".concat(search, ")")
    }
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "other-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "other",
    style: {
      backgroundImage: "url(".concat(menu, ")")
    }
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "other-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "other",
    style: {
      backgroundImage: "url(".concat(profile, ")")
    }
  })));
};

/* harmony default export */ const src_TitleBar = (TitleBar_TitleBar);
;// CONCATENATED MODULE: ./public/img/container-1.jpg
/* harmony default export */ const container_1 = (__webpack_require__.p + "af806f82fd27fb9b651c667512787c73.jpg");
;// CONCATENATED MODULE: ./src/styles/IntroContainer.css
/* harmony default export */ const IntroContainer = (__webpack_require__.p + "7becd8fcf3a54a3696bcd4b6bcb1c317.css");
;// CONCATENATED MODULE: ./src/IntroContainer.jsx




var IntroContainer_IntroContainer = function IntroContainer() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "intro-container",
    style: {
      backgroundImage: "url(".concat(container_1, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "text-main-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "text-intro-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "\xA1Ya lleg\xF3 Unity 2021 LTS!"), /*#__PURE__*/external_react_default().createElement("p", null, "La calidad es lo primero. Infinitas posibilidades. Descubre mejoras incre\xEDbles que te ayudan a alcanzar tus ambiciones creativas."), /*#__PURE__*/external_react_default().createElement("div", {
    className: "button-main-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "button-intro-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "mas-informacion"
  }, "M\xE1s informaci\xF3n"), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "comenzar"
  }, "Comenzar"))))));
};

/* harmony default export */ const src_IntroContainer = (IntroContainer_IntroContainer);
;// CONCATENATED MODULE: ./public/img/floater.png
/* harmony default export */ const floater = (__webpack_require__.p + "cb70dc4db38ff94d58528ff9610ab37b.png");
;// CONCATENATED MODULE: ./src/styles/Floater.css
/* harmony default export */ const Floater = (__webpack_require__.p + "d803866e63491299a9e43a2f720ce772.css");
;// CONCATENATED MODULE: ./src/Floater.jsx




var Floater_Floater = function Floater() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "floater-container",
    style: {
      backgroundImage: "url(".concat(floater, ")")
    }
  });
};

/* harmony default export */ const src_Floater = (Floater_Floater);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./src/styles/SquareNI.css
/* harmony default export */ const SquareNI = (__webpack_require__.p + "c488d356ae8064820ad71f6f3747a36e.css");
;// CONCATENATED MODULE: ./src/SquareNI.jsx




var SquareNI_SquareNI = function SquareNI(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "square-NI-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "square-NI-text-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "square-h1-p-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, title), /*#__PURE__*/external_react_default().createElement("p", {
    className: "mas-content-square"
  }, content)), /*#__PURE__*/external_react_default().createElement("p", {
    className: "mas-informacion-link-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "mas-informacion-square"
  }, "M\xE1s informaci\xF3n"))));
};

SquareNI_SquareNI.propTypes = {
  title: (external_prop_types_default()).string.isRequired,
  content: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const src_SquareNI = (SquareNI_SquareNI);
;// CONCATENATED MODULE: ./src/styles/SquareContainer.css
/* harmony default export */ const SquareContainer = (__webpack_require__.p + "90c8ee00f3fff45c209dfd694b035f6b.css");
;// CONCATENATED MODULE: ./src/SquareContainer.jsx




var SquareContainer_SquareContainer = function SquareContainer() {
  var titles = ['Juegos', 'Automóviles, transporte y fabricación', 'Películas, animación y cinemática', 'Arquitectura, ingeniería y construcción'];
  var content = ['Todo lo que necesitas para crear y operar los juegos.', 'Obtén una ventaja competitiva en el panorama en rápida evolución del sector con el 3D en tiempo real.', 'Libertad artística sin precedentes y una producción más rápida para los proyectos de filmación y animación.', 'Crea experiencias 3D envolventes para aplicaciones del mundo real a escala.'];
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "square-container-1"
  }, titles.map(function (title, index) {
    return /*#__PURE__*/external_react_default().createElement(src_SquareNI, {
      key: index.id,
      title: title,
      content: content[index]
    });
  }));
};

/* harmony default export */ const src_SquareContainer = (SquareContainer_SquareContainer);
;// CONCATENATED MODULE: ./src/styles/GrayContainer.css
/* harmony default export */ const GrayContainer = (__webpack_require__.p + "8315875386afe35522806570d2c88d4f.css");
;// CONCATENATED MODULE: ./public/img/accounts.png
/* harmony default export */ const accounts = (__webpack_require__.p + "6d57adba59b222532f86a191b5a152f1.png");
;// CONCATENATED MODULE: ./src/GrayContainer.jsx




var GrayContainer_GrayContainer = function GrayContainer() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "gray-container-2"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "gray-text-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "info-container-2",
    style: {
      marginLeft: '25px'
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "icons-container-2",
    style: {
      backgroundImage: 'url(https://api.iconify.design/mdi/check-circle.svg?color=%233ac561)'
    }
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "info-container-text"
  }, /*#__PURE__*/external_react_default().createElement("strong", null, "Libre de regal\xEDas: "), "te quedas con todo lo que ganas")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "info-container-2"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "icons-container-2",
    style: {
      backgroundImage: 'url(https://api.iconify.design/ic/baseline-device-hub.svg?color=%233ac561)'
    }
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "info-container-text"
  }, /*#__PURE__*/external_react_default().createElement("strong", null, "M\xE1s de 20 plataformas diferentes "), "ejecutan proyectos creados con Unity")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "info-container-2"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "icons-container-2",
    style: {
      backgroundImage: "url(".concat(accounts, ")")
    }
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "info-container-text"
  }, "Con la confianza de", /*#__PURE__*/external_react_default().createElement("strong", null, " 1,5 millones de creadores activos "), "por mes"))));
};

/* harmony default export */ const src_GrayContainer = (GrayContainer_GrayContainer);
;// CONCATENATED MODULE: ./src/styles/ProductosDestacados.css
/* harmony default export */ const ProductosDestacados = (__webpack_require__.p + "ae2086eaf4860a5442bad912d217c255.css");
;// CONCATENATED MODULE: ./public/img/container-2-1.jpg
/* harmony default export */ const container_2_1 = (__webpack_require__.p + "80b336afd0fd1b72d549f9f78f36a19e.jpg");
;// CONCATENATED MODULE: ./public/img/container-2-2.jpg
/* harmony default export */ const container_2_2 = (__webpack_require__.p + "a003571258a5f04ee861f310195b32a2.jpg");
;// CONCATENATED MODULE: ./src/ProductosDestacados.jsx





var ProductosDestacados_ProductosDestacados = function ProductosDestacados() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "productos-destacados-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "productos-destacados-titulo"
  }, "Productos destacados"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "productos-destacados-a-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-imagen",
    style: {
      backgroundImage: "url(".concat(container_2_1, ")")
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-text"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-h1-p"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Unity Pro"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "producto-destacado-content"
  }, "La soluci\xF3n completa para que los profesionales creen y operen experiencias en 3D en tiempo real. Pon en manos de tu equipo el poder de todo un ecosistema de herramientas, soporte y comunidad para obtener los mejores resultados m\xE1s r\xE1pido.")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-links-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "producto-destacado-links"
  }, "Suscr\xEDbete"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "producto-destacado-links"
  }, "M\xE1s informaci\xF3n")))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-imagen",
    style: {
      backgroundImage: "url(".concat(container_2_2, ")")
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-text"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-h1-p"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Servicios para videojuegos de Unity"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "producto-destacado-content"
  }, "Donde sea que te encuentres en el ciclo de vida de desarrollo, los servicios para videojuegos de Unity llevan tu juego al siguiente nivel. Haz realidad lo que imaginas con nuestras herramientas para ejecutar tu juego en l\xEDnea, aumentar los ingresos, conocer informaci\xF3n sobre los jugadores y mucho m\xE1s.")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "producto-destacado-links-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "producto-destacado-links"
  }, "Comenzar"))))));
};

/* harmony default export */ const src_ProductosDestacados = (ProductosDestacados_ProductosDestacados);
;// CONCATENATED MODULE: ./src/styles/Necesitas.css
/* harmony default export */ const Necesitas = (__webpack_require__.p + "e22fe6faf8455e6d44e0371cb9d810f8.css");
;// CONCATENATED MODULE: ./src/Necesitas.jsx



var Necesitas_Necesitas = function Necesitas() {
  var titulos = ['Unity Learn', 'Tienda de recursos', 'Documentación', 'Servicios de videojuegos'];
  var contenido = ['Desarrolla tus habilidades de Unity con sesiones en vivo y más de 750 horas de contenido de aprendizaje a pedido diseñado para creadores, cualquiera sea su nivel de perfeccionamiento.', 'Inicia tu proyecto y llega a la línea de meta más rápido con un catálogo en constante crecimiento de herramientas y recursos gratuitos y de pago.', 'Ponte al corriente con las características y los flujos de trabajo de Unity, y descubre cómo crear y usar scripts con nuestra documentación completa y muy bien organizada.', 'Todo lo que necesitas para crear tu juego, administrarlo y hacerlo crecer. Lleva tu juego al siguiente nivel con servicios de eficacia comprobada para cada etapa del ciclo de vida de desarrollo.'];
  var links = ['Comenzar el aprendizaje', 'Más información', 'Más información', 'Más informacion'];
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "necesitas-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "necesitas-intro-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "necesitas-h1-titulo"
  }, "Todo lo que necesitas para alcanzar el \xE9xito"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "necesitas-h1-contenido"
  }, "Unity es mucho m\xE1s que la mejor plataforma de desarrollo en tiempo real del mundo: tambi\xE9n es un ecosistema robusto dise\xF1ado para ayudarte a tener \xE9xito. \xDAnete a nuestra comunidad din\xE1mica de creadores a fin de aprovechar lo que necesitas para hacer realidad tu visi\xF3n."), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "necesitas-button"
  }, "Leer nuestro blog")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "necesitas-squares-container"
  }, titulos.map(function (titulo, index) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: index.id,
      className: "necesitas-square"
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "necesitas-container-h1-p"
    }, /*#__PURE__*/external_react_default().createElement("h1", {
      className: "necesitas-square-h1"
    }, titulo), /*#__PURE__*/external_react_default().createElement("p", {
      className: "necesitas-square-p"
    }, contenido[index])), /*#__PURE__*/external_react_default().createElement("div", {
      className: "necesitas-link-container"
    }, /*#__PURE__*/external_react_default().createElement("p", {
      className: "necesitas-link"
    }, links[index])));
  })));
};

/* harmony default export */ const src_Necesitas = (Necesitas_Necesitas);
;// CONCATENATED MODULE: ./src/App.jsx









var App = function App() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      overflowY: 'scroll',
      height: '100vh',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/external_react_default().createElement(src_Floater, null), /*#__PURE__*/external_react_default().createElement(src_TitleBar, null), /*#__PURE__*/external_react_default().createElement(src_IntroContainer, null), /*#__PURE__*/external_react_default().createElement(src_SquareContainer, null), /*#__PURE__*/external_react_default().createElement(src_GrayContainer, null), /*#__PURE__*/external_react_default().createElement(src_ProductosDestacados, null), /*#__PURE__*/external_react_default().createElement(src_Necesitas, null));
};

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./server/index.jsx





var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.get('/', function (req, res) {
  var element = server_namespaceObject.renderToString( /*#__PURE__*/external_react_default().createElement(src_App, null));
  var html = "\n    <html lang=\"en\">\n    <head>\n        <title>Document</title>\n    </head>\n    <body style=\"margin: 0px;\">\n        <div id=\"app\">".concat(element, "</div>\n        <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n  ");
  res.send(html);
});
app.use(external_express_default()["static"](external_path_default().join(__dirname, '../dist')));
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
/******/ })()
;