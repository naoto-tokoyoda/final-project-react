import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {student_id: 'example UUID' ,f_name: 'John', l_name: 'Doe', email:'John@somewhere.com', DoB: '01/01/2000', major:'Gameology'},
    
];

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        editStudent: (state, action) => {
            const {student_id, email, f_name, l_name, DoB, major } = action.payload;
            const existingStudent = state.find(student => student.student_id === student_id);
            if (existingStudent) {
                existingStudent.email = email;
                existingStudent.f_name = f_name;
                existingStudent.l_name = l_name;
                existingStudent.DoB = DoB;
                existingStudent.major = major;
            }
        },
        deleteStudent: (state, action) => {
            const {student_id} = action.payload;
            const existingStudent = state.find(student => student.student_id === student_id);
            if (existingStudent) {
                return state.filter(student => student.student_id !== student_id);
            }
        }
    }
});


export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer