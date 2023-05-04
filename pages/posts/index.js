import Link from 'next/link'

const posts = (props) => {
  return (
    <div>
        {props.data.map((data, index) => (
            <div key={index}>
                <Link href={`/posts/${data.id}`}>
                    <h1>{data.id} {data.title}</h1>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default posts

export async function getStaticProps(){
    const resp = await fetch('http://localhost:4000/posts');
    const data = await resp.json();
    return {
        props: {data},
        revalidate: 2,
    }
}