import { Conta } from "./conta";

export class ContaPoupanca extends Conta {

    private _aniversario: number;

    constructor(numero: number, titular: string, 
        saldo: number, aniversario: number) {
        super(numero,  titular, saldo);
        this._aniversario = aniversario;
    }
    public get aniversario() {
        return this._aniversario;
    }

    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }

     sacar(valor: number){
          if(this._saldo < valor){
             console.log(`\nSaldo insuficiente!`);
          }else{
             this._saldo -=  valor;
             console.log(`Saque de R${valor} realizado com sucesso!`); 
          }
     }

    public visualizar(): void {
        super.visualizar();
        console.log("Dia do aniversário: " + this._aniversario);
    }

}