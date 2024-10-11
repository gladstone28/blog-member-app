import React, { useState } from 'react';
import Papa from 'papaparse';

const MemberUpload = () => {
  const [members, setMembers] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      complete: (result) => {
        const data = result.data.map(row => ({
          name: row[0],
          email: row[1]
        }));
        setMembers(data);
      }
    });
  };

  return (
    <div>
      <h2>Upload Members CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <h3>Members List</h3>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name} - {member.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemberUpload;
