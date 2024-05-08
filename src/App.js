import './App.css';
import {useState} from 'react';
import validator from 'validator';

function App() {
	// useState to store the error message
	const [errormessage,setErrorMessage] = useState("")
	const [credits,setCredits] = useState("")

	const validate = (value) => {
		if(validator.isStrongPassword(value,{
			minLength:8,minLowerCase:1,minUpperCase:1,
			minSymbol:1,minNumber:1
		}))
		{
			setErrorMessage("Password is Strong Password")
		}
		else{
			setErrorMessage("Password is Weak")
		}

	}

	const creditvalidate = (value) => {

		if(validator.isCreditCard(value))
		{
			setCredits("Valid Credit Card")
		}
		else{
			setCredits("Invalid Credit Card No")
		}
	}

  return (
    <div className="App">
		<pre>
			<h1>Password Validator in React JS</h1>
			<lable>Enter Password:
				<input type="text" onChange={(e)=>validate(e.target.value)} />
			</lable>
			<p>{errormessage===null
				?"":
				<span>{errormessage}</span>
			}
			</p>

			<h1>Card Validator in React JS</h1>
			<lable>Enter Credit Card No:
				<input type="text" onChange={(e)=>creditvalidate(e.target.value)} />
			</lable>
			<p>{credits===null
				?"":
				<span>{credits}</span>
			}
			</p>

		</pre>
    </div>
  );
}

export default App;
