
const Input = ({type,placeholder})=>{
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} 
        placeholder={placeholder}
        id={id}
        name={id}
        onChange={({target})=> setValue(target.value)}
        {...props}
        />
        </>                    
    )
}

export default Input