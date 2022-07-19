import * as React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDeleteEmployeeMutation, useGetAllEmployeeQuery, useGetEmployeeByIdQuery } from './services/employee_service'

 export default function Employee({onClose}) {
  const navigate = useNavigate();

// Using a query hook automatically fetches data and returns query values
//const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');

const { data, error, isLoading } = useGetAllEmployeeQuery();


// Individual hooks are also accessible under the generated endpoints:
// const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

// console.log(data)
const [deleteEmployee,result]=useDeleteEmployeeMutation();


return(
    <div>
     
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {/* {console.log(data[0]) */}
          {console.log(data[0])}
          <table>
          <tr>
          <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
          {data.map((item) => {
            return (
              <>
                
                  <tr>
                  <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                <td><button onClick={()=>{deleteEmployee(item.id)}}>Delete</button></td>
                    <td><button onClick={()=>{navigate( `/edit/${item.id}`); onClose()}}>Edit</button></td>
                    
                  </tr>
                
              </>
            );
          })}
          </table>
         
        </>
      ) : null}
    </div>
    )
} 