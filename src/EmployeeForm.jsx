import  React, {useEffect,useState  } from 'react';
import { useCreateEmployeeMutation, useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from './services/employee_service';
import { useParams } from 'react-router-dom';


const EmployeeForm = () => {

  const {id}=useParams();
  const [formState, setForm] = useState({
    
    name:"",
    role:"",
    department_id:"",
    password:""
  });

  const [name, setName] = useState("");
  const [role, setRole] = useState("");


  const [createEmployee,result]=useCreateEmployeeMutation();

  const { data, error, isLoading } =useGetEmployeeByIdQuery(id,{skip:!id});

  const [updateEmployee,resultUpdate]=useUpdateEmployeeMutation();

  useEffect(()=>{

    console.log("qw123456",data?.data?.name);
  if(data?.data?.name){
    setName(data?.data?.name)
  }
},[data?.data]);
  console.log('data',data)

  const handleSubmit = (e) =>{
    

const params={name, role};
console.log('name', name, role)
if(id){
  console.log('params', params)
updateEmployee({id,params})
} else{
  createEmployee(params)
}


    e.preventDefault();
    console.log("You clicked submit.");
  }

  const handleChangeRole = (e) => {
console.log('event', e.target.value)
setRole(e.target.value)
  }


  

    return (
      <form name="form1" onSubmit={handleSubmit}>
        {/* {inputFields.map((item)=>(
                <InputField key={item.key} label={item.label} type={item.type} placeholder={item.placeholder}/>

            ))} */}

        {/* <InputField label={"Employee Name"} type={"text"} placeholder="Employee Name"/>

            <InputField label={"Employee ID"}/>

            <InputField label={"Joining Date"}/> */}

        <div class="flex-container">
          <div>
            <label for="empname">Employee Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" id="empname" placeholder="Employee Name" />
          </div>

          <div>
            <label for="empid">Employee ID</label>
            <input type="text" id="empid" placeholder="Employee ID" />
          </div>

          <div>
            <label for="joindate">Joining Date</label>
            <input type="text" id="joindate" placeholder="Joining Date" />
          </div>
        </div>

        <div class="flex-container">
          <div>
            <label for="role">Role</label>
            <select required id="role" onChange={handleChangeRole}>
              <option value="" selected>
                Choose a Role
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="QA">QA</option>
            </select>
          </div>

          <div>
            <label for="status">Status</label>

            <select required id="status">
              <option value="" selected>
                Status
              </option>
              <option value="Trainee">Trainee</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>

          <div>
            <label for="exp">Experience</label>
            <input type="text" id="exp" placeholder="Experience" />
          </div>
        </div>

        <div class="flex-container" id="lastRow">
          <div>
            <label for="address">Address</label>
            <input type="text" id="address" placeholder="Address" />
          </div>

          <div>
            <label for="idproof">Upload ID Proof</label>
            <input type="" id="idproof" placeholder="Browse" />
            <input type="file" placeholder="Browse" />
            <button type="button" id="browse" name="browse">
              Browse
            </button>
          </div>
        </div>

        {/* <InputSelect 
            label={"Role"}
            options={[
                {key:" ",label:"Choose a Role"},
                {key:"Frontend",label:"Frontend"},
                {key:"Backend",label:"Backend"},
                {key:"QA", label:"QA"}
            ]}
            defaultIndex={0}
            />

            <InputSelect
                label={"Status"}
                options={[
                    {key:"Status",label:"Status"},
                    {key:"Trainee",label:"Trainee"},
                    {key:"Accepted", label:"Accepted"}
                ]}
                defaultIndex={0}
            /> */}

        {/* <InputField label={"Experience"}/>

            <InputField label={"Address"}/>

            <InputField label={'Upload ID Proof'}/> */}

        {/* <Button label={"Browse"} handleClick={()=>{}}/> */}
        <div>
          {/* <Button label={"Submit"} handleClick={()=>{}}/>
                
            < Button label={"Cancel"} handleClick={()=>{}}/>

            < Button label={"Back"} handleClick={()=>{navigate(-1)}}/> */}
          <button
            type="button"
            id="submit"
            name="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button type="reset" name="cancel">
            Cancel
          </button>
        </div>
      </form>
    );
  };

  export default EmployeeForm