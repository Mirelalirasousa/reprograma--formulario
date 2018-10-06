const alunos = document.querySelectorAll(".aluno");

for(let i = 0; i<alunos.length; i++) {
  
    const aluno = alunos[i]
    const notaUm = aluno.querySelector(".info-notaum").textContent;
    const notaDois = aluno.querySelector(".info-notadois").textContent;
    const media = aluno.querySelector(".info-media");
    media.textContent = calculaMedia(notaUm, notaDois);

};
function calculaMedia(valor1,valor2){
    return((parseFloat(valor1) + parseFloat(valor2)) /2).toFixed(2);
};