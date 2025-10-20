const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

// Conexão com o banco
const conn = require('./db/conn')

// Middlewares
app.use(express.json())
app.use(cors({ credentials: true, origin: '*' }))
app.use(express.static('public'))

// Rotas
const UserRoutes = require('./routes/UserRoutes')
const LaboratorioRoutes = require('./Routes/LaboratorioRoutes')
const AgendamentoRoutes = require('./Routes/AgendamentoRoutes')
const ProfessorRoutes = require('./Routes/ProfessorRoutes')
const CoordenadorRoutes = require('./Routes/CoordenadorRoutes')
const TurmasRoutes = require('./Routes/TurmasRoutes')
const BlocoRoutes = require('./Routes/BlocoRoutes')
const ProfessorTurmaRoutes = require('./Routes/ProfessorTurmaRoutes')

// Registro das rotas com prefixos
app.use('/users', UserRoutes)
app.use('/laboratorios', LaboratorioRoutes)
app.use('/agendamentos', AgendamentoRoutes)
app.use('/professores', ProfessorRoutes)
app.use('/coordenadores', CoordenadorRoutes)
app.use('/turmas', TurmasRoutes)
app.use('/blocos', BlocoRoutes)
app.use('/professor-turma', ProfessorTurmaRoutes)

// Inicialização do servidor
conn
  .sync()
  .then(() => {
    app.listen(8000, () => console.log('✅ Servidor rodando na porta 8000'))
  })
  .catch((error) => console.log('❌ Erro ao conectar no banco:', error))
