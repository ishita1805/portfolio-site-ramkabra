import React,{ useState } from 'react'
import './contact.css'
import { useForm } from 'react-hook-form'

const Contact = (props) => {
    const [sub,setSub] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        setSub(true);
        console.log(data);
      };
    

    return (
        <div className='contact'>
            <div className='contact-box'>
                <i className='fa fa-times' onClick={()=>props.close(true)}></i>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' name='name' placeholder='Enter Name' ref={register({ required: true })}/>
                    {errors.name && <p className='error-text'>Name is required.</p>}
                    <input type='number' name='number' placeholder='Enter Number' ref={register({ required: true })}/>
                    {errors.number && <p className='error-text'>Number is required.</p>}
                    <textarea type='text' name='query' placeholder='Enter Query' ref={register({ required: true })}/>
                    {errors.query && <p className='error-text'>Query is required.</p>}
                    {sub?<p className='center-contact-msg'>Thank you for your response</p>:<button className='button-form'>submit</button>}
                </form>
            </div>
        </div>
    )
}

export default Contact
