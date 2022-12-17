import {Routes, Route, Link} from "react-router-dom"
import UserList from "./features/students/StudentList";
import Button from "./components/Button";
import AddStudent from "./features/students/AddStudent";
import EditStudent from "./features/students/EditStudent";
import { useState } from "react";

function App() {
  // const [isVisible, setIsVisible] = useState(false);
  // const hideTableHeaderHandler = (event) => {
  //   setIsVisible(prevIsVisible => prevIsVisible);

  //   button is hidden
  //   event.target.style.display = "none";

  //   set button visible from addStudent using props
    
  // }

  const linkButton = <div className="flex justify-end">
                        <Link to="/add-student"  >
                          <Button>
                            Add Student
                          </Button>
                        </Link>
                      </div>;

  return (
    <div className="container max-w-7xl mx-auto mt-8">
      <div className="mb-4">
        <h1 className="font-serif text-3xl font-bold  decoration-gray-400">Student management system</h1>
        { linkButton }
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full ">
              <thead>
                <tr>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Student ID
                  </th>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Email
                  </th>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      First Name
                  </th>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Last Name
                  </th>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Date of Birth
                  </th>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Major
                  </th>
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Action
                  </th>
                </tr>
              </thead> 
              {/* supposed to be tbody here */}
                <Routes>
                  <Route path="/" element={<UserList />}/>
                  <Route path="/add-student" element={<AddStudent />}/>
                  <Route path="/edit-student/:student_id" element={<EditStudent />}/>
                </Routes>
            </table>
          </div>
        </div>
      </div>
              
    </div>
  );
}

export default App;