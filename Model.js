import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Form from here
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Tracks if a student is being edited

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = { name, rollNumber, gender, age, address };

    if (editIndex !== null) {
      // Edit student
      const updatedStudents = [...students];
      updatedStudents[editIndex] = newStudent;
      setStudents(updatedStudents);
      setEditIndex(null); // Reset after editing
    } else {
      // Add new student
      setStudents([...students, newStudent]);
    }

    // Clear input fields
    setName('');
    setRollNumber('');
    setGender('');
    setAge('');
    setAddress('');
  };

  const handleEdit = (index) => {
    const student = students[index];
    setName(student.name);
    setRollNumber(student.rollNumber);
    setGender(student.gender);
    setAge(student.age);
    setAddress(student.address);
    setEditIndex(index); // Set the index for editing
  };

  const handleDelete = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Add a Student Info 
      </Button>
      <Modal
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Student Detail</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} placeholder='Full Name' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Roll Number:</label>
          <input type="text" value={rollNumber} placeholder='Roll Number' onChange={(e) => setRollNumber(e.target.value)} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" value={gender} placeholder='Gender' onChange={(e) => setGender(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} placeholder='Age' onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.gender}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
              <td>
              <Button variant="dark" size="sm" onClick={() => { handleEdit(index); handleShow(); }}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Example;