const Alert = ({ children, className, ...props }) => {
    return (
        <div className='alert alert-warning text-center' role='alert' {...props}>
            {children}
        </div>
    )
}

export default Alert
