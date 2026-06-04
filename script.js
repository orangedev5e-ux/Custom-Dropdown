const angleDown = document.querySelector('#icon');
const dropDown = document.querySelector('#dpdown');
const angleUp = document.querySelector('#icon2');

const optFt = document.querySelector('#item1');
const optSc = document.querySelector('#item2');
const optTh = document.querySelector('#item3');
const optFr = document.querySelector('#item4');
const optFv = document.querySelector('#item5');
const mainOpt = document.querySelector('#selectedItem');

angleDown.addEventListener('click', function(){
    if(dropDown.style.display === 'none' || angleUp.style.display === 'none'){
        dropDown.style.display ='block';
        angleUp.style.display = 'block';
        angleDown.style.display = 'none';
    } else{
        dropDown.style.display ='none';
        angleDown.style.display = 'block';
        angleUp.style.display = 'none';
    }
})

angleUp.addEventListener('click', function(){
    if(dropDown.style.display === 'block' || angleDown.style.display === 'none'){
       dropDown.style.display ='none';
       angleDown.style.display = 'block';
       angleUp.style.display = 'none';
    } else{
       dropDown.style.display ='block';
       angleUp.style.display = 'block';
       angleDown.style.display = 'none';
    }
})


optFt.addEventListener('click', function(){
    mainOpt.textContent = optFt.textContent;
    dropDown.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
})
optSc.addEventListener('click', function(){
    mainOpt.textContent = optSc.textContent;
    dropDown.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
})

optTh.addEventListener('click', function(){
    mainOpt.textContent = optTh.textContent;
    dropDown.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
})

optFr.addEventListener('click', function(){
    mainOpt.textContent = optFr.textContent;
    dropDown.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
})

optFv.addEventListener('click', function(){
    mainOpt.textContent = optFv.textContent;
    dropDown.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
})