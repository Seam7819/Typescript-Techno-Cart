{
    class BankAccount{
        id: number;
        name: string;
        private balance : number;

        constructor(id:number,name:string,balance:number){
            this.id = id,
            this.name = name ,
            this.balance = balance
        }
        addBalance(deposit : number){
            this.balance = this.balance + deposit;
        }
        getBalance(){
            return this.balance;
        }
    }

    
    // instance 
    const accountOwner1 = new BankAccount(191,"Snu Seam",0);
    console.log(accountOwner1);
    accountOwner1.addBalance(20);
    const myBalance = accountOwner1.getBalance();
    console.log(myBalance);
}