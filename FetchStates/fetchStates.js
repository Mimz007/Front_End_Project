import abrivs from "./abbreviations.js"

export default function fetchStates(callback) {
    fetch('https://covidtracking.com/api/states') 
    .then(function(resp) { return resp.json() }) // Convert data to json
     .then(function(data) {
        
        let results = data.map(stat => {
             let stateName = abrivs.find(s=>s.abbreviation === stat.state).name

             let modItem = statesData.features.find(s=>s.properties.name === stateName)

             // If the item is found, then continue
             if (modItem) {
                 // setting new keys with their respective values
                 modItem.properties.deaths = stat.death
                 modItem.properties.positiveCases = stat.positive
                 modItem.properties.totalTests = stat.totalTestResults
                 modItem.properties.totalTests = stat.totalTestResults
                 //console.log(stat)
             }
             //console.log(modItem)
             return modItem
        })
        //console.log(results)
        callback(results)
    })
}

// fetchStates(callback)

// function callback(results) {
//     console.log("finished")
//     console.log(results)
// }