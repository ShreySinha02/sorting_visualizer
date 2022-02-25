var start=null,end=null,time=null;
var para= document.createElement("p");
var com=document.querySelector(".complexity");
async function bubble() {
     start=Date.now()
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = '#FF00FF';
            ele[j+1].style.background = '#FF00FF';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
       
    }
    ele[0].style.background = 'green';
     end=Date.now();
    //  document.createElement("h4").innerHTML(end-start);
     
    para.innerHTML = `${(end-start)/1000} second`;
    document.querySelector(".complexity").appendChild(para);
     console.log(end-start);
}

var node = document.createElement("h4");
var textnode;
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    com.innerText='';
    node.innerText='';
     textnode = document.createTextNode("O(n^2)");
    node.appendChild(textnode);
    com.appendChild(node);
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();

});
