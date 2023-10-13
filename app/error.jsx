'use client'
import ErrorSvg from '@public/icons/error.svg'

export default function Error({ error, reset }) {
    return (
        <section className='p-5 rounded' style={{ background: '#F4DEDE', border: '2px solid #DA7987', color: '#DA7987'}}>
            <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <h2>Opps, Error</h2>
                    { error  && <p>{error.message}</p> }
                </div>
                <ErrorSvg />
            </div>
            <button className='btn btn-danger' onClick={() => reset()}>
                Try again
            </button>
        </section>
    )
}