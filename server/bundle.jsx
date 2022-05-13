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
  }, content)), /*#__PURE__*/external_react_default().createElement("div", {
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
/* harmony default export */ const Necesitas = (__webpack_require__.p + "1bdec2eddb978ddc9bc6bfa03e29d153.css");
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
;// CONCATENATED MODULE: ./public/img/container-3-1.jpg
/* harmony default export */ const container_3_1 = (__webpack_require__.p + "4949e69e2c42cc3f3322845d4bd275b1.jpg");
;// CONCATENATED MODULE: ./public/img/container-3-2.jpg
/* harmony default export */ const container_3_2 = (__webpack_require__.p + "fd416f8dc15a029819f3c810fc5b49aa.jpg");
;// CONCATENATED MODULE: ./public/img/container-3-3.jpg
/* harmony default export */ const container_3_3 = (__webpack_require__.p + "376e69f4c4e7e93394df867d8e64193e.jpg");
;// CONCATENATED MODULE: ./public/img/container-3-4.jpg
/* harmony default export */ const container_3_4 = (__webpack_require__.p + "7000895712819b37aa0cb622fe75aacf.jpg");
;// CONCATENATED MODULE: ./public/img/container-3-5.jpg
/* harmony default export */ const container_3_5 = (__webpack_require__.p + "947048431a09c2b934010afdd0f611ec.jpg");
;// CONCATENATED MODULE: ./public/img/container-3-6.jpg
/* harmony default export */ const container_3_6 = (__webpack_require__.p + "185aad99779451357b958c8d93260ca4.jpg");
;// CONCATENATED MODULE: ./src/styles/LoUltimo.css
/* harmony default export */ const LoUltimo = (__webpack_require__.p + "af72afb6c4e42fa9125764b58cf2bb26.css");
;// CONCATENATED MODULE: ./src/LoUltimo.jsx








var titulos = ['Recursos para enseñar Unity', 'Herramienta Bolt para scripting visual', 'Unity Computer Vision'];
var contenido = ['Obtén recursos gratuitos y soporte para los docentes y las escuelas afectadas por el COVID-19.', 'Ahora está incluida en todos los planes de Unity sin costo adicional.', 'Obtén datos de alta calidad, perfectamente etiquetados para el entrenamiento utilizado en la visión computarizada a una fracción del costo.'];
var LoUltimo_images = [container_3_4, container_3_5, container_3_6];

var LoUltimo_LoUltimo = function LoUltimo() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "lo-ultimo-titulo"
  }, "Lo \xFAltimo de Unity"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-image-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-big-image",
    style: {
      backgroundImage: "url(".concat(container_3_1, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "big-image-text"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "\xA1Bienvenido, Weta Digital!"), /*#__PURE__*/external_react_default().createElement("p", null, "Herramientas VFX altamente sofisticadas para millones de creadores en todo el mundo"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-small-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-small-image",
    style: {
      backgroundImage: "url(".concat(container_3_2, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "small-image-text"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Para todos los suscriptores de Unity Pro y Enterprise"), /*#__PURE__*/external_react_default().createElement("p", null, "Accede al nuevo Centro del \xE9xito de Unity para obtener consejos \xFAtiles y pr\xE1cticas recomendadas."))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-small-image",
    style: {
      backgroundImage: "url(".concat(container_3_3, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "small-image-text"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "M\xE1s impulso"), /*#__PURE__*/external_react_default().createElement("p", null, "Obt\xE9n m\xE1s impulso en tu pr\xF3ximo proyecto con el conjunto completo de herramientas DevOps de Unity."))))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "lo-ultimo-text-container"
  }, titulos.map(function (titulo, index) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      className: "lo-ultimo-text",
      key: index.id
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "lo-ultimo-text-image",
      style: {
        backgroundImage: "url(".concat(LoUltimo_images[index], ")")
      }
    }), /*#__PURE__*/external_react_default().createElement("div", {
      className: "lo-ultimo-text-h1-p"
    }, /*#__PURE__*/external_react_default().createElement("h1", null, titulo), /*#__PURE__*/external_react_default().createElement("p", null, contenido[index])));
  })));
};

