const { exec } = require('child_process')

function fazerCommit() {
  const comando = "echo %date% %time% >> atividade.txt && git add . && git commit -m \"auto commit\" && git push origin master"

  exec(comando, { shell: "cmd.exe" }, (err, stdout, stderr) => {
    if (err) {
      console.log("Erro:", err)
      console.log(stderr)
      return
    }
    console.log("Commit + Push feito 🚀")
    console.log(stdout)
  })
}

module.exports = { fazerCommit }