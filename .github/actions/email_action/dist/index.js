module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 71:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

const nodemailer = __nccwpck_require__(363);
const core = __nccwpck_require__(518);
const author_email = core.getInput("author_email");
const send_email = core.getInput("send_email");
const send_pass = core.getInput("send_pass");
const syntax_check_job = core.getInput("syntax_check_job");
const test_execution_job = core.getInput("test_execution_job");
const build_statics_job = core.getInput("build_statics_job");
const deploy_job = core.getInput("deploy_job");

function check_skipped(job) {
  if (job == "") {
    job = "skipped";
  }
  return job;
}

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: send_email,
    pass: send_pass,
  },
});

let mailOptions = {
  from: send_email,
  to: author_email,
  subject: "Resultado del workflow ejecutado",
  text: `Se ha realizado un push en la rama githubActions_improvement que
  ha provocado la ejecución del workflow Bingo_Workflow con los
  siguientes resultados:\n\n syntax_check_job: ${check_skipped(
    syntax_check_job
  )}\n test_execution_job: ${check_skipped(
    test_execution_job
  )}\n build_statics_job:${check_skipped(
    build_statics_job
  )}\n deploy_job: ${check_skipped(deploy_job)}`,
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) console.log(error);
    else console.log("Email sent: " + info.response);
});

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 363:
/***/ ((module) => {

module.exports = eval("require")("nodemailer");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(71);
/******/ })()
;