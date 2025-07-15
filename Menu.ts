import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { ContaController } from './src/controller/ContaController';
import { Conta } from './src/model/Conta';

let opcao,  numero,  saldo: number; 
let titular : string;
const tiposDeContas = ['Conta Corrente', 'Conta Poupanca'];
const contas: ContaController = new ContaController();

export const main = () => {
    while (true) {
        console.log(colors.bg.black, colors.fg.yellow);
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
        console.log(colors.reset);
        console.log(`\tEscolha uma opcao: `);

        opcao = Number(readlineSync.question(`\t\t`));

        if (opcao === 1) {
            console.log(`\n\n**Criar Conta**\n\n ${colors.reset}`);
            titular = readlineSync.question(`Qual o nome do titular da Conta: `);
            numero = Number(readlineSync.question(`Qual o numero da Conta: `));
            saldo = Number(readlineSync.question(`Qual o saldo da Conta: `));
            console.log(`Tipo de Conta: ${tiposDeContas[0]}`);
    
        } else if (opcao === 2) {
            console.log(`\n\n**Listar todas as contas**\n\n ${colors.reset}`);
            contas.listarContas();

        } else if (opcao === 3) {
            console.log(`\n\n**Buscar Conta por Número**\n\n ${colors.reset}`);
            numero = Number(readlineSync.question(`Digite o numero da Conta: `));
            contas.procurarContaPorNumero(numero);

        } else if (opcao === 4) {
            console.log(`\n\n**Atualizar Dados da Conta**\n\n ${colors.reset}`);
            numero = Number(readlineSync.question(`Digite o numero da Conta: `));
            const conta = contas.procurarContaPorNumero(numero);
            if(conta) {
                titular = readlineSync.question(`Qual o nome do titular da Conta: `);
                saldo = Number(readlineSync.question(`Qual o saldo da Conta: `));
                console.log(`Tipo de Conta: ${tiposDeContas[0]}`);
            }else{
                console.log(`\nConta não encontrada.\n`);
            }
           
        } else if (opcao === 5) {
            console.log(`\n\n**Apagar Conta** ${colors.reset}`);
            const numero = Number(readlineSync.question(`Digite o numero da que deseja apagar: `));
            const conta = contas.procurarContaPorNumero(numero);
            if(conta){
                contas.deletarConta(conta);
            }else{
                console.log(`\nConta não encontrada.\n`);
            }
            
        } else if (opcao === 6) {
            console.log(`\n\n**Sacar**\n\n ${colors.reset}`);
            numero = Number(readlineSync.question(`Digite o numero da Conta: `));
            const conta = contas.procurarContaPorNumero(numero);
            if(conta){
                const valor = Number(readlineSync.question(`Digite o valor que deseja sacar: `));
                contas.sacar(conta.numero, valor);
            }
           

        } else if (opcao === 7) {
            console.log(`\n\n**Depositar**\n\n`);
            numero = Number(readlineSync.question(`Digite o numero da Conta: `));
            const conta = contas.procurarContaPorNumero(numero);
            if(conta){
                const valor = Number(readlineSync.question(`Digite o valor que deseja depositar: `));
                contas.depositar(conta, valor);
            }else{
                console.log(`\nConta não encontrada.\n`);
            }
           

        } else if (opcao === 8) {
            console.log(`\n\n**Transferir valores entre Contas**\n\n ${colors.reset}`);
            numero = Number(readlineSync.question(`Digite o numero da Conta de Origem: `));
            const contaOrigem = contas.procurarContaPorNumero(numero);
            if(contaOrigem){
                numero = Number(readlineSync.question(`Digite o numero da Conta de Destino: `));
                const contaDestino = contas.procurarContaPorNumero(numero);
                if(contaDestino){
                    const valor = Number(readlineSync.question(`Digite o valor que deseja transferir: `));
                    contas.transferir(contaOrigem, contaDestino, valor);
                }else{
                    console.log(`\nConta de Destino não encontrada.\n`);
                }
            }
           
        } else if (opcao === 9) {
            console.log(`\n\n**Saindo do sistema...**\n\n ${colors.reset}`);
            break;

        } else {
            console.log(`\nOpção inválida!`);
        }
    }
};

export function sobre(): void {
    console.log(`\n==================================`);
    console.log(`Desenvolvido por: Miguel Júnior Adão`);
    console.log(`Email: migueladao007@gmail.com`);
    console.log(`GitHub: https://github.com/Miguel19A`);
    console.log(`===================================`);
}

main();

