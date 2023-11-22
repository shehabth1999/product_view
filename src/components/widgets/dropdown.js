import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { LanguageContext } from '../context/backgroundColor';

function DropdownBTN() {
    const {language,setLanguage} = useContext(LanguageContext);
    
  return (
    <div className='px-3'>
    <Dropdown>
      <Dropdown.Toggle style={{backgroundColor:"transparent"}} id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>setLanguage("AR")} >ARABIC</Dropdown.Item>
        <Dropdown.Item onClick={()=>setLanguage("EN")} >ENGLISH</Dropdown.Item>
        <Dropdown.Item ></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default DropdownBTN;