/* harmony default export */ const src_LoUltimo = (LoUltimo_LoUltimo);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/slicedToArray"
const slicedToArray_namespaceObject = require("@babel/runtime/helpers/slicedToArray");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_namespaceObject);
;// CONCATENATED MODULE: ./public/img/container-4.jpg
/* harmony default export */ const container_4 = (__webpack_require__.p + "7b4dd73ee4c208b829a4df786f1b436d.jpg");
;// CONCATENATED MODULE: ./public/img/container-4-2.jpg
/* harmony default export */ const container_4_2 = (__webpack_require__.p + "b29ef4832245edd1af56b384aeb17f8b.jpg");
;// CONCATENATED MODULE: ./public/img/container-4-3.jpg
/* harmony default export */ const container_4_3 = (__webpack_require__.p + "a69858bd62c87e967fd2c0068768f6b3.jpg");
;// CONCATENATED MODULE: ./src/styles/MadeWithUnity.css
/* harmony default export */ const MadeWithUnity = (__webpack_require__.p + "64a0f2ae8b918b5829c0bdc23d415083.css");
;// CONCATENATED MODULE: ./src/MadeWithUnity.jsx







var MadeWithUnity_MadeWithUnity = function MadeWithUnity() {
  var _useState = (0,external_react_namespaceObject.useState)(container_4),
      _useState2 = slicedToArray_default()(_useState, 2),
      image = _useState2[0],
      setImagen = _useState2[1];

  var classname = ['made-with-unity-box-transparent', 'made-with-unity-box-transparent', 'made-with-unity-box-transparent'];
  var titulos = ['Praey for the Gods', 'Pharos AR', 'Cómo crear un auto configurable en Unity HDRP'];
  var subTitulos = ['de No Matter Studios', 'de Childish Gambino, Wolf + Rothstein y MediaMonks', 'de Edward Martin'];
  var contenido = ['Un gran videojuego de supervivencia invernal de un estudio pequeño y talentoso.', 'Entra al mundo místico de Childish Gambino en la primera experiencia musical de AR multiplataforma y multijugador del mundo.', 'Detalles únicos sobre el renderizado en tiempo real del sector automotor.'];

  var handleHoverEnter = function handleHoverEnter(index) {
    console.log(index);
    setImagen([container_4, container_4_2, container_4_3][index]);
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "made-with-unity-container",
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "made-with-unity-intro-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "made-with-unity-titulo"
  }, "Made with Unity"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "made-with-unity-contenido"
  }, "Descubre historias inspiradoras de los creadores que eligieron Unity para materializar sus proyectos."), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "made-with-unity-button"
  }, "M\xE1s historias")), /*#__PURE__*/external_react_default().createElement("div", {
    className: "made-with-unity-box-container"
  }, titulos.map(function (title, index) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: index.id,
      className: classname[index],
      onMouseEnter: function onMouseEnter() {
        return handleHoverEnter(index);
      }
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "made-with-unity-box-text"
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "made-with-unity-box-h1-p"
    }, /*#__PURE__*/external_react_default().createElement("h1", null, title), /*#__PURE__*/external_react_default().createElement("p", {
      className: "made-with-unity-subtitulos"
    }, subTitulos[index]), /*#__PURE__*/external_react_default().createElement("p", {
      className: "made-with-unity-contenido-p"
    }, contenido[index])), /*#__PURE__*/external_react_default().createElement("div", {
      className: "made-with-unity-link-container"
    }, /*#__PURE__*/external_react_default().createElement("p", {
      className: "mas-informacion-made-with-unity"
    }, "M\xE1s informaci\xF3n"))));
  })));
};

