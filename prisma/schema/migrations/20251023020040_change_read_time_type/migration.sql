/*
  Warnings:

  - The `read_time` column on the `Blog` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "read_time",
ADD COLUMN     "read_time" INTEGER NOT NULL DEFAULT 0;
