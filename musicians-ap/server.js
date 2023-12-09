const express = require('express')
const app = express()
const PORT = 8000
const herokuPort = process.env.PORT
gospleMusicians ={
  'chriswilbeck': {
    'age': '34',
    'birthName':'Christian Gameh',
    'birthLocation': 'Doyumo, Ghana'
  } ,

  'wofa' : {
    'age': '42',
    'birthName':'Patrick Nyarko',
    'birthLocation': 'Cape Coast, Ghana'
  } ,

  'mirra': {
    'age': '16',
    'birthName':'Mirranda',
    'birthLocation': 'somenya, Ghana'
  } ,

  'rossy': {
    'age': '29',
    'birthName':'Rosemary Agbeve',
    'birthLocation': 'Krobo, Ghana'
  } ,

  'unknown': {
    'age': '0',
    'birthName':' unknown',
    'birthLocation': ' unknown'
  } 
}



app.get('/', (request,response) =>{
      response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) =>{
  response.json(gospleMusicians)
})


 app.get('/api/:name', (request,response) =>{
    const musiciansName = request.params.name.toLowerCase()
    if(gospleMusicians[musiciansName]){
        response.json(gospleMusicians[musiciansName])
    }else{
        response.json(gospleMusicians['unknown'])
    }
    
})



app.listen(herokuPort || PORT,()=>{
    console.log(`Server is running on port ${PORT}!!!, better go catch it`)
})