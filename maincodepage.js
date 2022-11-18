var cont = 1;
document.getElementById("radio1").checked=true;

setInterval( function(){
    proximoSlide();
},2000);

function proximoSlide(){
    cont++;
        if (cont>4){
            cont = 1;
        }
    document.getElementById("radio"+count).checked=true;   
    console.log(cont)  
}




