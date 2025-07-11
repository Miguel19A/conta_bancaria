import { Conta } from './src/model/conta';
import { ContaCorrente, } from './src/model/ContaCorrente';

export const main = () => {
    const conta = new Conta(1, 'Miguel', 1000);
    conta.visualizar();
    conta.depositar(500);
    conta.visualizar();
    conta.sacar(500);
    conta.visualizar();

    const conta2: ContaCorrente = new ContaCorrente(1, 'Miguel', 1000, 200);

    conta2.sacar(500);
    conta2.visualizar();
    conta2.depositar(4000);
    conta2.visualizar();
}

main();