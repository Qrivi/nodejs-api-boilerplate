import database from '../domain/models';

class EpisodeService {
    static async getAllEpisodes() {
        try {
            return await database.Episode.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getEpisode(id) {
        try {
            const episode = await database.Episode.findOne({
                where: { id: Number(id) }
            });
            return episode;
        } catch (error) {
            throw error;
        }
    }

    static async addEpisode(newEpisode) {
        try {
            return await database.Episode.create(newEpisode);
        } catch (error) {
            throw error;
        }
    }

    static async updateEpisode(id, newEpisode) {
        try {
            const episode = await database.Episode.findOne({
                where: { id: Number(id) }
            });
            if (episode) {
                const [rowsUpdate, [updatedEpisode]] = await database.Episode.update(newEpisode, {
                    where: { id: Number(id) }
                });
                return updatedEpisode;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteEpisode(id) {
        try {
            const episode = await database.Episode.findOne({
                where: { id: Number(id) }
            });
            if (episode) {
                const deletedEpisode = await database.Episode.destroy({
                    where: { id: Number(id) }
                });
                return deletedEpisode;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default EpisodeService;
