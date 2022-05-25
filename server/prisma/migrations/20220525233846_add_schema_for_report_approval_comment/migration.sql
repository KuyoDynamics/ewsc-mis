-- CreateTable
CREATE TABLE "report_approval_comment" (
    "id" UUID NOT NULL,
    "comment" TEXT NOT NULL,
    "comment_date" TIMESTAMP(3) NOT NULL,
    "commented_by" UUID NOT NULL,
    "report_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "report_approval_comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "report_approval_comment" ADD CONSTRAINT "report_approval_comment_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "report_approval"("report_id") ON DELETE RESTRICT ON UPDATE CASCADE;
