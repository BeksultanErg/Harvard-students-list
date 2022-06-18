import React from 'react';

const Section = (props) => {
   return (
      <div className='section'>
         <div className="container">
            <div className="section__inner">
               <table className="customers">
                  <tr>
                     <th>Name</th>
                     <th>Last name</th>
                     <th>Age</th>
                     <th>ID</th>
                  </tr>
                  {props.studentsList.map(item => <tr key={item}>
                     <td>{item.name}</td>
                     <td>{item.lastName}</td>
                     <td>{item.age}</td>
                     <td>{item.id}</td>
                  </tr>)}
               </table>
            </div>
         </div>
      </div>
   );
};

export default Section;