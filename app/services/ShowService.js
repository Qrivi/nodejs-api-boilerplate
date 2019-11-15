import database from '../domain/models';

class ShowService {
    static async getAllShows() {
        try {
            return await database.Show.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getShow(id) {
        try {
            const show = await database.Show.findOne({
                where: { id: Number(id) }
            });
            return show;
        } catch (error) {
            throw error;
        }
    }

    static async addShow(newShow) {
        try {
            return await database.Show.create(newShow);
        } catch (error) {
            throw error;
        }
    }

    static async updateShow(id, newShow) {
        try {
            const show = await database.Show.findOne({
                where: { id: Number(id) }
            });
            if (show) {
                const [rowsUpdate, [updatedShow]] = await database.Show.update(newShow, {
                    where: { id: Number(id) }
                });
                return updatedShow;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteShow(id) {
        try {
            const show = await database.Show.findOne({
                where: { id: Number(id) }
            });
            if (show) {
                const deletedShow = await database.Show.destroy({
                    where: { id: Number(id) }
                });
                return deletedShow;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default ShowService;
