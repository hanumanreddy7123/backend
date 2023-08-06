const artist = require('../model/user');

const getplaylist = async (req, res) => {
    try {
        console.log('In get playlist function');
        console.log(req.params.id)
        const result = await artist.findOne({ _id: req.params.id });

        if (result) {
            console.log(result);
            res.status(200).send({ message: 'data obtained', code: 200, result });
        } else {
            res.status(404).send({ message: 'Playlist not found', code: 404 });
        }
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send({ message: 'Internal server error', code: 500 });
    }
};

module.exports = { getplaylist };
