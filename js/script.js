var BankUsers=[] 
function addUser(){ // name , id , balance 
    var name = prompt("Enter user name")
    var id = prompt("Enter your id")
    var balance = prompt("Enter your balance")

    BankUsers.push({
        name:name,
        id:id,
        balance:balance
    })

}

addUser()
addUser()
addUser()
console.table(BankUsers);

function editUserBalanceById() { // id , newBalance
    var id = prompt("Enter id of user to edit his balane")
    var newBanalce = prompt("Enter the new balane")

    var bankUser = BankUsers.find(element => element.id == id);
    if(bankUser == undefined){
        alert("please Enter a valid Id")
        editUserBalanceById()
    }
    else{
    bankUser.balance = newBanalce;
    console.table(BankUsers)
    }

}
editUserBalanceById()
function deleteUserById(){
    var id = prompt("Enter id of user to delete him")

    var userIndex = BankUsers.findIndex(element => element.id == id);
    if(userIndex < 0){
        alert("please Enter a valid Id")
        deleteUserById()
    }else{
        BankUsers.splice(userIndex,1)
        console.table(BankUsers)
    }
} 
deleteUserById()
