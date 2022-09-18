export default function Profile(props) {
    console.log('Test 작업');
    const id =props.match.params.id;
    console.log(id, typeof id);
    return <div>
        <h2>
        Profile입니다.
        </h2>
        {id && <p>id는 {id} 입니다.</p>}
        
       </div>
}