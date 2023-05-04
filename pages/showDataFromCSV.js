const fs = require('fs');
const Papa = require('papaparse');


function parseCSV()
{
  const file = fs.createReadStream('public/data.csv');
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => resolve(results),
      error: (error) => reject(error)
    });
  })
}
export async function getServerSideProps() {
  const resp = await parseCSV();
  const dataFromCSV = resp.data;
  console.log("all Data Came")
    return {
        props: {
          mainData:dataFromCSV
        }
    }
}

const showDataFromCSV = ({mainData}) => {
  // console.log("souvik"+mainData)
  return (
    <div className='csv_data'>
      <table border={1}>
        <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
            <th>Column3</th>
            <th>Column4</th>
            <th>Column5</th>
          </tr>
        </thead>
        <tbody>
        {mainData && mainData.map((data,index) => (
          <tr key={index}>
            <td>{data.column1}</td>
            <td>{data.column2}</td>
            <td>{data.column3}</td>
            <td>{data.column4}</td>
            <td>{data.column5}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default showDataFromCSV