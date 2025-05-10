import { useState } from "react";

function UserForm () {

    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [submitted, setSubmitted] = useState (false);


    const handleSubmit = (e) =>  {
        e.preventDefault();
        setSubmitted(true);
    }


 return(
            <div className="UserForm">
                   <h2>User Form</h2>
                       <form onSubmit ={handleSubmit}>
                          <div>
                                 <label>Name:</label><br />
                                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                                  <div>
                                    <label>Email: </label> <br />
                                        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value) } required />
                                 </div>
                                 <div>
                                     <button type="submit">Submit</button>
                                 </div>
                         </form>
                               {submitted && (
                             <div className="SubmittedMessage">
                                   <h3>Thank you for submitting!</h3>
                                  <p>Name: {name}</p>
                                   <p>Email: {email}</p>
                             </div>
                                 )}
             </div>
     );
};

export default UserForm;