/* harmony default export */ const src_MadeWithUnity = (MadeWithUnity_MadeWithUnity);
;// CONCATENATED MODULE: ./src/styles/Contratamos.css
/* harmony default export */ const Contratamos = (__webpack_require__.p + "534d34d3ed0a9373b83a009ef214e5c5.css");
;// CONCATENATED MODULE: ./public/img/container-5.jpg
/* harmony default export */ const container_5 = (__webpack_require__.p + "9b97b11ef556151e33e5dd6efe763424.jpg");
;// CONCATENATED MODULE: ./src/Contratamos.jsx




var Contratamos_Contratamos = function Contratamos() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "contratamos-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "contratamos-text"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Juntos, fortalecemos la creatividad en tiempo real por todo el mundo"), /*#__PURE__*/external_react_default().createElement("p", null, "\xDAnete al equipo global detr\xE1s de la plataforma de desarrollo en tiempo real m\xE1s poderosa del mundo."), /*#__PURE__*/external_react_default().createElement("div", {
    className: "cotratamos-button-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "contratamos-button"
  }, "Contratamos"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "contratamos-imagenes",
    style: {
      backgroundImage: "url(".concat(container_5, ")")
    }
  }));
};

/* harmony default export */ const src_Contratamos = (Contratamos_Contratamos);
;// CONCATENATED MODULE: ./src/styles/Logos.css
/* harmony default export */ const Logos = (__webpack_require__.p + "c5bfe1e5b745a7b69358f24098cea6cc.css");
;// CONCATENATED MODULE: ./public/img/ICONS/android.png
/* harmony default export */ const android = (__webpack_require__.p + "9548a460d052feb6db478504180bdf4c.png");
;// CONCATENATED MODULE: ./public/img/ICONS/androidtv.png
/* harmony default export */ const androidtv = (__webpack_require__.p + "8e2c22c4b21ceb3122b18a070f27ecfc.png");
;// CONCATENATED MODULE: ./public/img/ICONS/ARCore.png
/* harmony default export */ const ARCore = (__webpack_require__.p + "4c3f844e3ce056b8c267d6c2fa678782.png");
;// CONCATENATED MODULE: ./public/img/ICONS/holoLens.png
/* harmony default export */ const holoLens = (__webpack_require__.p + "59f3d2a0fc62507f149dce862130fad0.png");
;// CONCATENATED MODULE: ./public/img/ICONS/iOS.png
/* harmony default export */ const iOS = (__webpack_require__.p + "94e4cd5d856370e3fb91b651b1c1802e.png");
;// CONCATENATED MODULE: ./public/img/ICONS/linux.png
/* harmony default export */ const linux = (__webpack_require__.p + "a8af116cd4007355dcf121a2ca44fbdd.png");
;// CONCATENATED MODULE: ./public/img/ICONS/magicLeap.png
/* harmony default export */ const magicLeap = (__webpack_require__.p + "78e559b0097ee72f8b0c6da100914a7d.png");
;// CONCATENATED MODULE: ./public/img/ICONS/nintendo.png
/* harmony default export */ const nintendo = (__webpack_require__.p + "9774460bfc693893bb0479701fc6f4fa.png");
;// CONCATENATED MODULE: ./public/img/ICONS/oculus.png
/* harmony default export */ const oculus = (__webpack_require__.p + "0a70c30f11b51d9539040d50baec3ca6.png");
;// CONCATENATED MODULE: ./public/img/ICONS/plataforma.png
/* harmony default export */ const plataforma = (__webpack_require__.p + "cf1faaf207d20fde2ef32c56680cdf5e.png");
;// CONCATENATED MODULE: ./public/img/ICONS/ps4.png
/* harmony default export */ const ps4 = (__webpack_require__.p + "4efbda84c92547fd0227802391a40c8b.png");
;// CONCATENATED MODULE: ./public/img/ICONS/ps5.jpg
/* harmony default export */ const ps5 = (__webpack_require__.p + "f85a253c40d397b586035386a359beb4.jpg");
;// CONCATENATED MODULE: ./public/img/ICONS/stadia.png
/* harmony default export */ const stadia = (__webpack_require__.p + "0b224f84b8a0243a0703f4417d88f8d5.png");
;// CONCATENATED MODULE: ./public/img/ICONS/tvOS.png
/* harmony default export */ const tvOS = (__webpack_require__.p + "c1fc8ea4de870fe3759eee093faa93da.png");
;// CONCATENATED MODULE: ./public/img/ICONS/webgl.png
/* harmony default export */ const webgl = (__webpack_require__.p + "aa18b91d7b812c1e8f70d401b5e6d931.png");
;// CONCATENATED MODULE: ./public/img/ICONS/windows.png
/* harmony default export */ const windows = (__webpack_require__.p + "87aa07356de33c48681999b48e659a89.png");
;// CONCATENATED MODULE: ./public/img/ICONS/xbox.png
/* harmony default export */ const xbox = (__webpack_require__.p + "d3d16dd327e68c68533437c5959c8237.png");
;// CONCATENATED MODULE: ./public/img/ICONS/xs.png
/* harmony default export */ const xs = (__webpack_require__.p + "e88cbd85aeebdff0bb9bda6ddcf1e047.png");
;// CONCATENATED MODULE: ./src/Logos.jsx





















