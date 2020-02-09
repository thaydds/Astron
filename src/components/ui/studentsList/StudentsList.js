import React from 'react';
import './StudentsList.scss';

const StudentsList = () => {
  return (
    <div className="students_list_container">
      <h2>Alunos Cadastrados</h2>
      <table className="students_list_container__table">
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Sexo</th>
          <th>Ensino</th>
          <th>Registro</th>
          <th>Status</th>
          <th>Acoes</th>
        </tr>
        <tr className="border_bottom">
          <td>1</td>
          <td>Jonas</td>
          <td>Comia fodase</td>
          <td>Sexual</td>
          <td>??/??/????</td>
          <td>Passiva</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Jonas</td>
          <td>Comia fodase</td>
          <td>Sexual</td>
          <td>??/??/????</td>
          <td>Passiva</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default StudentsList;
