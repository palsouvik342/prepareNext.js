const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream('public/data.csv');

export async function getServerSideProps() {
  papa.parse(file,{
      header: true,
      worker: true, 
      step: function(result) {
          console.log(result)
          return {
            props:{
              result
            }
          }
        },
        complete: function(results, file) {
          console.log('parsing completed');
        }
  });
}


const showDataFromCSV = () => {
  return (
    <div>
      abc
    </div>
  )
}

export default showDataFromCSV