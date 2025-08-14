// // Field Name
// document.body.appendChild(document.createTextNode('Nome: '));
// const nomeField = document.createElement('input');
// nomeField.type = 'text';
// nomeField.placeholder = 'Digite seu nome';
// document.body.appendChild(nomeField);
// document.body.appendChild(document.createElement('br'));

// //Field Nota 1
// document.body.appendChild(document.createTextNode('Nota 1: '));
// const nota1 = document.createElement('input');
// nota1.type = 'number';
// nota1.placeholder = 'Digite sua primeira nota';
// document.body.appendChild(nota1);
// document.body.appendChild(document.createElement('br'));

// //Field Nota 2
// document.body.appendChild(document.createTextNode('Nota 2: '));
// const nota2 = document.createElement('input');
// nota2.type = 'number';
// nota2.placeholder = 'Digite sua segunda nota';
// document.body.appendChild(nota2);
// document.body.appendChild(document.createElement('br'));

// //Field Nota 3
// document.body.appendChild(document.createTextNode('Nota 3: '));
// const nota3 = document.createElement('input');
// nota3.type = 'number';
// nota3.placeholder = 'Digite sua terceira nota';
// document.body.appendChild(nota3);
// document.body.appendChild(document.createElement('br'));

// //Botao Salvar
// const botao = document.createElement('button');
// botao.textContent = 'Salvar';
// document.body.appendChild(botao);

// //Resultado
// document.body.appendChild(document.createElement('br'));
// const result = document.createElement('p');
// document.body.appendChild(result);

//Get Elements
const nameField = document.getElementById('name');
const n1Field = document.getElementById('nota1');
const n2Field = document.getElementById('nota2');
const n3Field = document.getElementById('nota3');
const result = document.getElementById('result');
const botaoCalc = document.getElementById('botao');

//Funcao Botao Salvar
botaoCalc.addEventListener ("click", () => {
	const nome = nameField.value.trim();
	const n1 = parseFloat(n1Field.value) || 0;
	const n2 = parseFloat(n2Field.value) || 0;
	const n3 = parseFloat(n3Field.value) || 0;

	if (typeof(nome) == '') {
		alert('Nome invalido!');
		return;
	}

	if (n1 < 0 || n1 > 100) {
		alert('Nota 1 invalida! Digite valores entre 0 e 100.');
		return
	}

	if (n2 < 0 || n2 > 100) {
		alert('Nota 2 invalida! Digite valores entre 0 e 100.');
		return
	}

	if (n3 < 0 || n3 > 100) {
		alert('Nota 3 invalida! Digite valores entre 0 e 100.');
		return
	}

	result.innerHTML = calcMedia(nome, n1, n2, n3);
});

const calcMedia = (nome, n1, n2, n3) => {	
	const media = (n1 + n2 + n3) / 3;

	if (media < 50) {
		return `Desculpe, ${nome},<br>Sua Media foi ${media.toFixed(2)},<br>Reprovado!`;
	}

	if (media < 60) {
		return `Desculpe, ${nome},<br>Sua Media foi ${media.toFixed(2)},<br>Recuperação!`;
	}

	return `Parabens, ${nome},<br>Sua Media foi ${media.toFixed(2)},<br>Aprovado!`;
};