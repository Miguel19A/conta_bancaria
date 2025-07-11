import { Conta } from "../conta";   
export interface ContaRepository  {
    procurarContaPorNumero(numero: number): void;
    listarContas(): void;
    cadastrarConta(conta: Conta): void;
    atualizarConta(conta: Conta): void;
    deletarConta(conta: Conta): void;

    sacar(conta: Conta, valor: number): void;
    depositar(conta: Conta, valor: number): void;
    transferir(contaOrigem: Conta, contaDestino: Conta, valor: number): void;
}