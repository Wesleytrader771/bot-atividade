const { exec } = require('child_process')

function fazerCommit() {
  const comando = `
  echo ${Date.now()} >> atividade.txt
  git add .
  git commit -m "auto commit"
  git push
  `

  exec(comando, (err) => {
    if (err) return console.log(err)
    console.log('Commit feito 🚀')
  })
}

module.exports = { fazerCommit }