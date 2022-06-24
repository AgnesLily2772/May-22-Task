const pageSetup = document.createElement("div");
pageSetup.className = "mydiv"
let element = document.createElement("p");
element.className = "myelement"
let string;
function countDown(num, callback) {
    setTimeout(() => {callback(num)}, 1000);        
}
function printNum(val) {
    element.innerHTML = val;
    console.log("cllback",val);
    val--;
    if(val===-1)
    {
        let ImgDiv = document.createElement("div");
        ImgDiv.className = "mydiv";
        string = document.createElement("img")
        string.src= "./image.gif"
        string.className = "mystring";
        ImgDiv.append(string);
        pageSetup.remove();
        document.body.append(ImgDiv)
    }
    else{
        countDown(val,printNum)
    }
pageSetup.append(element);

}
let num = 10;
countDown(num, printNum);
document.body.append(pageSetup)