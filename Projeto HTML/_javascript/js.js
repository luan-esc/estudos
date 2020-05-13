var imagens =["_imagem/xbox-banner.jpg","_imagem/ps3-banner.jpg","_imagem/banner1.jpg"];
var imagemAtual = 0;

function trocarImagem(){
	imagemAtual = (imagemAtual + 1) %3;
	document.querySelector('.imgg img').src = imagens[imagemAtual];
}
setInterval(trocarImagem, 5000);