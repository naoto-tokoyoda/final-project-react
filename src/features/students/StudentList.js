import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import Button from '../../components/Button';
import { deleteStudent } from './studentSlice';


function StudentList() {
    //create dummy students
    // const students = [
    //     {student_id: '1' ,f_name: 'Naoto', l_name: 'Tokoyoda', email:'naoto@somewhere.com', DoB: '08/06/1995', major:'WMAD'},
    //     {student_id: '2' ,f_name: 'John', l_name: 'Doe', email:'john@somewhere.com', DoB: '09/07/1996', major:'MKT'},
    //     {student_id: '3' ,f_name: 'anony', l_name: 'mouse', email:'anony@somewhere.com', DoB: '01/07/1997', major:'WMAD'},
       
    // ];
    const dispatch = useDispatch();
    const students = useSelector(store => store.students);
    const deleteStudentHandler = (student_id) => {
        dispatch(deleteStudent( {student_id: student_id}));
    }

    const iconStyle = "none";
    const renderCard = () => students.map((student) => (
        <tbody className="bg-white" key={student.student_id}>
            <tr>
                {/* student id */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900" >
                        {student.student_id}
                    </div>
                </td>

                {/* email */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                        {student.email}
                    </div>
                </td>

                {/* first name */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                        {student.f_name}
                    </div>
                </td>

                {/* last name */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                        {student.l_name}
                    </div>
                </td>

                {/* Date of birth */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                        {student.DoB}
                    </div>
                </td>

                {/* Major */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                        {student.major}
                    </div>
                </td>
                
                {/* action */}
                <td className="px-6 py-4 text-sm font-medium whitespace-no-wrap border-b border-gray-200 flex gap-1">
                    {/* edit button */}
                    <Link to={`edit-student/${student.student_id}`}>
                        <Button className={iconStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 hover:text-indigo-900" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path   strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </Button>
                    </Link>
                  

                    {/* delete button */}
                    <Button className={iconStyle} onClick={() => deleteStudentHandler(student.student_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path   strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </Button>
                </td>
            </tr>
        </tbody>
    ));

  return (
    <>
        {students.length ? renderCard()  : <p className="text-center co-span-2 text-gray-700 font-semibold">No student</p>}
    </>
  )
}

export default StudentList