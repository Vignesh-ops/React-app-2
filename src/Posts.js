

const Posts = ({ setusers, userdata,listdata }) => {
    return (
        <>
            <button className="api2" onClick={()=>setusers('posts')}>
                Posts
            </button>

        </>
    );
};
export default Posts;  