

const Comments = ({ setusers, userdata,listdata }) => {
    return (
        <>
            <button className="api2" onClick={()=>setusers('comments')}>
                Comments
            </button>
            <div className="test">
                {listdata  && userdata == 'comments' ?
                    // userdata.map((user, index) => (
                    //     <div key={index} >
                    //         <div>{user.id}</div>
                    //     </div>
                    // ))
                    <pre>{JSON.stringify(listdata, null, 2)}</pre>
                    : "no users fount"}
            </div>
        </>
    );
};
export default Comments;