export default function Evento({título, descricao, horario, local}){
    return(
        <section className="evento">
            <div className="informacao">
                <h1>{título}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
            </div>
            <img src="https://cdn2.unrealengine.com/fortnite-green-roots-billie-outfit-ultraviolet-style-1920x1080-43885321022d.jpg"
            alt="imagem" />
        </section>
    )
}