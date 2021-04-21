
import './App.css';
import React, {useState,useEffect} from "react";
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

const initialFormValue = {
  name:'',
  email:'',
  role:''
}
function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValue, setFormValue] = useState(initialFormValue);

  const updateForm = (name,value)=>{
    setFormValue({...formValue, [name]:value});
  }
  const submitForm = ()=>{
    const newTeamMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role:formValue.role,
    }
    if(!newTeamMember.name||!newTeamMember.email||!newTeamMember.role) {
      return;
    }
    setTeamMembers([...teamMembers,newTeamMember]);
    setFormValue(initialFormValue);
    
  }
  useEffect(()=>{
    console.log(`There is a new teamMember`);
  }, [teamMembers])

  return (
    <div>
      <Form value={formValue} update={updateForm} submit={submitForm}/>
      {teamMembers.map(teamMember=>{
        return <TeamMember key={teamMembers.indexOf(teamMember)} teamMember ={teamMember}/>
      })}
    </div>
  );
}

export default App;
