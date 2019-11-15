import { Router } from 'express';
import StationController from '../controllers/rest/StationController';

const router = Router();

router.get('/', StationController.getStations);

export default router;
