import React from 'react'
const subTitle = "Save The Day"
const title = (<h2 className='title'>Join  our free workshop <b>Advance<span>mastering </span></b>on Sales</h2>
)
const desc = "Limited Time offer! Hurry up"

function Register() {
  return (
    <section className='register-section padding-tb pb-0'>
<div className='container'>
    <div className='row g-4 row-cols-lg-2  row-cols-1align-item-center'>
        <div className='col'>
            <div className='section-header'>
                <span className='subtitle'>{subTitle}</span>
                {title}
                <p>{desc}</p>
            </div>
        </div>
        <div className='col'>
            <div className='section-wrapper'>
           <h4>Register Now</h4>
           <form className='register-form'>
            <input type="text" name='name' placeholder='username' className='reg-input' />
            <input type="text" name='email' placeholder='email' className='reg-input' />
            <input type="number" name='number' placeholder='phone' className='reg-input' />
            <button type='submit' className="lab-btn">
                Register Now

            </button>
           </form>
        </div>

        </div>
    </div>
</div>
    </section>
  )
}

export default Register