import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try{
    const {orderId } =  req.params;
    const { status } = req.body;

    if(!['WAITING', 'IN PROGRESS', 'DONE'].includes(status)){
      return res.status(400).json({
        error: 'Status should be onde of these: WAITING, IN PROGRESS, DONE'
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  }
  catch(err){
    console.log(err);
    res.sendStatus(500);
  }
}
