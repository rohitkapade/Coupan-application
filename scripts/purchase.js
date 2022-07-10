
let arr = JSON.parse(localStorage.getItem("purchase"))

function appendPurchase(){

    let container = document.getElementById("purchased_vouchers")

    arr.forEach(function(ele,ind) {
        let card = document.createElement("div")
        card.setAttribute("class","voucher")

        let img = document.createElement("img")
        img.setAttribute("class","image")
        img.src=ele.image

        let name = document.createElement("h3")
        name.innerText=ele.name

        let price = document.createElement("h3")
        price.innerText=ele.price

        let btn = document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            RemovePur(ele,ind)
        })

        card.append(img,name,price,btn)
        container.append(card)
    });
}

appendPurchase()





function RemovePur(ele,ind){
    arr.splice(ele,1)
    localStorage.setItem("purchase",JSON.stringify(arr))
    window.location.reload()
}





let sum = 0
for (let i=0; i<arr.length; i++){
    sum = sum + arr[i].price
}

let pur = document.getElementById("wallet_balance")
pur.innerText=sum