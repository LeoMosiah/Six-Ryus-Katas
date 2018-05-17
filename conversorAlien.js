const mapa = { 'glob':'I', 'prok':'V', 'pish':'X', 'tegj':'L'}
function converterAlien(emAlien){
return emAlien.split(' ').map((elemento)=>mapa[elemento]).join().replace(/,/ig,'');
}
