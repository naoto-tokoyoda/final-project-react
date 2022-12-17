import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { addStudent } from './studentSlice'
import {v4 as uuidv4} from 'uuid';


function AddStudent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const [values, setValues] = useState({
        email: '',
        f_name: '',
        l_name: '',
        DoB: '',
        major: '',
    });

    const [isError, setIsError] = useState(false);
    const errorMessage = "Cannot be empty."

    const emailSubmitHandler = (event) => {
        // if (event.target.value == ''){
        //     alert("email is empty");
        // }
    }

    const addStudentHandler = () => {
       
        dispatch(addStudent({
            student_id: uuidv4(),
            email: values.email,
            f_name: values.f_name,
            l_name: values.l_name,
            DoB: values.DoB,
            major: values.major,
        }));

        setValues({
            email:'',
            f_name:'',
            l_name:'',
            DoB:'',
            major:'',
        });
        navigate('/');
        
    }


  return (
    // should be like modal with z index and centered on the page
    //maybe dont need it because userlist.js have auto incrementation by index
    <div className=" max-w-xl mx-auto pb-7 absolute top-60 left-0 right-0 z-10 border-2 border-[#E4E7EB] shadow-lg rounded-lg ">
        <div className="p-10 ">
            <h3 className=" text-xl font-medium text-gray-900 mb-7">Add Student Information</h3>

            <TextField
                label="Email"
                value={values.email}
                onChange={(e)=> setValues({...values, email: e.target.value})}
                // onChange={emailSubmitHandler}
                inputProps={{type: 'email', placeholder: 'john@example.com'}}   
                
            />
            <br />
            <TextField
                label="First Name"
                value={values.f_name}
                onChange={(e)=> setValues({...values, f_name: e.target.value})}
                inputProps={{type: 'text', placeholder: 'John'}}    
            />
            <br />
            <TextField
                label="Last Name"
                value={values.l_name}
                onChange={(e)=> setValues({...values, l_name: e.target.value})}
                inputProps={{type: 'text', placeholder: 'Doe'}}    
            />
            <br />

            <TextField
                label="Date of Birth"
                value={values.DoB}
                onChange={(e)=> setValues({...values, DoB: e.target.value})}
                inputProps={{type: 'date', placeholder: 'yy-MM-dd'}}    
            />

            <br />
            <TextField
                label="Major"
                value={values.major}
                onChange={(e)=> setValues({...values, major: e.target.value})}
                inputProps={{type: 'text', placeholder: 'WMAD'}}    
            />
            <br />
            <Button onClick={addStudentHandler}>
                Submit
            </Button>
        </div>
    </div>
        
        
        


  )
}

export default AddStudent