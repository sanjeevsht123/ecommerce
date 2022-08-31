var user_name=document.getElementById('username')
user_name.addEventListener('input',function(event){
    console.log(event.target.value)
})


var sub=document.getElementById('submit')
sub.addEventListener('submit',function(e){
    alert('Are you sure ?')
    console.log('are you sure')
    e.preventDefault();
})