

 async function pasteCard(){
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let data= await fetch(url)
    let data1 = await data.json()
    let res = data1[0].vouchers
    console.log(res)
    appendData(res)
}

pasteCard()


let arr = JSON.parse(localStorage.getItem("purchase")) || []

function appendData(res){
    let container = document.getElementById("voucher_list")

    res.forEach(ele => {
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
        btn.innerText="Purchase"
        btn.addEventListener("click",function(){
            purchase(ele)
        })

        card.append(img,name,price,btn)
        container.append(card)
    });

}

    


    let sum = 0
    for (let i=0; i<arr.length; i++){
    sum = sum + arr[i].price
    }
  
    let user =JSON.parse(localStorage.getItem("user"))
    let amou = document.getElementById("wallet_balance")
    amou.innerText= user.amount-sum || user.amount

function purchase(ele){

    let user =JSON.parse(localStorage.getItem("user"))
    let amou = document.getElementById("wallet_balance")
  
    if (ele.price<amou.innerText){
        
        amou.innerText=amou.innerText-ele.price
        alert ("Hurray!! Purchase Successfull")
        arr.push(ele)
        localStorage.setItem("purchase",JSON.stringify(arr))
    }
    else{
        alert ("Insufficient Balance")
    }
}