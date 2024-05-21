document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".articulo").forEach(article =>{

          article.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?article.classList.remove("filtro")
            :article.classList.add("filtro")
      })

  }


})