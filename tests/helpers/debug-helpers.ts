import { test, Page } from "@playwright/test";
import fs from "fs";
import { authFile } from "../models/AuthLocalhostPage";

export async function debugAuthLogs(page: Page) {
    console.log("URL после логина:", page.url());
    console.log(
        "Cookies:",
        JSON.stringify(await page.context().cookies(), null, 2),
    );
    console.log(
        "localStorage:",
        await page.evaluate(() => ({ ...localStorage })),
    );
    console.log(
        "sessionStorage:",
        await page.evaluate(() => ({ ...sessionStorage })),
    );
}

export async function checkWriteAuthfile(page: Page) {
    const written = fs.readFileSync(authFile, "utf-8");
    await test.step(`Проверка записи содержимого файла`, async () => {
        console.log("Содержимое записанного файла:", written);
    });
}
