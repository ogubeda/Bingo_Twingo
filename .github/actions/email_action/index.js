const nodemailer = require("nodemailer");
const core = require("@actions/core");
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