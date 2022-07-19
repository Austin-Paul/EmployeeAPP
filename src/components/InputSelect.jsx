const InputSelect=(props)=>{
    const {label,options, defaultIndex}=props;
    return(
    <>
    <div>
        <div>
            {label}
        </div>
        <div>
        <select > 
        {
            options.map((item, index) =>(<option key={item.key} selected={index === defaultIndex} >{item.label}</option>))
        }
        </select>
        </div>
    </div>
    </>
    );

}
export default InputSelect;