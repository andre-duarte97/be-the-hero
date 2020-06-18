const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const {page = 1} = request.query

        const ong_id = request.headers.authorization

        const [count]= await connection('incidents')
            .count()
            .where('ong_id', ong_id);


        const incidents = await connection('incidents')
            .select('*')
            .where('ong_id', ong_id)
        
        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents);
    }
}