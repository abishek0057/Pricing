const rangeInput = document.querySelector(".range-input");
const perMonthPrice = document.querySelector(".price");
const pageViews = document.querySelector(".page-view");
const discount = document.querySelector(".toggle-btn");

const discountPercent = 0.25;

let amount = [8,12,16,24,36];

let discountAmount = amount.map(x => x-x*discountPercent);

discount.addEventListener("change",(e)=>{
    console.log(e.target.checked);
    if(e.target.checked == false){
        rangeInput.addEventListener("input",(e)=>{
            let rangeInputValue = e.target.value;
            if(rangeInputValue==1){
                perMonthPrice.innerText = amount[0] +'.00';
                pageViews.innerText = "10K";
            }
            else if(rangeInputValue==2){
                perMonthPrice.innerText = amount[1] +'.00';
                pageViews.innerText = '50K';
            }
            else if(rangeInputValue==3){
                perMonthPrice.innerText = amount[2] +'.00';
                pageViews.innerText = '100K';
            }
            else if(rangeInputValue==4){
                perMonthPrice.innerText = amount[3] +'.00';
                pageViews.innerText = '500K';
            }
            else{
                perMonthPrice.innerText = amount[4] +'.00';
                pageViews.innerText = '1M';
            }    
        });
    }
    if(e.target.checked == true){
        rangeInput.addEventListener("input",(e)=>{
            let rangeInputValue = e.target.value;
            if(rangeInputValue==1){
                perMonthPrice.innerText = discountAmount[0] +'.00';
                pageViews.innerText = "10K";
            }
            else if(rangeInputValue==2){
                perMonthPrice.innerText = discountAmount[1] +'.00';
                pageViews.innerText = '50K';
            }
            else if(rangeInputValue==3){
                perMonthPrice.innerText = discountAmount[2] +'.00';
                pageViews.innerText = '100K';
            }
            else if(rangeInputValue==4){
                perMonthPrice.innerText = discountAmount[3] +'.00';
                pageViews.innerText = '500K';
            }
            else{
                perMonthPrice.innerText = discountAmount[4] +'.00';
                pageViews.innerText = '1M';
            }    
        });
    }

});

rangeInput.addEventListener("input",(e)=>{
    let rangeInputValue = e.target.value;
    if(rangeInputValue==1){
        perMonthPrice.innerText = amount[0] +'.00';
        pageViews.innerText = "10K";
    }
    else if(rangeInputValue==2){
        perMonthPrice.innerText = amount[1] +'.00';
        pageViews.innerText = '50K';
    }
    else if(rangeInputValue==3){
        perMonthPrice.innerText = amount[2] +'.00';
        pageViews.innerText = '100K';
    }
    else if(rangeInputValue==4){
        perMonthPrice.innerText = amount[3] +'.00';
        pageViews.innerText = '500K';
    }
    else{
        perMonthPrice.innerText = amount[4] +'.00';
        pageViews.innerText = '1M';
    }    
});

document.querySelector(".btn").addEventListener("click",()=>{
    window.open("https://www.namecheap.com/");
});