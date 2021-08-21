-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "FeedbackContent" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Feedback" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FeedbackContent" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
