const artist = require('../model/user'); 

const remove= async (req, res) => {
    try {
        const userId = req.params.id;
        const movieId = req.params.imdbId;
        console.log(movieId)
        const user = await artist.findById(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found', code: 404 });
        }
        const movieIndex =  user.movie.findIndex(movie => movie.id === movieId);
        console.log(movieIndex)

        if (movieIndex === -1) {
            return res.status(404).send({ message: 'Movie not found in playlist', code: 404 });
        }
        user.movie.splice(movieIndex, 1);
        await user.save();
        res.status(200).send({ message: 'Movie deleted from playlist', code: 200 ,movieId});
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send({ message: 'Internal server error', code: 500 });
    }
};

module.exports = {remove};
