const express = require('express')
const app = express()

app.use(express.json())

let persons = [
      {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
      },
      {
        name: "Test name",
        number: "39-23-6423122",
        id: 5
      }
    ]

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p> ${new Date()}`)
  })
  
app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }

  })

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})


app.post('/api/persons/', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'both name and number must be included' 
        })
      }

    const exists = persons.find(per => per.name === body.name)

    if (exists) {
        return response.status(400).json({ 
            error: "name must be unique"
          })
    }
    
    
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 10000),
    }

    persons = persons.concat(person)

    response.json(person)

})
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })