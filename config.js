const PAGE_URL = process.env.NODE_ENV === 'production'
? 'https://mi-reina-isabella.onrender.com'
: 'http://localhost:3000'

module.exports = { PAGE_URL };