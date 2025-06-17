require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

async function testApi(){
	try {
		const responseAPI = await axios.get('https://api.themoviedb.org/3/movie/11/videos', {
			headers: {
				Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
			}
		})
	
    console.log(JSON.stringify(responseAPI.data, null, 2))
	} catch (error) {
		console.error('Erro ao buscar dados do filme:', error.message)
	}
}

testApi();