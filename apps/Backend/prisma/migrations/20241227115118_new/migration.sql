/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - Added the required column `GSTRate` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `IteamCode` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MRP` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PieceUnit` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Quantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hsnCode` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lowStockQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingStock` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingStockDate` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasePriceWithGst` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellingPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellingPriceWithGst` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "stock",
ADD COLUMN     "GSTRate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "IteamCode" TEXT NOT NULL,
ADD COLUMN     "MRP" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "PieceUnit" TEXT NOT NULL,
ADD COLUMN     "Quantity" INTEGER NOT NULL,
ADD COLUMN     "hsnCode" TEXT NOT NULL,
ADD COLUMN     "iteamDescription" TEXT,
ADD COLUMN     "iteamImage" TEXT,
ADD COLUMN     "itemName" TEXT NOT NULL,
ADD COLUMN     "lowStockQuantity" INTEGER NOT NULL,
ADD COLUMN     "openingStock" INTEGER NOT NULL,
ADD COLUMN     "openingStockDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "purchasePrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "purchasePriceWithGst" BOOLEAN NOT NULL,
ADD COLUMN     "sellingPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sellingPriceWithGst" BOOLEAN NOT NULL;
