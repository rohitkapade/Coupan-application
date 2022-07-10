
class obj{
    constructor(name,em,add,amo){
        this.name=name,
        this.email=em,
        this.add=add,
        this.amount=amo
    }
}

function DataToLS(e){
    e.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let add = document.getElementById("address").value
    let amount = document.getElementById("amount").value

    let Data = new obj(name,email,add,amount)

    localStorage.setItem("user",JSON.stringify(Data))

    document.getElementById("name").value=null
    document.getElementById("email").value=null
    document.getElementById("address").value=null
    document.getElementById("amount").value=null
  
}