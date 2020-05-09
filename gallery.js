(function(){

    document.addEventListener('DOMContentLoaded', () => {

        const gallery = document.getElementById('gallery');
        const showRoom = document.getElementById('showRoom');
        const closeShowRoom = document.getElementById('close');
        const showRoomName = document.getElementById('showRoomName');
        const showRoomPicture = document.getElementById('showRoomPicture');
        var selectedPicture = [];

        /* abrindo showroom */
        for (let i = 0; i < gallery.children.length; i++) {
            (function(index){
                gallery.children[i].onclick = function(){ // pega a imagem clicada pelo index na array gallery
                    selectedPicture.push(gallery.children[index].getAttribute('data-name')); // pega o nome
                    selectedPicture.push(gallery.children[index].getAttribute('data-src')); // e url da imagem
                    showRoom.classList.add('active'); // faz showroom aparecer
                    showRoomName.textContent = selectedPicture[0]; // insere nome
                    showRoomPicture.src = selectedPicture[1]; // e url do showroom
                }
            })(i);
        }

        /* fechar showroom */
        closeShowRoom.onclick = function(){
            showRoom.classList.remove('active'); // esconde showroom
            selectedPicture = []; // resetta nome e url pra poder começar de novo
        }

    });

})();