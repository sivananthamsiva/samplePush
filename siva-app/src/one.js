export default function One(){
    let a=new Date();

    return(
        <>
        <h1>{a.toDateString()}</h1>
        </>
    )
}