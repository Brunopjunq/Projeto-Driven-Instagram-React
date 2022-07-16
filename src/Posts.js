export default function Posts() {
    
    let posts = [
        {imgUser: "assets/img/meowed.svg",
        nameUser: "meowed",
        imgPost: "assets/img/gato-telefone.svg",
        imgLike: "assets/img/respondeai.svg",
        UserLike: "respondeai",
        NumbLikes: "outras 101.523 pessoas"
        },
        {imgUser: "assets/img/barked.svg",
        nameUser: "barked",
        imgPost: "assets/img/dog.svg",
        imgLike: "assets/img/adorable_animals.svg",
        UserLike: "radorable_animals",
        NumbLikes: "outras 99.159 pessoas"
        }
    ]
    
    return(
        <div class="posts">
            {posts.map((posts) => (
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={posts.imgUser} />
                            {posts.nameUser}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="conteudo">
                        <img src={posts.imgPost} />
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={posts.imgLike} />
                            <div class="texto">
                                Curtido por <strong>{posts.UserLike}</strong> e <strong>{posts.NumbLikes}</strong>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}