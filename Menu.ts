import readlineSync from 'readline-sync';

let opcao: number;
export function main() {

    while (true) {
        console.log(`==================================`);
        console.log(`\tBANCO DO BRAZIL COM Z`);
        console.log(`==================================\n`);
        console.log(`1- Criar Conta`);
        console.log(`2- Listar todas as Contas`);
        console.log(`3- Buscar Conta por Número`);
        console.log(`4- Atualizar Dados da Conta`);
        console.log(`5- Apagar Conta`);
        console.log(`6- Sacar`);
        console.log(`7- Depositar`);
        console.log(`8- Transferir valores entre Contas`);
        console.log(`9- Sair`);
        console.log(`==================================`);

        console.log(`\tEscolha uma opcao: `);
        opcao = Number(readlineSync.question(`\t\t`));

        if (opcao === 1) {
            console.log(`\n\n**Criar Conta**\n\n`);
        } else if (opcao === 2) {
            console.log(`\n\n**Listar todas as contas**\n\n`);
        } else if (opcao === 3) {
            console.log(`\n\n**Buscar Conta por Número**\n\n`);
        } else if (opcao === 4) {
            console.log(`\n\n**Atualizar Dados da Conta**\n\n`);
        } else if (opcao === 5) {
            console.log(`\n\nApagar Conta`);
        } else if (opcao === 6) {
            console.log(`\n\n**Sacar**\n\n`);
        } else if (opcao === 7) {
            console.log(`\n\n**Depositar**\n\n`);
        } else if (opcao === 8) {
            console.log(`\n\n**Transferir valores entre Contas**\n\n`);
        } else if (opcao === 9) {
            console.log(`\n\n**Sair**\n\n`);
            break;
        } else {
            console.log(`Opção inválida!`);
        }

    }

}

export function sobre():void {
    console.log(`\n==================================`);
    console.log(`Desenvolvido por: Miguel Júnior Adão`);
    console.log(`Email: migueladao007@gmail.com`);
    console.log(`github.com https://github.com/Miguel19A`);
    console.log(`===================================`);
}
main();