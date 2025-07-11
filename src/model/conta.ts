
export class Conta {
    private _numero: number;
    private _titular: string;
    public _saldo: number;

    constructor(numero: number, titular: string, saldo: number){
        this._numero = numero;
        this._titular = titular;
        this._saldo = saldo;

    }

     public get numero(): number {
        return this._numero;
    }
    public set numero(numero: number) {
        this._numero = numero;
    }
    
    public get titular(): string {
        return this._titular ;
    }
    public set titular(titular: string) {
        this._titular = titular;
    }
    
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

     public depositar(valor:number): void {
        this._saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso!`);
    }

     public sacar(valor: number): void{
        if( this._saldo < valor){
            console.log(`Saldo insuficiente!`);
        }else{
             this._saldo -=  valor;
             console.log(`Saque de R${valor} realizado com sucesso!`); 
        }
       
    }

   public visualizar(): void{
       console.log(`Conta: ${this._numero} | Titular: ${this._titular} | Saldo: R$${this._saldo}`)
   }
}



