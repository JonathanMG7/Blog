$(document).on("ready" , main)  //Para que el JS solo carge luego que
// el documento este cargado
var uid=null
var uname=null
var upic=null

function main(){                //lista de funciones que estan en el codigo
    setInfo()
    closeOnOver()
    pushComent()
}
function setInfo(){
    uid = $("#user-data input#user-id").val()
    uname = $("#user-data input#user-name").val()
    upic = $("#user-data input#user-picture").val()
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
    $(".comentarios").keydown(function(e){
        if(e.keyCode==13 && $(this).val()!=null && dataValidation()){
            e.preventDefault()
            var cmt=$(this).val()
            
            $(this).parent().parent().find("ul").append('<li>'+
                                    '<div class="coment_body ">'+
                                        '<div class="coment_pic">'+
                                            '<a href="#" title="userPic"><img src="'+upic+'" alt="User Pic"/></a>'+
                                        '</div>'+
                                        '<div class="coment_text fb_font">'+
                                            '<a href="#" tittle="User" class="nickname">'+uname+'</a>'+
                                            '<a href="#" tittle="X" class="closer hidden"></a>'+
                                            '<p>'+cmt+'</p>'+
                                            '<div class="coment_plug">'+
                                                '<a href="#" title="responder">Responder </a>. <div class="w-prueba2"></div><a href="#" title="like"> Me Gusta</a> . <a href="#" title="follow">Seguir publicaci&oacute;n</a>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</li>')
            //enviar datos al servidor: uid,cmt,postid
            $(this).val("")
        }
    })
}
	
function dataValidation(){
    if(uid==null && uname==null && upic==null)
        {
            alert("Usted no se encuentra logueado, Ingerese o registrese")
            return false
            
        }
        else{
            if(uid==null || uname==null || upic==null)
                {
                    setInfo()
                    if(uid!=null && uname!=null && upic!=null)
                        return true
                    else{
                        alert("Recargue la pagina")
                        return false
                        
                    }
                }
                else return true
                
        }
}