import '../styles/Button.css'

function Button({image, text, alt}){
    return (
        <>
            <button>
                <img src={image} alt={alt} />
                <span>{text}</span>
            </button>
        </>
    )
}

export default Button