
//Components in Capitals
const Button =(props) =>{
    const {label,handleClick,className}=props//Separate Destructuring instead of directly taking and destructuring
    return(
        <button className={className} onClick={handleClick}>
        {label}
        </button>
    );
}


export default Button