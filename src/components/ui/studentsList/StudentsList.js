import React from 'react';
import './StudentsList.scss';
import PropTypes from 'prop-types';

const StudentsList = ({ students }) => {
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
          {students.map(s => {
            return (
              <tr key={s.id}>
                <td data-column="First Name">{s.name}</td>
                <td data-column="Last Name">{s.email}</td>
                <td data-column="Job Title">{s.grade}</td>
                <td data-column="Twitter">{s.status ? 'Ativo' : 'Inativo'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;

StudentsList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
};
