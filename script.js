const h5 = document.querySelector('h5');
const btn = document.querySelector('#add');
let check = 0;


btn.addEventListener('click',()=>{

    if(check === 0){
        h5.innerHTML= "Friends";
    h5.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1 ; 
    }else{
        btn.innerHTML = "Add Friend";
        h5.innerHTML= "Stranger";
        h5.style.color = "red";
        check = 0; 
    }
}
)

