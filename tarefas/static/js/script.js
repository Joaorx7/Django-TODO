//função que pergunta ao usuario se ele deseja excluir uma tarefa

document.querySelectorAll(".delete-btn").forEach(
    btn => {
        btn.addEventListener("click", function(e){
            e.preventDefault();

            const delLink = this.getAttribute("href");

            if(delLink && confirm("Quer deletar essa tarefa?"))
            {
                window.location.href = delLink;
            }
        });
    }

)