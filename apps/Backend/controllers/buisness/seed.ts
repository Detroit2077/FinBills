import client from "../../utils/client";
import { z } from "zod";

import express from "express";
const app = express();

const buisnessValidator = z.object({
  name: z.string(),
  address: z.string(),
  email: z.string().email(),
  phone: z.string().length(10),
});

export const addBuisness = async (req: any, res: any) => {
  try {
    const { name, address, email, phone } = req.body();
    const validatedData = buisnessValidator.safeParse(req.body);

    if (!validatedData.success) {
      return res.status(400).json({
        message: "Invalid values",
      });
    }

    const buisness = await client.business.create({
      data: {
        name,
        address,
        email,
        phone,
      },
    });
    
    console.log(buisness.id)
    res.status(200).json({
      data: buisness,
      message: "Buisness created successfully!",
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "An error occurred while creating the buisness",
    });
  }
}
