import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import style from "./login.module.css"

const Login = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    //for validation
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const Nav = useNavigate()

    //for showing unsuccessful massage
    const [issubmit, setIssubmit] = useState(true)

    //set identity for login
    const submit = (e) => {
        e.preventDefault();
        if (name == 'demo@coralmango.com' && password == 'demo123') {
            Nav("nav")
            console.log('success');
            //   setIssubmit("")
        }
        else {
            console.log('error');
            setIssubmit(false)
            setNameError('invalid username')
            setPasswordError('invalid password')
        }
    }
    return (

        <div>
            <div>
                  <p>for ease to others who seeing my tasks</p>
                 <p> username : demo@coralmango.com</p>        
                 <p> password : demo123</p>
            </div>
            <Form onSubmit={submit} className={style.main}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={name} onChange={(e) => { setName(e.target.value); setNameError("") }} />
                </Form.Group>
                <p style={{ color: "red" }}>{nameError}</p>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); setPasswordError("") }} />
                </Form.Group>
                <p style={{ color: "red" }}>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {!issubmit && <h3 style={{ color: "red" }}>Invalid Credentials</h3>}
            </Form>
        </div>

    )
}

export default Login;