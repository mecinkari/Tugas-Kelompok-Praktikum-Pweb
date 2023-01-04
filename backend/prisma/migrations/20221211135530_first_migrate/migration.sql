-- CreateTable
CREATE TABLE `Mahasiswa` (
    `npm` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `umur` INTEGER NOT NULL,
    `jkl` VARCHAR(191) NOT NULL,
    `fakultas` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`npm`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
