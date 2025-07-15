import { Conta } from "../Conta";  
export interface ContaRepository  {
    procurarContaPorNumero(numero: number) : Conta | undefined;
    listarContas(): void;
    cadastrarConta(conta: Conta): void;
    atualizarConta(conta: Conta): void;
    deletarConta(conta: Conta): void;

    transferir(contaOrigem: Conta, contaDestino: Conta, valor: number): void;
    depositar(conta: Conta, valor: number): void;
    sacar(numero: number, valor: number): void;
}