// Hier importeer ik het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
// Ook importeer ik LiquidJS, een template engine die ik ga gebruiken om HTML te genereren
import express from 'express'
import pkg from 'liquidjs'

const { Liquid } = pkg

// Hier maak ik een nieuwe Express app aan
const app = express()

// Hier stel ik de view engine in op Liquid, en geef ik de map op waar de templates staan
const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')
app.set('view engine', 'liquid')

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
app.use(express.static('public'))
// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))
//--------------------------------------------------------------------------------------------------------------------//

// Hier definieer ik de routes
app.get('/', (req, res) => {
 res.render('index.liquid')
})

//--------------------------------------------------------------------------------------------------------------------//
// Hier stel ik de poort in waarop de app draait, en start ik de server
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log(`✅ App draait op http://localhost:${app.get('port')}`)
})