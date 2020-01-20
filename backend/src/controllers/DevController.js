const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    // get all devs
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    // create a dev
    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;
        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const responseponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = responseponse.data;
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    },

    // update a dev
    async update(request, response) {

        const { name, bio, latitude, longitude, techs } = request.body;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        dev = await Dev.updateOne({
            name,
            bio,
            location,
            techs: techsArray
        });


        return response.json(dev);
    },

    // delete a dev
    async destroy(request, response) {

        const { github_username } = request.params;

        dev = await Dev.deleteOne({
            github_username: {
                $eq: github_username
            }
        })

        return response.json(dev);
    }
};