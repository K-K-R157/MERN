const StudentList=(props)=>{
    return <ol>
        {
            props.students.map(student=><li key={student}>{student}</li>)
        }
    </ol>;
}

 export default StudentList;

// import React, { useState } from 'react';

// export default function StudentList() {
//   const [students, setStudents] = useState(['sujoy','rahul','alok']);
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       <button onClick={() => setStudents(['manas','sujoy','rahul'])}>
//         Change List
//       </button>
//       <ul>
//         {students.map((s, index) => (
//           <li
//             key={index}
//             onClick={() => setSelected(index)}
//             style={{ color: selected === index ? 'red' : 'black' }}
//           >
//             {s}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


