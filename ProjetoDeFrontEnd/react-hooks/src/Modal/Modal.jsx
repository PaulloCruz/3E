const Modal = ({modal,setModal}) => {
if (modal===true)
    return(
        <div>
            este é um modal!
            <button onClick={()=> setModal(false)}>Fechar</button>
        </div>
    )

    return null
}

export default Modal