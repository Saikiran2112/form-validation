let btn=document.getElementById('btn')
let nam=document.getElementById('username')
let email=document.getElementById('email')

nam.addEventListener('blur',function(){
    let s=nam.value;
    let regex=/^[a-zA-Z]([a-zA-Z0-9]){2,10}$/
    if(regex.test(s)){
        nam.classList.remove('is-invalid')
        
    }
    else{
        nam.classList.add('is-invalid')
        console.log("Not valid")
   
    }
})
email.addEventListener('blur',function(){
    let e=email.value
    let regex=/^([_a-zA-Z0-9\-]+)@([_a-zA-Z0-9\-]+).([_a-zA-Z]){1,4}$/
    if(regex.test(e)){
        email.classList.remove('is-invalid')
       
    }
    else{
        email.classList.add('is-invalid')
     
       
    }
})
btn.addEventListener('click',function(e){
    e.preventDefault()
    let ele=document.getElementById('elem')
    let l1=nam.classList
    let l2=email.classList
    if(l1.contains('is-invalid') || l2.contains('is-invalid')){
        ele.innerHTML=``
        ele.innerHTML=`
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Your form is not valid</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        `

    }
    else{
        ele.innerHTML=``
        ele.innerHTML=`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Your form is  valid</strong> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

        `
    }
})
