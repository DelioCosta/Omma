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

console.log(listaDeReceitas);

cadastrarReceita(
    2,
    "ovo frito",
    "simples",
    ["1 ovo", "1 colher de azeite", "sal a gosto"],
    "Lorem ipsum blablabal...",
    "https://youtube.com",
    false,
);

console.log(listaDeReceitas);