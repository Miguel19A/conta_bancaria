
import { Conta } from "../model/Conta";
import { ContaRepository } from "../model/Repository/ContaReposity";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private contas: Conta[] = [];

    procurarContaPorNumero(numero: number): Conta | undefined{
        const buscarConta = this.buscarNoArray(numero);
        if(buscarConta !== null) {
            buscarConta.visualizar();
        } else {
            console.log(`\nConta número ${numero} não encontrada.${colors.reset}\n`);
            return undefined;
        }
    }

    listarContas(): void {
        for (let conta of this.contas) {
            console.log(conta);
        }
    }

    cadastrarConta(conta: Conta): void {
        this.contas.push(conta);
        console.log(`\nA Conta número ${conta.numero} foi criada com sucesso!\n`);
    }

    atualizarConta(conta: Conta): void {
        const index = this.contas.findIndex(c => c.numero === conta.numero);
        if (index !== -1) {
            this.contas[index] = conta;
            console.log(`\nConta número ${conta.numero} atualizada com sucesso!\n`);
        } else {
            console.log(`\nConta número ${conta.numero} não encontrada.\n`);
        }
    }

    deletarConta(conta: Conta): void {
       const buscarConta = this.buscarNoArray(conta.numero);
        if(buscarConta !== null) {
            const index = this.contas.indexOf(buscarConta);
            this.contas.splice(index, 1);
            console.log(`\nConta número ${conta.numero} deletada com sucesso!\n`);
        }else {
            console.log(`\nConta número ${conta.numero} não encontrada.\n`);
        }
    }

    transferir(contaOrigem: Conta, contaDestino: Conta, valor: number): void {
        let contaOrigemTransferencia = this.buscarNoArray(contaOrigem.numero);
        let contaDestinoTransferencia = this.buscarNoArray(contaDestino.numero);
        if(contaOrigemTransferencia !== null && contaDestinoTransferencia !== null) {
            if(contaDestinoTransferencia.depositar(valor) === undefined) {
                console.log(`\nTransferência de R$${valor} realizado com sucesso!\n`);
            }
        }else{
            console.log(`A conta de origem ou de destino nao foram encontradas!`);
        }
    }

   public depositar(conta: Conta, valor: number): void {
        conta.saldo += valor;
        console.log(`\nDepósito de R$${valor} realizado com sucesso!\n`);
    }

   public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if(conta !== null) {
           if(conta.sacar(valor) === undefined) {
            console.log(`\nSaque de R$${valor} realizado com sucesso!\n`);
           }else{
            console.log(`\nSaldo insuficiente!\n`);
           }
        }

    }

    public buscarNoArray(numero: number): Conta | null {
        for(let conta of this. contas) {
            if(conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }
}
