function enderecoUsuario(){
	var endereco = { 
	 	rua: "Rua dos pinheiros", 
	 	numero: 1293, 
	 	bairro: "Centro", 
		cidade: "São Paulo", 
		uf: "SP"}
		;
	var t = "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", No bairro " + endereco.bairro + " na rua " + endereco.rua + " com num " + endereco.numero;
	document.getElementById("txt").innerHTML = t;
	return 0;
}


function intP()
{
	var n1 = document.getElementById("1").value;
	var n2 = document.getElementById("2").value;
	n1 = parseInt(n1);
	n2= parseInt(n2);
	var a= 0;
	var b= 0;
	var texto ="Os números pares do intervalo fornecido são:"
	if(n1<n2)
	{a = n1;
	b = n2;
	}

	else
	{b = n1;
	a = n2;
	}
		
	for(a;a<=b;a++)
	{if(a%2==0)
	texto+= a+ ",";
	}
	
	alert (texto);
}

function jp()
{
	var skills = ["Javascript", "ReactJS", "React Native"];
		if(skills.indexOf("Javascript") == -1)
			{
			alert(" Não ");
			return 0;
			}
		else{
			x = 1;	
				alert(" Sim ");
			return 1;
		}
}

function tpex()
{
	var n1 = document.getElementById("entrada1").value;
	n1 = parseInt(n1);
	if(n1>=0 && n1<2)
		alert ("Iniciante");
	else if(n1>1 && n1<=3)
		alert ("Intermediário");
		else if(n1>3 && n1<=6)
			alert ("Avançado");	
			else if(n1>=7)
				alert ("Jedi master");
				else if(n1<0)
					alert ("Número invalido");
}




function usu()
{
var usu = 
[
    
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	}
	{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
];

    var diego = 
		{
			nome: "",
			habilidades: [""]
		};
    var gabriel = 
		{
			nome: "",
			habilidades: [""]
		};
    
	gabriel=usuarios[1];
	diego=usuarios[0];
		var diego_text="O " + diego.nome + " possui as habilidades: " + diego.habilidades;
		var gabriel_text = " O " + gabriel.nome + " possui as habilidades: " + gabriel.habilidades + ".";
		document.getElementById("m1").innerHTML = diego_text;
	document.getElementById("m2").innerHTML = gabriel_text;
}

function quad()
{
	var quad = document.createElement('div');
	quad.style.width = '100px';
	quad.style.height = '100px';
	quad.style.backgroundColor = '#FF0000';
	quad.style.marginBottom = '1px'
	quad.style.display = 'inline-block';
	var res = document.getElementById('teste');
	res.appendChild(quad);
}

function qcor()
{
	var qc = document.createElement('div');
	qc.style.width = '100px';
	qc.style.height = '100px';
	qc.style.backgroundColor = '#FF0000';
	qc.style.marginBottom = '1px'
	qc.style.display = 'inline-block';
	var res = document.getElementById('teste');
	qc.onmouseover = function() {
        qc.style.backgroundColor = corale();
      } 
	res.appendChild(qc);
}

function corale() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function a()
{
		var nomes = ["Diego", "Gabriel", "Lucas"];
    	var elemento = document.createElement('ul');
			elemento.style.display = 'inline-block';
	for (i of nomes) 
	{
      var acrescentarli = document.createElement('li');
      var texto = document.createTextNode(i);

		acrescentarli.appendChild(texto);
		elemento.appendChild(acrescentarli);
		}

		var resultado = document.getElementById('teste');
		resultado.appendChild(elemento);


}

var nomes_array = ["Diego", "Gabriel", "Lucas"];
function add ()
{
	var elemento_quarto = document.getElementById('teste');
	var valordoinput = document.getElementById('text').value;
	for (i of nomes_array)
		{
			var acrescentarli = document.createElement('li');
			var texto = document.createTextNode(i);

				acrescentarli.appendChild(texto);
				elemento_quarto.appendChild(acrescentarli);
		}

		var acrescentarli = document.createElement('li');
		var texto = document.createTextNode(valordoinput);

	acrescentarli.appendChild(texto);
elemento_quarto.appendChild(acrescentarli);

nomes_array.splice(0,3);
}