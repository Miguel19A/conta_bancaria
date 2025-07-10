import { Conta } from './src/model/conta';

export const main = () => {
    const conta = new Conta(1, 'Miguel', 1000);
    conta.visualizar();
    conta.depositar(500);
    conta.visualizar();
    conta.sacar(500);
    conta.visualizar();
}

main();