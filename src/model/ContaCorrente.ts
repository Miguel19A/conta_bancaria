import { Conta } from "./Conta";


export class ContaCorrente extends Conta{
     private _limite: number;
     constructor(numero: number, titular: string, saldo: number, limite: number){
         super(numero, titular, saldo);
         this._limite = limite;
     }

     public get limite(){
        return this._limite;
     }

     public set limite(limite: number){
        this._limite = limite;
     }

     sacar(valor: number){
          if((this._saldo + this._limite) < valor){
             console.log(`\nSaldo insuficiente!`);
          }else{
             this._saldo -=  valor;
             console.log(`Saque de R${valor} realizado com sucesso!`); 
          }
     }

     public visualizar(): void {
         super.visualizar();
         console.log(`Limite: ${this._limite}`)
     }
}