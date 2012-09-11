$(document).on("ready" , main)  //Para que el JS solo carge luego que
// el documento este cargado

function main(){                //lista de funciones que estan en el codigo
    closeOnOver()
}

function closeOnOver(){
    $(".coment_body").hover(function(){                 //Funcion para aparecer
        $(this).find("i.closer").removeClass("hidden")  //la X al poner el puntero
    },function(){                                       //sobre el comentario
        $(this).find("i.closer").addClass("hidden")
    })
    
    
    $("#bc1").click(function(){                         //eliminar cada comentario
        $("#cc1").addClass("hidden");                   //de manera individual
    });                                                 //gracias a un ID 
    $("#bc2").click(function(){
        $("#cc2").addClass("hidden");
    });
}
