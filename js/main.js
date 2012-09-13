$(document).on("ready" , main)  //Para que el JS solo carge luego que
// el documento este cargado

function main(){                //lista de funciones que estan en el codigo
    closeOnOver()
    dialogBox()
    pushComent()
}

function closeOnOver(){
    $(".coment_body").hover(function(){                 //Funcion para aparecer
        $(this).find("a.closer").removeClass("hidden")  //la X al poner el puntero
    },function(){                                       //sobre el comentario
        $(this).find("a.closer").addClass("hidden")
    })
    
    
    $(".closer").click(function(e){                        
        e.preventDefault();                             //previene el enlace
        if(confirm("Estas seguro que deseas eliminar")){
            $(this).parent().parent().parent().fadeOut(500)
        }
    }); 
}




function pushComent(){
    
}
	