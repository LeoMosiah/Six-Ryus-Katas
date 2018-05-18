function converterAlien(emAlien){
return emAlien.split(' ').map((elemento)=>mapa[elemento]).join().replace(/,/ig,'');
}
