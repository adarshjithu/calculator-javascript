function clickme(val){
    console.log(val)
   
   document.getElementById('text').value=  document.getElementById('text').value+val
}
function clearcalc(){
    document.getElementById('text').value=''
}
function equalcalc(){
    var a=document.getElementById('text').value
    var result=eval(a)
    document.getElementById('text').value=result
}