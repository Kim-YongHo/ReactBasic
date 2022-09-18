import queryString from 'query-string';

export default function About(props) {
    const searchParams = props.location.search;
    console.log(searchParams);
    // const obj = new URLSearchParams(searchParams);
    // console.log(obj.get('name'));
    const query = queryString.parse(searchParams);
    console.log(query)
    console.log(query.name)
    return (
    <div>
        <h2>About입니다.</h2>
        {query.name && <p>name은 {query.name}입니다.</p>}
    </div>
    );
}