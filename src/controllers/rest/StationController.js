import StationService from '../../services/StationService';
import JsonResponse from './JsonResponse';

export default class StationController {
    
    static async getStations(req, res) {
        const r = new JsonResponse();
        try {
            const stations = await StationService.getAllStations();
            return r.send(res, 200, { stations });
        } catch (error) {
            return r.badRequest(res, `${error.name}: ${error.message}`);
        }
    }
}
