export default function Stories() {

let stories = [
    {img:"assets/img/9gag.svg", name: "9gag"},
    {img:"assets/img/meowed.svg", name: "meowed"},
    {img:"assets/img/barked.svg", name: "barked"},
    {img:"assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},
    {img:"assets/img/wawawicomics.svg", name: "wawawicomics"},
    {img:"assets/img/respondeai.svg", name: "respondeai"},
    {img:"assets/img/filomoderna.svg", name: "filomoderna"},
    {img:"assets/img/memeriagourmet.svg", name: "memeriagourmet"}
]

return (
    <div class="stories">
        {stories.map((stories) => (
            <div class="story">
                <div class="imagem">
                    <img src={stories.img} />
                </div>
                <div class="usuario">
                    {stories.name}
                </div>
            </div>
        ) )}
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
)


}