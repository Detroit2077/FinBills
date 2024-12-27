import { Router } from "express";
const buisnessRouter = Router();

import {addBuisness} from "../controllers/buisness/seed"



buisnessRouter.route('/addbuisness').post(addBuisness);











export default buisnessRouter ;