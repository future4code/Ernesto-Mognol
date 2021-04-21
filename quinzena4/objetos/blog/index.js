const arrayPosts = []
function montarPost() {
    const interiorTitulo = document.getElementById("titulo-post")
    const interiorAutor = document.getElementById("autor-post")
    const interiorConteudo = document.getElementById("conteudo-post")
if( interiorTitulo.value != "" && interiorAutor.value != "" && interiorConteudo.value != "") {
    const postInserido = {
        titulo: interiorTitulo.value,
        autor: interiorAutor.value,
        conteudo: interiorConteudo.value,
    }
    arrayPosts.push(postInserido)
    interiorTitulo.value = ""
    interiorAutor.value = ""
    interiorConteudo.value = ""
}
else {
    alert("Não deixe nenhum campo do post vazio!")
}
    alert("Depois que terminar de postar, clique em publicar posts! (Crie 3 posts!)")
}

function publicarPost() {
    //primeiro post
    const inserirTitulo0 = document.getElementById("inserir_titulo-post0")
    inserirTitulo0.innerHTML = arrayPosts[0].titulo
    const inserirAutor0 = document.getElementById("inserir_autor-post0")
    inserirAutor0.innerHTML = arrayPosts[0].autor
    const inserirConteudo0 = document.getElementById("inserir_conteudo-post0")
    inserirConteudo0.innerHTML = arrayPosts[0].conteudo
    //segundo post
    const inserirTitulo1 = document.getElementById("inserir_titulo-post1")
    inserirTitulo1.innerHTML = arrayPosts[1].titulo
    const inserirAutor1 = document.getElementById("inserir_autor-post1")
    inserirAutor1.innerHTML = arrayPosts[1].autor
    const inserirConteudo1 = document.getElementById("inserir_conteudo-post1")
    inserirConteudo1.innerHTML = arrayPosts[1].conteudo
    //terceiro post
    const inserirTitulo2 = document.getElementById("inserir_titulo-post2")
    inserirTitulo2.innerHTML = arrayPosts[2].titulo
    const inserirAutor2 = document.getElementById("inserir_autor-post2")
    inserirAutor2.innerHTML = arrayPosts[2].autor
    const inserirConteudo3 = document.getElementById("inserir_conteudo-post2")
    inserirConteudo3.innerHTML = arrayPosts[2].conteudo
}