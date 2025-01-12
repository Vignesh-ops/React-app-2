
const Form = ({ setusers }) => {
    return (
        <>
            <button className="api1" onClick={()=>setusers('users')}>
                users
            </button>
            <button className="api2" onClick={()=>setusers('posts')}>
                Posts
            </button>
            <button className="api2" onClick={()=>setusers('comments')}>
                Comments
            </button>
          
        </>
    );
};
export default Form;  