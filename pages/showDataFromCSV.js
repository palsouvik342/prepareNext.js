const fs = require('fs');
const Papa = require('papaparse');

export async function getServerSideProps() {
  // papa.parse(file,{
  //     header: true,
  //     worker: true, 
  //     step: function(result) {
  //         console.log(result)
  //         return {
  //           props:{
  //             result
  //           }
  //         }
  //       },
  //       complete: function(results, file) {
  //         console.log('parsing completed'); 
  //         // console.log(results)
  //     }
  // });
  let mainData=[];
  const file = fs.createReadStream('public/data.csv');
  Papa.parse(file, {
    header: true,
    complete: function(results) {
      mainData = results.data;
      console.log(mainData)
    }
  });
  // console.log(mainData)
  return {
    props: {
      mainData,
    }
  }
}


const showDataFromCSV = ({mainData}) => {
  console.log(mainData)
  return (
    <div>
      {mainData && mainData.map(data => (
        <tr>
        </tr>
      ))}
    </div>
  )
}

export default showDataFromCSV