var Logos_Logos = function Logos() {
  var LOGOS = [iOS, android, windows, plataforma, linux, webgl, ps4, ps5, xbox, xs, oculus, androidtv, tvOS, nintendo, ARCore, stadia, holoLens, magicLeap];
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "logos-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Ofrece posibilidades incre\xEDbles"), /*#__PURE__*/external_react_default().createElement("p", null, "Crea tu producto una sola vez e implem\xE9ntalo en m\xE1s de 25 plataformas y tecnolog\xEDas l\xEDderes del sector para llegar al mayor p\xFAblico posible."), /*#__PURE__*/external_react_default().createElement("div", {
    className: "logos-grid"
  }, LOGOS.map(function (logo, index) {
    return /*#__PURE__*/external_react_default().createElement("div", {
      key: index.id,
      className: "logo-individual",
      style: {
        backgroundImage: "url(".concat(logo, ")")
      }
    });
  })));
};

/* harmony default export */ const src_Logos = (Logos_Logos);
;// CONCATENATED MODULE: ./public/img/container-6.jpg
/* harmony default export */ const container_6 = (__webpack_require__.p + "a31e9cc3820b470e71e1d71de41b020d.jpg");
;// CONCATENATED MODULE: ./src/styles/Contactanos.css
/* harmony default export */ const Contactanos = (__webpack_require__.p + "8959a41919944922bade440a45abec3b.css");
;// CONCATENATED MODULE: ./src/Contactanos.jsx




var Contactanos_Contactanos = function Contactanos() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "contactanos-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "contactanos-image-contanier",
    style: {
      backgroundImage: "url(".concat(container_6, ")")
    }
  }, /*#__PURE__*/external_react_default().createElement("h1", {
    className: "contactanos-title"
  }, "Soluciones para grandes equipos que quieren alcanzar grandes sue\xF1os"), /*#__PURE__*/external_react_default().createElement("p", {
    className: "contactanos-content"
  }, "Nuestras soluciones corporativas les proporcionan a grandes equipos y organizaciones en cada industria todo lo que necesitan para construir incre\xEDbles proyectos en 3D en tiempo real."), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "contactanos-button"
  }, "Cont\xE1ctanos")));
};

/* harmony default export */ const src_Contactanos = (Contactanos_Contactanos);
;// CONCATENATED MODULE: ./src/styles/Footer.css
/* harmony default export */ const Footer = (__webpack_require__.p + "ec843c93ee85ab1f7f00cf67a8d36f0d.css");
;// CONCATENATED MODULE: ./public/img/facebook.svg
/* harmony default export */ const facebook = (__webpack_require__.p + "70c0877d4c68eab138147940871f6f71.svg");
;// CONCATENATED MODULE: ./public/img/instagram.svg
/* harmony default export */ const instagram = (__webpack_require__.p + "5f9ad49ed88b0df33f09dd196d0cb1ca.svg");
;// CONCATENATED MODULE: ./public/img/linkedin.svg
/* harmony default export */ const linkedin = (__webpack_require__.p + "73a4a93d8b467e0ef9cb3876d1c3121b.svg");
;// CONCATENATED MODULE: ./public/img/twitter.svg
/* harmony default export */ const twitter = (__webpack_require__.p + "2045f8e06739560aa3581ea79baceb26.svg");
;// CONCATENATED MODULE: ./public/img/youtube.svg
/* harmony default export */ const youtube = (__webpack_require__.p + "2c52b9e5c4d2ea0b7d3f3071d8a27d16.svg");
;// CONCATENATED MODULE: ./src/Footer.jsx








