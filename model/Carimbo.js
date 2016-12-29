var Carimbo = function(modelo){
	// var carimbos = [];

	this.modelo = modelo;
	this.borracha = {
		altura: 0,
		largura: 0
	}
	this.custo = 0;
	this.preco = 0;
	// carimbos.push(this);
}

Carimbo.prototype.setAltura = function(altura){
	this.borracha.altura = altura;
};

Carimbo.prototype.setLargura = function(largura) {
	this.borracha.largura = largura
};

Carimbo.prototype.setCusto = function(custo) {
	this.custo = custo;
};

Carimbo.prototype.setPreco = function(preco) {
	this.preco = preco;
};

Carimbo.prototype.getLucro = function() {
	return this.preco - this.custo;
};





var gl1847 = new Carimbo('GL-1847');
gl1847.setAltura(17);
gl1847.setLargura(47);
gl1847.setCusto(4.50);
gl1847.setPreco(12);


var gl4060 = new Carimbo('GL-4060');
gl4060.setAltura(40);
gl4060.setLargura(60);
gl4060.setCusto(13.40);
gl4060.setPreco(20.40);


console.log(gl1847.getLucro());
console.log(gl4060.getLucro());