import React from 'react'

const category = ({newsByCategory}) => {
  return (
    <>
    <h1>News Filtered by Category</h1>
    <div className="allNews">
        {newsByCategory && newsByCategory.map((actData,i) => (
            <div className='singleNews' key={i}>
                <h2>{actData.title}</h2>
                <h4>{actData.body} | {actData.category}</h4>
            </div>
        ))}
    </div>
    </>
  )
}

export default category

export async function getServerSideProps(context)
{
    const newsCategory = context.params.category;
    const {req, res} = context;
    res.setHeader('Set-Cookie', ['name=souvik pal'])
    console.log(req.headers.cookie)
    let response = await fetch(`http://localhost:4000/news?category=${newsCategory}`);
    let newsByCategory = await response.json();
    return {
        props : {newsByCategory}
    }

}