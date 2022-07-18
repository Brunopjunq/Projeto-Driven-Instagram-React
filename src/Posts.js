import React from "react"

const posts = [
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
];

export default function Posts() {   
    return(
        <div class="posts">
            {posts.map((posts) => (
                <Post 
                imgUser={posts.imgUser}
                nameUser={posts.nameUser}
                imgPost={posts.imgPost}
                imgLike={posts.imgLike}
                UserLike={posts.UserLike}
                NumbLikes={posts.NumbLikes}
                />
            ))}
        </div>
    )
}

function Post(props) {

    const [like, setLike] = React.useState("heart-outline");

    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} />
                        {props.nameUser}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.imgPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div class="like">
                        <ion-icon 
                        name={like} 
                        onClick={() => {
                            if (like === "heart-outline") {
                                setLike("heart")
                            } else {
                                setLike("heart-outline");
                            }
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgLike} />
                    <div class="texto">
                        Curtido por <strong>{props.UserLike}</strong> e <strong>{props.NumbLikes}</strong>
                    </div>
                </div>
            </div>
        </div>
    )

}