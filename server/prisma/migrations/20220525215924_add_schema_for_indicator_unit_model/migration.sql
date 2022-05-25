-- CreateTable
CREATE TABLE "indicator_unit" (
    "id" UUID NOT NULL,
    "unit" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,
    "last_modified_at" TIMESTAMPTZ NOT NULL,
    "last_modified_by" TEXT NOT NULL,

    CONSTRAINT "indicator_unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "indicator_unit_unit_key" ON "indicator_unit"("unit");

-- CreateIndex
CREATE UNIQUE INDEX "indicator_unit_display_name_key" ON "indicator_unit"("display_name");
