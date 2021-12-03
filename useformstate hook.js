import {useFormState} from 'react-use-form-state';
export default function SignUpForm(){
    const[formState,{text,email,password,radio}]=useFormState();
    return( 
        <form onSubmit ={()=> console.log(formState)}>
            <input {...text('name')}/>
            <input {...email('email')} required/>
            <input {...password('password')}/>
            <input {...radio('plan','free')}/>
        </form>
    )
}