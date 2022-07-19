

// const InputField=({label,type,placeholder})=>{
//     

//          return(
//     <div>
//     <div>
//         {label}
//     </div>

//     {/* <input type={type} placeholder={placeholder}/> */}



// </div>
// );
// }

const InputField=({labelName,inputName,label,placeholder,
    onChange
})=>{
        return (
            <div>
                <label className={labelName}>{label}</label>
                <input className={inputName} placeholder={placeholder} type ="text" onChange={(event)=>onChange(event.target.value)}/>
            </div>
        )
}
// return(
//     <div>
//         <div>
//             {label}
//         </div>

//         {/* <input type={type} placeholder={placeholder}/> */}



//     </div>
// );
// };

export default InputField ;