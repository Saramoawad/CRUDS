
/*------------------------ */

var productNameInput=document.getElementById("productName"); //input kolo
var productPriceInput=document.getElementById("productPrice");
var productCatInput=document.getElementById("productCat");
var productDescInput=document.getElementById("productDesc");
var mood="create";
var demo;
var productContainer;
if(localStorage.getItem("productslist")==null){
    productContainer=[]
}
else{
    productContainer=JSON.parse(localStorage.getItem("productslist"));
    desplayProduct();

}
function addProduct(){
    if(checkInput()==true){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCatInput.value,
        description:productDescInput.value
    }
    
    if(mood==="create"){
    productContainer.push(product);
}
else{
    productContainer[demo]=product;
    mood="create";
    document.getElementById("submit").innerHTML="add product"
}
    console.log(productContainer);
    localStorage.setItem("productslist",JSON.stringify(productContainer));
    clearForm();
    desplayProduct();
}
else{
    alert("enter data")
}

}
function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productCatInput.value="";
    productDescInput.value="";
}
function desplayProduct(){
    var cartoona="";
    for(var i=0;i<productContainer.length;i++){
        cartoona+=`
        <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-info">update</button></td>
            <td><button onclick="delProduct(${i})" class="btn btn-outline-danger">delete</button></td>
            
        </tr>
        
        `

    }
    document.getElementById("tBody").innerHTML=cartoona;
}
function checkInput(){
    if(
        productNameInput.value!=""&&
        productPriceInput.value!=""&&
        productCatInput.value!=""&&
        productDescInput.value!=""
    ){
        return true
    }
    else {
        return false
    }
}
function delProduct(index){
    productContainer.splice(index,1)
    console.log(productContainer);
    localStorage.setItem("productslist",JSON.stringify(productContainer));
    desplayProduct();

}
function searchProduct(term){
    var cartoona=``;
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            cartoona+=` <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td><button class="btn btn-outline-info">update</button></td>
            <td><button onclick="delProduct(${i})" class="btn btn-outline-danger">delete</button></td>
            
        </tr>
            `
        }
        // else{
        //     console.log("ay haga")
        // }
        document.getElementById("tBody").innerHTML=cartoona
    }

}
/*update */
function updateProduct(i){
    productNameInput.value=productContainer[i].name ;
    productPriceInput.value=productContainer[i].price ;
    productCatInput.value=productContainer[i].category ;
    productDescInput.value=productContainer[i].description ;
    document.getElementById("submit").innerHTML="update"
    mood="update";
    demo=i
}





