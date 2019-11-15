import database from '../domain/models';

export default class StationService {
    static async getAllStations() {
        try {
            return await database.Station.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getStation(id) {
        try {
            const station = await database.Station.findOne({
                where: { id: Number(id) }
            });
            return station;
        } catch (error) {
            throw error;
        }
    }

    static async addStation(newStation) {
        try {
            return await database.Station.create(newStation);
        } catch (error) {
            throw error;
        }
    }

    static async updateStation(id, newStation) {
        try {
            const station = await database.Station.findOne({
                where: { id: Number(id) }
            });
            if (station) {
                const [rowsUpdate, [updatedStation]] = await database.Station.update(newStation, {
                    where: { id: Number(id) }
                });
                return updatedStation;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteStation(id) {
        try {
            const station = await database.Station.findOne({
                where: { id: Number(id) }
            });
            if (station) {
                const deletedStation = await database.Station.destroy({
                    where: { id: Number(id) }
                });
                return deletedStation;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
