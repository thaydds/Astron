import React from 'react';
import './StudentsList.scss';

const StudentsList = () => {
  return (
    <div className="students_list_container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ensino</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="First Name">Thay</td>
            <td data-column="Last Name">thay@gmai.com</td>
            <td data-column="Job Title">MESTRANDO</td>
            <td data-column="Twitter">Ativo</td>
          </tr>
          <tr>
            <td data-column="First Name">Jonas</td>
            <td data-column="Last Name">gayzinho@gmai.com</td>
            <td data-column="Job Title">Creche</td>
            <td data-column="Twitter">Inativo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
