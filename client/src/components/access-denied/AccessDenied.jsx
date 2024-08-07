export default function AccessDenied() {
    return (
        <>
            <div style={{textAlign: "center", margin: 100}}>
                <h1><code>Access Denied</code></h1>
                <hr style={{margin:"auto", width: 500}} />
                    <h3 style={{margin: 20}}>You dont have permission to view this site.</h3>
                    <h3>🚫🚫🚫🚫</h3>
                    <h6>error code:403 forbidden</h6>
            </div>
        </>
    );
}