
function cargarpagina(){
    let icon_isesion = document.getElementById('icon_isesion');
    let icon_carrito = document.getElementById('icon_carrito');
    let icon_carritocompras = document.getElementById('icon_carritocompras');
    let btn_bucar = document.getElementById('btn_busqueda');
    let cerrar_login = document.getElementById('iconcerrar_login');
    let cerrar_formulario = document.getElementById('cerrar_formulario');
    let lbl_registrate = document.getElementById('lbl_registrate');
    let s_hombres = document.getElementById('s_hombres');
    let s_mujeres = document.getElementById('s_mujeres');
    let s_niños = document.getElementById('s_niños');
    let s_niñas = document.getElementById('s_niñas');
    let s_marcas = document.getElementById('s_marcas');
    

    icon_isesion.addEventListener("click",mostrarLogin);
    cerrar_login.addEventListener('click',cerrarLogin);
    cerrar_formulario.addEventListener('click',cerrarFormulario);
    lbl_registrate.addEventListener('click',registrarUsuario);
    icon_carritocompras.addEventListener("click",mostrarVentana);
    s_hombres.addEventListener('mouseenter',mostrarVentana);
    s_mujeres.addEventListener('mouseenter',mostrarVentana);
    s_niños.addEventListener('mouseenter',mostrarVentana);
    s_niñas.addEventListener('mouseenter',mostrarVentana);
    s_marcas.addEventListener("mouseenter",mostrarVentana);
    s_hombres.addEventListener('mouseout',ocultarventana);
    s_mujeres.addEventListener('mouseout',ocultarventana);
    s_niños.addEventListener('mouseout',ocultarventana);
    s_niñas.addEventListener('mouseout',ocultarventana);
    s_marcas.addEventListener("mouseout",ocultarventana);
    btn_bucar.addEventListener('mouseenter',cambiarColor);
    icon_carritocompras.addEventListener('click',mostrarLogin);
}

function registrarUsuario(){
    cerrarLogin();
    document.getElementById('div_formulario').style.display = 'block';
}
function cerrarLogin(){
    
    document.getElementById('div_login').style.display = 'none';
}
function cerrarFormulario(){
    document.getElementById('div_formulario').style.display = 'none';
}
function mostrarLogin(){
    
    document.getElementById('div_login').style.display = 'block';
}
function cambiarColor(){
    
    document.getElementById(btn_busqueda).style.backgroundColor='#de555e';
    
    
    }
function ocultarventana(){
    document.getElementById('div_shombres').style.display = 'none';
    
}
function mostrarVentana(){
    document.getElementById('div_shombres').style.display = 'block';
}
window.addEventListener('load',cargarpagina)