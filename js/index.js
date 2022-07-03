
const mostrarAlerta = (menj, error=null) => {
    const alerta = document.createElement("p");
    alerta.textContent = menj;
    
    if (error){
        alerta.classList.add("error");
        setTimeout(() => {
            alerta.remove()
        },3000);
    }else{
        alerta.classList.add("correcto");
    }
    form.appendChild(alerta);
}



const go = () => {
    if (document.form.meses.value==4 && document.form.nombre.value=="Isabella Collante Mendez"){ 
        document.form.submit(); 
    } 
    else{ 
        mostrarAlerta("Tu no eres mi AMORCITO, largate lacra",true); 
        document.form.reset()
    } 
}
