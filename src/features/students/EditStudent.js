import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { useDispatch, useSelector } from 'react-redux';
import { editStudent } from './studentSlice';

function EditStudent() {
  const params = useParams();
  const dispatch = useDispatch();
  const students = useSelector(store => store.students);
  const existingStudent = students.filter(student => student.student_id === params.student_id);
  const { email, f_name, l_name, DoB, major} = existingStudent[0];
  const navigate = useNavigate();
  const [values, setValues] = useState({
      email,
      f_name,
      l_name,
      DoB,
      major
  });

  const editStudentHandler = () => {
      setValues({
          email:'',
          f_name:'',
          l_name:'',
          DoB:'',
          major:'',
      });
      dispatch(editStudent({
        student_id: params.student_id,
        email: values.email,
        f_name: values.f_name,
        l_name: values.l_name,
        DoB: values.DoB,
        major: values.major,
      }));
      navigate('/');
  }


return (
  // should be like modal with z index and centered on the page
  //maybe dont need it because userlist.js have auto incrementation by index
  <div className='mt-10 max-w-xl mx-auto'>
      <TextField
          label="Email"
          value={values.email}
          onChange={(e)=> setValues({...values, email: e.target.value})}
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
          inputProps={{type: 'date', placeholder: 'YY-MM-DD'}}    
      />

      <br />
      <TextField
          label="Major"
          value={values.major}
          onChange={(e)=> setValues({...values, major: e.target.value})}
          inputProps={{type: 'text', placeholder: 'WMAD'}}    
      />
      <br />
      <Button onClick={editStudentHandler}>
          Edit
      </Button>

  </div>

)
}


export default EditStudent