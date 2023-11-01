import { Router } from 'express';
import { validateReq } from '@/shared/utils/validateRequest';
import { listOrdersSchema } from './Orders.rules';
import { OrdersController } from './Orders.controller';

const ordersRouter = Router();

const ordersController = new OrdersController();

ordersRouter.get('/', validateReq(listOrdersSchema), ordersController.index);

export default ordersRouter;
