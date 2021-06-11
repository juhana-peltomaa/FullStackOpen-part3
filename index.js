
require('dotenv').config()
const Person = require('./models/person')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('post_info', (req) => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post_info', {
    skip: (req) => req.method !== ("PUT" || "POST")
    }))

app.use(morgan('tiny', {
    skip: (req) => req.method === ("PUT" || "POST")
    }))


app.get('/info', (request, response) => {
     Person.find({}).then(persons => {
        response.send(`<p>Phonebook has info for ${persons.length} people</p> ${new Date()}`)
        })
  })

  
app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
    response.json(persons)
    })
  })

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).end()
        }
      })
      .catch(error => next(error))
  })

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})


app.post('/api/persons/', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'both name and number must be included' 
        })
      }
    
    const person = new Person({
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 10000),
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })

})

app.put('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndUpdate(request.params.id, { "number": request.body.number} )
    .then(updatedPerson => {
        response.json(updatedPerson)
    })
    .catch(error => next(error))

})

const errorHandler = (error, request, response, next) => {
    console.error("error name", error.name)
    
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } 
    
    next(error)
    }
    
app.use(errorHandler)
  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })