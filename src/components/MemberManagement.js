import React, { useState } from 'react';

const MemberManagement = () => {
  // Initial members list state
  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Gladstone Rose', email: 'gladstone28@hotmail.com' },
    { id: 4, name: 'Jeaneth Rose', email: 'jeanethrose@yahoo.com' },
    { id: 5, name: 'James Kerr', email: 'jwkerr@gmail.com' }


  ]);

  // State for handling form inputs (add/edit)
  const [newMember, setNewMember] = useState({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentMemberId, setCurrentMemberId] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  // Add new member
  const handleAddMember = () => {
    if (!newMember.name || !newMember.email) {
      alert('Please fill out both name and email.');
      return;
    }

    const newId = members.length + 1;
    setMembers([...members, { id: newId, ...newMember }]);
    setNewMember({ name: '', email: '' });
  };

  // Edit member
  const handleEditMember = (member) => {
    setIsEditing(true);
    setNewMember({ name: member.name, email: member.email });
    setCurrentMemberId(member.id);
  };

  // Save edited member
  const handleSaveMember = () => {
    if (!newMember.name || !newMember.email) {
      alert('Please fill out both name and email.');
      return;
    }

    setMembers(
      members.map((member) =>
        member.id === currentMemberId
          ? { ...member, name: newMember.name, email: newMember.email }
          : member
      )
    );

    setIsEditing(false);
    setNewMember({ name: '', email: '' });
    setCurrentMemberId(null);
  };

  // Delete member (optional feature)
  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div>
      <h2>Member Management</h2>

      {/* Add/Edit Member Form */}
      <div style={styles.formContainer}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={newMember.name}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={newMember.email}
          onChange={handleInputChange}
          style={styles.input}
        />
        {!isEditing ? (
          <button onClick={handleAddMember} style={styles.button}>
            Add Member
          </button>
        ) : (
          <button onClick={handleSaveMember} style={styles.button}>
            Save Changes
          </button>
        )}
      </div>

      {/* Members List */}
      <h3>Members List</h3>
      <ul style={styles.memberList}>
        {members.map((member) => (
          <li key={member.id} style={styles.memberItem}>
            {member.name} - {member.email}
            <button
              onClick={() => handleEditMember(member)}
              style={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteMember(member.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles for the component (can be moved to a .css file)
const styles = {
  formContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  memberList: {
    listStyleType: 'none',
    padding: '0',
  },
  memberItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  editButton: {
    marginRight: '10px',
    backgroundColor: '#ffc107',
    padding: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: '5px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default MemberManagement;
