import Link from 'next/link';
import React from 'react'

const index = (props) => {
  return (
    <>
    <h1>All News Categories</h1>
    <div className="allNews">
    {props.data && props.data.map((actData,i) => (
        <Link href={`/news/${actData.category}`} key={i}>
            <div className='singleNews' >
                <h2>{actData.category}</h2>
            </div>
        </Link>
    ))}
    </div>
    </>
  )
}

export default index

export async function getServerSideProps()
{
    let response = await fetch("http://localhost:4000/news");
    let data = await response.json();
    return {
        props : {data}
    }
}