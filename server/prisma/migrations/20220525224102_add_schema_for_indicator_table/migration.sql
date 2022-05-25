-- CreateTable
CREATE TABLE "indicator" (
    "id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "report_type_id" UUID NOT NULL,
    "indicator_unit_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "indicator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indicator_description_key" ON "indicator"("description");

-- AddForeignKey
ALTER TABLE "indicator" ADD CONSTRAINT "indicator_report_type_id_fkey" FOREIGN KEY ("report_type_id") REFERENCES "report_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "indicator" ADD CONSTRAINT "indicator_indicator_unit_id_fkey" FOREIGN KEY ("indicator_unit_id") REFERENCES "indicator_unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
