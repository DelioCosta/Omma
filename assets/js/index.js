//item1
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

/*const exibirReceitas = (listaDeReceitas) => {
    let resultado =[];
    console.log("\n-------------------------------------\n");
    for( let i = 0; i<listaDeReceitas.length; i++){
        resultado.push(`Titulo: ${listaDeReceitas[i].titulo} , Ingredientes: ${listaDeReceitas[i].ingredientes} , Vegano: ${listaDeReceitas[i].vegano} `);
    }
    return resultado.join("\n\n");
    
};*/

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

