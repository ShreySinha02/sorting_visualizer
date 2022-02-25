var start=null,end=null,time=null;

// const com=document.querySelector(".complexity");
async function insertion(){
    console.log('In insertion()');
    start=Date.now()
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';
        console.log(key);
        await waitforme(delay);
        
       

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);
            

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
    }
    end=Date.now();
    //  para = document.createElement("p");
    para.innerHTML = `${(end-start)/1000} second`;
    document.querySelector(".complexity").appendChild(para);
}
// node = document.createElement("h4");

// node.appendChild(textnode);
const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    com.innerText='';
    node.innerText='';
    textnode = document.createTextNode("O(n²) in the average and worst case, and O(n) in the best case");
    node.appendChild(textnode);
    com.appendChild(node);
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

