import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import { useGetAllEmployeeQuery } from "./services/employee_service";
import "./styles/styles.css";
import EmployeePage from "./EmployeePage"
import EmployeeForm from "./EmployeeForm"

// import ./styles/styles.cs
const CreateEmployee = () => {

  
    const {id}=useParams();
  


  const navigate = useNavigate();

  const [create, setCreate] = useState(false);

  const inputFields = [
    {
      key: "empname",
      label: "Employee Name",
      type: "text",
      placeholder: "Employee Name",
    },
    {
      key: "empid",
      label: "Employee ID",
      type: "text",
      placeholder: "Employee ID",
    },
    {
      key: "joindate",
      label: "JoinDate",
      type: "text",
      placeholder: "Join Date",
    },
    {
      key: "experience",
      label: "Employee Name",
      type: "text",
      placeholder: "Experience",
    },
    { key: "address", label: "Address", type: "text", placeholder: "Address" },
    {
      key: "idproof",
      label: "ID Proof",
      type: "text",
      placeholder: "ID Proof",
    },
  ];

//   const EmployeePage = () => {
//     const { data, error, isLoading } = useGetAllEmployeeQuery();
//     return(
//     <div>
      
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) : data ? (
//         <>
//           {/* {console.log(data[0]) */}
//           {console.log(data[0])}
//           {data.map((item) => {
//             return (
//               <>
//                 <table>
//                     <tbody>
//                   <tr>
//                     <td>{item.name}</td>
//                     <td>{item.role}</td>
//                   </tr>
//                   </tbody>
//                 </table>
//               </>
//             );
//           })}
//         </>
//       ) : null}
//     </div>
//     )
    /* // return(
    // <>
    // <div className="column-heading">
    //     <p>Employee Name    </p> 
    //     <p>Employee ID      </p>
    //     <p>Joining Date     </p>
    //     <p>Role             </p>
    //     <p>Status           </p>
    //     <p>Experience       </p>
    //     <p>Action           </p>
        
    // </div>

    // <div className="column-heading">
    //     <p>Tharikh</p> 
    //     <p>13024</p>
    //     <p>01/01/2022</p>
    //     <p>Trainee</p>
    //     <p>Pending</p>
    //     <p>5 years</p>
    //     <p>Action</p>
        
    // </div>

    // </> */

    //     if(create)
    // return(<form name="form1" onSubmit={handleSubmit}>

    // {inputFields.map((item)=>(
    //     <InputField key={item.key} label={item.label} type={item.type} placeholder={item.placeholder}/>

    // ))}


    // <InputSelect
    // label={"Role"}
    // options={[
    //     {key:" ",label:"Choose a Role"},
    //     {key:"Frontend",label:"Frontend"},
    //     {key:"Backend",label:"Backend"},
    //     {key:"QA", label:"QA"}
    // ]}
    // defaultIndex={0}
    // />

    // <InputSelect
    //     label={"Status"}
    //     options={[
    //         {key:"Status",label:"Status"},
    //         {key:"Trainee",label:"Trainee"},
    //         {key:"Accepted", label:"Accepted"}
    //     ]}
    //     defaultIndex={0}
    // />

    //

    // < Button label={"Back"} handleClick={()=>{navigate(-1)}}/>

    // </form>)
//   };

  

  // useEffect(()=>{

  // },[]);

  // useEffect(()=>{
  // //   if(create){
  // //     // setCreate (false);
  // //     return(
  // //     <h1>
  // //         true
  // //     </h1>)
  // //   }
  // //   else
  // //     // setCreate(true);
  // //     <h1>
  // //     false
  // // </h1>

  // setCreate(false);
  // },[create]);

  // const CreatePage()=>{
  //     create=!create;
  //     return(
  //         create? :
  //     )
  // }

  const handleClick = () => {
    if(id){
       navigate('/create') 
    }
    setCreate(!create);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav">
            <img src="kv logo.png" alt="kv logo.png" />
          </div>

          <aside>
            <div className="sidenav">
              <img className="list" src="List.png" alt="employee icon.png" />
              <a href="#"> Employee list</a>
            </div>
          </aside>
        </nav>
      </header>

      <main>
        <section>
          {create ?  <h1>{id? 'Edit Employee': 'Create Employee'}</h1>: <h1>Employee List</h1>}
          <Button
            label="Create"
            handleClick={() => {
              handleClick();
            }}
          />
        </section>
        <section>
          

        {create ? <EmployeeForm /> : <EmployeePage onClose={()=>{console.log("qwer");setCreate(true)}}/> } 
        </section>
      </main>
    </>
  );
};

export default CreateEmployee;
//<> This is react fragment</>
