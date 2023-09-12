//Já entendemos que o Git é uma ferramenta importante para trabalharmos com diferentes versões de um mesmo projeto. Também já sabemos que o Github funciona como uma rede social para pessoas desenvolvedoras e na área tech para o compartilhamento desses projetos de forma remota. No entanto, é comum sentirmos dúvidas sobre os vários comandos e suas funcionalidades. Vamos entender para quê serve os comandos mais usuais?

/*No artigo O que é Git e Github: como configurar e primeiros passos você encontra o básico sobre Git e Github e também uma listinha com os principais comandos."

Na documentação oficial do Git você encontra uma lista com todos os comandos e suas especificações em Português!

Uma dica para você se familiarizar é testar! Isso mesmo, realize testes, treine, pois com a prática constante esses comandos serão naturais para você!

Bons estudos!*/

const git_Add = {
    Comando: "git add",
    Descricao: "git add . : Para adicionar todas as modificações realizadas de uma só vez"
}

const git_Commit = {
    Comando: "git commit",
    Descricao: "git commit -m “mensagem do commit” : usado quando queremos capturar e salvar o estado atual do repositório;"
}
const git_Status = {
    Comando: "git status",
    Descricao: "git status: serve para listar todos os arquivos que foram modificados;"
}
const git_Push = {
    Comando: "git push",
    Descricao: "git push: utilizado para envio das alterações gravadas no diretório local para o repositório remoto. É utilizado para atualizar o repositório remoto com os commits feitos no repositório local;"
}
const git_Restore = {
    Comando: "git restore",
    Descricao: "git restore: trabalha com a restauração de arquivos e do projeto, voltando para um estado anterior através;"
}
const git_Log  = {
    Comando: "git log",
    Descricao: "git log: exibe o histórico de commits do repositório. Mostra informações como o autor do commit, data, hora e mensagem associada a cada commit;"
}
const git_Log_Oneline = {
    Comando: "git log oneline",
    Descricao: "git log --oneline : mostra o log de forma resumida, em apenas uma linha;"
}
const git_Clone = {
    Comando: "git clone",
    Descricao: "git clone: clona um repositório para o seu ambiente local. É utilizado para obter uma cópia completa do repositório, incluindo todos os arquivos e histórico de commits. É utilizado quando você deseja obter uma cópia completa de um repositório remoto para começar um novo projeto ou colaborar com um projeto existente;"
}
const git_Branch = {
    Comando: "git branch",
    Descricao: "git branch: cria, lista ou exclui branches. Um branch é uma ramificação do histórico de commits, permitindo trabalhar em paralelo em diferentes versões do projeto;"
}
const git_Checkout = {
    Comando: "git checkout",
    Descricao: "git checkout: altera o branch atual ou restaura arquivos. É utilizado para alternar entre branches existentes ou restaurar arquivos para uma versão anterior. Atenção: é um comando que tem mais de uma função, se você quiser apenas trocar de branch sem alterar modificações, você pode utilizar o git switch;"
}
const git_Checkout_B = {
    Comando: "git checkout -b",
    Descricao: "git checkout -b “informe_o_nome_da_branch”: Cria uma nova branch e muda para ela;"
}
const git_Switch = {
    Comando: "git switch",
    Descricao: "git switch “nome_da_branch”: troca de uma branch para outra sem realizar alterações de estado. Observação: comando ainda em fase de experimentação;"
}
const git_Merge = {
    Comando: "git merge",
    Descricao: "git merge: mescla alterações de um branch para outro. É utilizado para combinar as alterações feitas em um branch com outro, integrando as modificações;"
}
const git_Fetch = {
    Comando: "git fetch",
    Descricao: "git fetch: busca as alterações do repositório remoto, mas não as mescla com o branch atual. É para obter informações mais recentes do repositório e verificar se há mudanças. Diferente do git pull , que já copia as alterações do repositório remoto;"
}
const git_Diff = {
    Comando: "git diff",
    Descricao: "git diff: mostra as diferenças entre arquivos ou commits;"
}
const git_Reset = {
    Comando: "git reset",
    Descricao: "git reset: desfaz commits ou altera o estado do repositório;"
}
const git_Remote = {
    Comando: "git remote",
    Descricao: "git remote: gerencia repositórios remotos;"
}

const cheatSheetGit = [
    git_Add,
    git_Commit,
    git_Status,
    git_Push,
    git_Restore,
    git_Log,
    git_Log_Oneline,
    git_Clone,
    git_Branch,
    git_Checkout,
    git_Checkout_B,
    git_Switch,
    git_Merge,
    git_Fetch,
    git_Diff,
    git_Reset,
    git_Remote
];


function pesquisarComando() {
    const comandoInput = document.getElementById("comando").value.toLowerCase();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    const comandoEncontrado = cheatSheetGit.find(comando => comando.Comando.toLowerCase() === comandoInput);

    if (comandoEncontrado) {
        resultadoDiv.innerHTML = `<p><strong>${comandoEncontrado.Comando}:</strong> ${comandoEncontrado.Descricao}</p>`;
    } else {
        resultadoDiv.innerHTML = "<p>Comando não encontrado.</p>";
    }
}

