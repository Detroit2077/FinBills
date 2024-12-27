import express from 'express'
const app = express()
import client from '../../utils/client';




app.post('/addProducts' , async (req , res)=>{
    try{
       const {itemName , purchasePrice , purchasePriceWithGst , sellingPrice , sellingPriceWithGst , hsnCode , MRP , IteamCode , PieceUnit , Quantity , lowStockQuantity , GSTRate , iteamImage , iteamDescription , openingStock , openingStockDate} = req.body();

    //    const newProduct = await client.product.create({
    //         data:{
    //             itemName,
    //             purchasePrice,
    //             purchasePriceWithGst,
    //             sellingPrice,
    //             sellingPriceWithGst,
    //             hsnCode,
    //             MRP,
    //             IteamCode,
    //             PieceUnit,
    //             Quantity,
    //             lowStockQuantity,
    //             GSTRate,
    //             iteamImage,
    //             iteamDescription,
    //             openingStock,
    //             openingStockDate
    //         }
    // //     })
    //     res.status(200).json({message:'Product added successfully', newProduct})


    }catch(e){

    }
} )