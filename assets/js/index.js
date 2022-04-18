/* //item1
const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

//item2
const listaDeReceitas = [
    {
        id: 1,
        titulo: "Cachorro Quente",
        dificuldade: "simples",
        ingredientes: ["1 pão de leite", "1 salsicha", "1 colher de batata palha"],
        preparo: "Lorem ipsum...",
        link: "https://youtube.com",
        vegano: false,
    },
];

const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    };

    listaDeReceitas.push(novaReceita);

    console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

//console.log(listaDeReceitas);

cadastrarReceita(
    2,
    "ovo frito",
    "simples",
    ["1 ovo", "1 colher de azeite", "sal a gosto"],
    "Lorem ipsum blablabal...",
    "https://youtube.com",
    false,
);

//console.log(listaDeReceitas);

const exibirReceitas = (listaDeReceitas) => {
    let resultado =[];
    console.log("\n-------------------------------------\n");
    for( let i = 0; i<listaDeReceitas.length; i++){
        resultado.push(`Titulo: ${listaDeReceitas[i].titulo} , Ingredientes: ${listaDeReceitas[i].ingredientes} , Vegano: ${listaDeReceitas[i].vegano} `);
    }
    return resultado.join("\n\n");
    
};

const exibirReceitas = () => {
    listaDeReceitas.forEach((receita, index) => {
        console.log("\n-------------------------------------\n");
        console.log(`Titulo: ${receita.titulo}\nIngredientes:`);
        receita.ingredientes.forEach((ingrediente) => {console.log(`- ${ingrediente}`)});
        console.log(`Vegano: ${receita.vegano} `)
    })
};

//exibirReceitas();

const deletarReceita = (id) =>{
    if (listaDeReceitas[id] === -1) {
        return console.log("Receita não encontrada");
    } else{
    listaDeReceitas.splice(id, 1);
    console.log(`\nItem ${id} removido com sucesso!`);
    }
};

//deletarReceita(1);

//console.log(exibirReceitas());
 const buscarReceita = (termoBuscado) => {
    return listaDeReceitas.filter((receita) => {
        return receita.titulo.toLowerCase().indexOf(termoBuscado) != -1; 
    });
}
//console.log(buscarReceita("quent"));

const atualizarReceita = (indice, novoTitulo, novoVegano, novosIngredientes) => {
    const i = listaDeReceitas.findIndex((receita) => {return receita.id === indice});
    if (i === -1) {
        return console.log("Receita não encontrada!");
      }
    let receita = listaDeReceitas[i];
    receita.titulo = novoTitulo;
    receita.vegano = novoVegano;
    novosIngredientes.forEach((ingrediente) => {
        receita.ingredientes.push(ingrediente);
    });
};
atualizarReceita(1, "Cachorro Quente Vegano", true, ["Maionese à gosto", "Ketchup à gosto", "Batata Palha"]);

exibirReceitas();
*/

const fs = require("fs");

const nomeEmpresa = "Sistema Omma";
console.log(nomeEmpresa);

const cadastrarReceita = (
  // id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const rawData = fs.readFileSync("receitas.json");
  const listaDeReceitas = JSON.parse(rawData);

  const indiceUltimaReceita = listaDeReceitas.length - 1;

  const novaReceita = {
    id: listaDeReceitas[indiceUltimaReceita].id + 1,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  fs.writeFileSync("receitas.json", JSON.stringify(listaDeReceitas));

  // console.log("Cadastro da receita " + titulo + " feito com sucesso!");
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};


const exibirReceitas = () => {

  const rawData = fs.readFileSync("receitas.json");
  const listaDeReceitas = JSON.parse(rawData);

  listaDeReceitas.forEach((receita) => {
    const { titulo, ingredientes, vegano } = receita;
    console.log("--------------------------------");
    console.log(`Título: ${titulo}`);

    console.log("Ingredientes:");
    ingredientes.forEach((ingrediente) => {
      console.log(`- ${ingrediente}`);
    });

    console.log("É vegano? ", vegano ? "Sim" : "Não");
    console.log("--------------------------------");
  });
};

const deletarReceita = (id) => {
  const rawData = fs.readFileSync("receitas.json");
  const listaDeReceitas = JSON.parse(rawData);

  const indiceReceita = listaDeReceitas.findIndex((receita) => {
    return receita.id === id;
  });

  if (indiceReceita === -1) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas.splice(indiceReceita, 1);

  fs.writeFileSync("receitas.json", JSON.stringify(listaDeReceitas));

  console.log("Receita deletada com sucesso!");
};

const buscarReceita = (termo) => {
  const rawData = fs.readFileSync("receitas.json");
  const listaDeReceitas = JSON.parse(rawData);
  return listaDeReceitas.filter((receita) => {
    return receita.titulo.toLowerCase().indexOf(termo) != -1;
  });
};



const atualizarReceita = (id, receitaAtualizada = {}) => {
  const rawData = fs.readFileSync("receitas.json");
  const listaDeReceitas = JSON.parse(rawData);

  const indiceReceita = listaDeReceitas.findIndex((receita) => {
    return receita.id === id;
  });

  if (indiceReceita === -1) {
    return console.log("Receita não encontrada");
  }

  listaDeReceitas[indiceReceita] = {
    ...listaDeReceitas[indiceReceita],
    ...receitaAtualizada,
  };

  console.log(`Receita "${receitaAtualizada.titulo}" atualizada com sucesso!`);

  fs.writeFileSync("receitas.json", JSON.stringify(listaDeReceitas));
};

// Cadastra uma nova receita
 cadastrarReceita(
  "Leite com Toddy",
  "simples",
  ["1 copo de leite", "2 colheres de toddy"],
  "Adicione duas colheres de toddy e mexa bem",
  "https://google.com",
  false
); 


//deletarReceita(1);

//atualizarReceita(8, {titulo:"Pipoca com bacon", ingredientes:["1 xicara de milho de pipoca", "100g de bacon", "2 colheres de óleo", "sal a gosto"]});

exibirReceitas();