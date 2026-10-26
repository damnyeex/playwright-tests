import { Page, Locator, test, expect } from "@playwright/test";
import fs from "fs";
import { authDir, authFile } from "../utils/consts/auth-consts";

export class AuthLocalhostPage {
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly submitLoginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginInput = this.page.getByRole("textbox", { name: "admin" });
        this.passwordInput = this.page.getByRole("textbox", {
            name: "••••••",
        });
        this.submitLoginBtn = this.page.getByRole("button", { name: "Войти" });
    }

    async openLoginPage() {
        await test.step("Открытие страницы логина", async () => {
            await this.page.goto("/login");
        });
    }

    async fillLoginTextBox() {
        await test.step(`Заполнение поля логина`, async () => {
            await this.loginInput.fill("user5");
        });
    }

    async fillPasswordTextBox() {
        await test.step(`Заполнение поля пароля`, async () => {
            await this.passwordInput.fill("user5");
        });
    }

    async clickLoginBtn() {
        await test.step("Нажатие кнопки войти", async () => {
            await this.submitLoginBtn.click();
        });
    }

    async waitForAuthToken() {
        await test.step("Ожидание токена аутентификации", async () => {
            await expect
                .poll(
                    async () =>
                        await this.page.evaluate(() =>
                            localStorage.getItem("token"),
                        ),
                    {
                        timeout: 10_000,
                        message: "Токен аутентификации не появился",
                    },
                )
                .toBeTruthy();
        });
    }

    async waitForAuthCookie() {
        await test.step("Ожидание токена аутентификации из куки", async () => {
            await expect
                .poll(
                    async () => (await this.page.context().cookies()).length,
                    {
                        timeout: 10_000,
                        message:
                            "Токен не появился в куки после аутентификации",
                    },
                )
                .toBeGreaterThan(0);
        });
    }

    async ensureAuthFolderExists() {
        await test.step(`Создание папки для auth-состояния`, async () => {
            fs.mkdirSync(authDir, { recursive: true });
        });
    }

    async saveAuthContext() {
        await test.step(`Сохранение контекста в authFile`, async () => {
            await this.page.context().storageState({ path: authFile });
        });
    }
}