var Footer_Footer = function Footer() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-info-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "idioma-redes-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "idioma-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Idioma"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "idiomas-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", null, "English"), /*#__PURE__*/external_react_default().createElement("li", null, "Deutsch"), /*#__PURE__*/external_react_default().createElement("li", null, "\u65E5\u672C\u8A9E"), /*#__PURE__*/external_react_default().createElement("li", null, "Fran\xE7ais"), /*#__PURE__*/external_react_default().createElement("li", null, "Portugu\xEAs"), /*#__PURE__*/external_react_default().createElement("li", null, "\u4E2D\u6587"), /*#__PURE__*/external_react_default().createElement("li", null, "Espa\xF1ol"), /*#__PURE__*/external_react_default().createElement("li", null, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"), /*#__PURE__*/external_react_default().createElement("li", null, "\uD55C\uAD6D\uC5B4"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "redes-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Redes sociales"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "redes"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "red",
    style: {
      backgroundImage: "url(".concat(youtube, ")"),
      width: '15px',
      height: '19px'
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "red",
    style: {
      backgroundImage: "url(".concat(linkedin, ")"),
      width: '18px',
      height: '19px'
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "red",
    style: {
      backgroundImage: "url(".concat(twitter, ")"),
      width: '18px',
      height: '19px'
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "red",
    style: {
      backgroundImage: "url(".concat(facebook, ")"),
      width: '9px',
      height: '19px'
    }
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "red",
    style: {
      backgroundImage: "url(".concat(instagram, ")"),
      width: '18px',
      height: '19px'
    }
  })))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "linea"
  }, /*#__PURE__*/external_react_default().createElement("hr", null)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "lists-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "container-ul"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Comprar"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "lists-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      marginTop: '-21px'
    }
  }, "Productos"), /*#__PURE__*/external_react_default().createElement("li", null, "Unity Ads"), /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      color: 'black'
    }
  }, "o"), /*#__PURE__*/external_react_default().createElement("li", null, "Suscripci\xF3n"), /*#__PURE__*/external_react_default().createElement("li", null, "Asset Store"), /*#__PURE__*/external_react_default().createElement("li", null, "Revendedores"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container-ul"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Educaci\xF3n"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "lists-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      marginTop: '-21px'
    }
  }, "Estudiantes"), /*#__PURE__*/external_react_default().createElement("li", null, "Docentes"), /*#__PURE__*/external_react_default().createElement("li", null, "Certificaci\xF3n"), /*#__PURE__*/external_react_default().createElement("li", null, "Averiguar"), /*#__PURE__*/external_react_default().createElement("li", null, "Centro de excelencia"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container-ul"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Descargar"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "lists-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      marginTop: '-21px'
    }
  }, "Obtener Unity"), /*#__PURE__*/external_react_default().createElement("li", null, "Descargar archivo"), /*#__PURE__*/external_react_default().createElement("li", null, "Programa beta"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container-ul"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Unity Labs"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "lists-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      marginTop: '-21px'
    }
  }, "Labs"), /*#__PURE__*/external_react_default().createElement("li", null, "Publicaciones"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container-ul"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Recursos"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "lists-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      marginTop: '-21px'
    }
  }, "Plataforma Learn"), /*#__PURE__*/external_react_default().createElement("li", null, "Comunidad"), /*#__PURE__*/external_react_default().createElement("li", null, "Documentaci\xF3n"), /*#__PURE__*/external_react_default().createElement("li", null, "Preguntas y respuestas Unity"), /*#__PURE__*/external_react_default().createElement("li", null, "Preguntas frecuentes"), /*#__PURE__*/external_react_default().createElement("li", null, "Estado del servicio"), /*#__PURE__*/external_react_default().createElement("li", null, "Casos de estudio"), /*#__PURE__*/external_react_default().createElement("li", null, "Made with Unity"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "container-ul"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Unity"), /*#__PURE__*/external_react_default().createElement("ul", {
    className: "lists-ul"
  }, /*#__PURE__*/external_react_default().createElement("li", {
    style: {
      marginTop: '-21px'
    }
  }, "Nuestra empresa"), /*#__PURE__*/external_react_default().createElement("li", null, "Marca"), /*#__PURE__*/external_react_default().createElement("li", null, "Bolet\xEDn"), /*#__PURE__*/external_react_default().createElement("li", null, "Blog"), /*#__PURE__*/external_react_default().createElement("li", null, "Eventos"), /*#__PURE__*/external_react_default().createElement("li", null, "Carreras"), /*#__PURE__*/external_react_default().createElement("li", null, "Ayuda"), /*#__PURE__*/external_react_default().createElement("li", null, "Prensa"), /*#__PURE__*/external_react_default().createElement("li", null, "Socios"), /*#__PURE__*/external_react_default().createElement("li", null, "Inversionistas"), /*#__PURE__*/external_react_default().createElement("li", null, "Afiliados"), /*#__PURE__*/external_react_default().createElement("li", null, "Seguridad"), /*#__PURE__*/external_react_default().createElement("li", null, "Impacto social")))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-copyright-container"
  }, /*#__PURE__*/external_react_default().createElement("h1", null, "Copyright \xA9 2022 Unity Technologies"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "copyright-list"
  }, /*#__PURE__*/external_react_default().createElement("p", null, "Informaci\xF3n legal"), /*#__PURE__*/external_react_default().createElement("p", null, "Pol\xEDtica de privacidad"), /*#__PURE__*/external_react_default().createElement("p", null, "Cookies"), /*#__PURE__*/external_react_default().createElement("p", null, "No quiero que se venda mi informaci\xF3n personal"), /*#__PURE__*/external_react_default().createElement("p", null, "Configuraci\xF3n de cookies"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-last-container"
  }, "\"Unity\", los logotipos de Unity y otras marcas comerciales de Unity son marcas comerciales o marcas registradas de Unity Technologies o sus afiliadas en Estados Unidos y el resto del mundo (", /*#__PURE__*/external_react_default().createElement("span", null, "m\xE1s informaci\xF3n aqu\xED"), "). Los dem\xE1s nombres o marcas son marcas comerciales de sus respectivos propietarios.")));
};

/* harmony default export */ const src_Footer = (Footer_Footer);
;// CONCATENATED MODULE: ./src/App.jsx















var App = function App() {
  return /*#__PURE__*/external_react_default().createElement("div", {
    style: {
      overflowY: 'scroll',
      height: '100vh',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/external_react_default().createElement(src_Floater, null), /*#__PURE__*/external_react_default().createElement(src_TitleBar, null), /*#__PURE__*/external_react_default().createElement(src_IntroContainer, null), /*#__PURE__*/external_react_default().createElement(src_SquareContainer, null), /*#__PURE__*/external_react_default().createElement(src_GrayContainer, null), /*#__PURE__*/external_react_default().createElement(src_ProductosDestacados, null), /*#__PURE__*/external_react_default().createElement(src_Necesitas, null), /*#__PURE__*/external_react_default().createElement(src_LoUltimo, null), /*#__PURE__*/external_react_default().createElement(src_MadeWithUnity, null), /*#__PURE__*/external_react_default().createElement(src_Contratamos, null), /*#__PURE__*/external_react_default().createElement(src_Logos, null), /*#__PURE__*/external_react_default().createElement(src_Contactanos, null), /*#__PURE__*/external_react_default().createElement(src_Footer, null));
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