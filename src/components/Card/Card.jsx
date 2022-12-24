import css from "./Card.module.css"



function Card({volumeInfo, id}) {
    return(
        <div className={css.wrapper}>
            <div className={css.imgWrapper}>
                <img src="https://anarcho-copy.org/book/jack-london-martin-eden/image.jpeg" alt="" />
            </div>
            <div className={css.textWrapper}>
                <div><strong>{volumeInfo.title}</strong></div> 
                <div>Jack London</div>
                <button>Add to shelf</button>
            </div>
           
        </div>
    )
}

export default Card