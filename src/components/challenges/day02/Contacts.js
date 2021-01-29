const Contacts = (props) => {
    return(
    <div>
        <h3>{props.name } </h3>
        <p>I'm {props.age} years old, and I graduated in {props.graduationYear} from {props.school}</p>
     </div>
    );
    
}

export default Contacts;