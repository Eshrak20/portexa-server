/*
  Warnings:

  - Changed the type of `duration_seconds` on the `View` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "View" DROP COLUMN "duration_seconds",
ADD COLUMN     "duration_seconds" INTEGER NOT NULL;
