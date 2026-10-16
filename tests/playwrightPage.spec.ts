import { test, expect } from "@playwright/test";

test("Проверка отображения элементов хедера и баннера на странице", async ({
    page,
}) => {
    await page.goto("https://playwright.dev/");

    await expect
        .soft(page.getByRole("link", { name: "Playwright logo Playwright" }))
        .toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Docs" })).toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "MCP", exact: true }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "CLI", exact: true }))
        .toBeVisible();
    await expect.soft(page.getByRole("link", { name: "API" })).toBeVisible();
    await expect
        .soft(page.getByRole("button", { name: "Node.js" }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "GitHub repository" }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "Discord server" }))
        .toBeVisible();
    await expect
        .soft(
            page.getByRole("button", { name: "Switch between dark and light" }),
        )
        .toBeVisible();
    await expect
        .soft(page.getByRole("button", { name: "Search (Control+k)" }))
        .toBeVisible();
    await page
        .getByRole("heading", { name: "Playwright enables reliable" })
        .click();
    await expect
        .soft(page.getByText("One API to drive Chromium,"))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "Get started" }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "Star microsoft/playwright on" }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "97k+ stargazers on GitHub" }))
        .toBeVisible();
});

test("Проверка на корректность названий элементов хедера и баннера на странице", async ({
    page,
}) => {
    await page.goto("https://playwright.dev/");

    await expect
        .soft(page.getByRole("link", { name: "Playwright logo Playwright" }))
        .toContainText("Playwright");
    await expect
        .soft(page.getByRole("link", { name: "Docs" }))
        .toContainText("Docs");
    await expect
        .soft(page.getByRole("link", { name: "MCP", exact: true }))
        .toContainText("MCP");
    await expect
        .soft(page.getByRole("link", { name: "CLI", exact: true }))
        .toContainText("CLI");
    await expect
        .soft(page.getByRole("link", { name: "API" }))
        .toContainText("API");
    await expect
        .soft(page.getByRole("button", { name: "Node.js" }))
        .toContainText("Node.js");
    await expect
        .soft(page.getByRole("button", { name: "Search (Control+k)" }))
        .toContainText("Search");
    await expect
        .soft(page.getByRole("button", { name: "Search (Control+k)" }))
        .toContainText("Ctrl");
    await expect
        .soft(page.getByRole("button", { name: "Search (Control+k)" }))
        .toContainText("K");
    await expect
        .soft(
            page.getByRole("heading", { name: "Playwright enables reliable" }),
        )
        .toContainText(
            "Playwright enables reliable web automation for testing, scripting, and AI agents.",
        );
    await expect
        .soft(page.getByText("One API to drive Chromium,"))
        .toContainText(
            "One API to drive Chromium, Firefox, and WebKit — in your tests, your scripts, and your agent workflows. Available for TypeScript, Python, .NET, and Java.",
        );
    await expect
        .soft(page.getByRole("link", { name: "Get started" }))
        .toContainText("Get started");
    await expect
        .soft(page.getByRole("link", { name: "Star microsoft/playwright on" }))
        .toContainText("Star");
    await expect
        .soft(page.getByRole("link", { name: "97k+ stargazers on GitHub" }))
        .toContainText("97k+");
});

test("Проверка атрибутов href элементов хедера и мейна на странице", async ({
    page,
}) => {
    await page.goto("https://playwright.dev/");
    await expect
        .soft(page.getByRole("link", { name: "Playwright logo Playwright" }))
        .toHaveAttribute("href", "/");
    await expect
        .soft(page.getByRole("link", { name: "Docs" }))
        .toHaveAttribute("href", "/docs/intro");
    await expect
        .soft(page.getByRole("link", { name: "MCP", exact: true }))
        .toHaveAttribute("href", "/mcp/introduction");
    await expect
        .soft(page.getByRole("link", { name: "CLI", exact: true }))
        .toHaveAttribute("href", "/agent-cli/introduction");
    await expect
        .soft(page.getByRole("link", { name: "API" }))
        .toHaveAttribute("href", "/docs/api/class-playwright");
    await expect
        .soft(page.getByRole("link", { name: "GitHub repository" }))
        .toHaveAttribute("href", "https://github.com/microsoft/playwright");
    await expect
        .soft(page.getByRole("link", { name: "Discord server" }))
        .toHaveAttribute("href", "https://aka.ms/playwright/discord");
    await expect
        .soft(page.getByRole("link", { name: "Star microsoft/playwright on" }))
        .toHaveAttribute("href", "https://github.com/microsoft/playwright");
    await expect
        .soft(page.getByRole("link", { name: "97k+ stargazers on GitHub" }))
        .toHaveAttribute(
            "href",
            "https://github.com/microsoft/playwright/stargazers",
        );
    await expect
        .soft(page.getByRole("link", { name: "Testing documentation" }))
        .toHaveAttribute("href", "/docs/intro");
    await expect
        .soft(page.getByRole("link", { name: "CLI documentation" }))
        .toHaveAttribute("href", "/docs/getting-started-cli");
    await expect
        .soft(page.getByRole("link", { name: "MCP documentation" }))
        .toHaveAttribute("href", "/docs/getting-started-mcp");
});

test("Проверка переключения темы на странице (через const)", async ({
    page,
}) => {
    await page.goto("https://playwright.dev/");
    const html = page.locator("html");
    const buttonTheme = page.getByRole("button", {
        name: "Switch between dark and light",
    });

    await expect.soft(html).toHaveAttribute("data-theme-choice", "system");

    await buttonTheme.click();
    await expect.soft(html).toHaveAttribute("data-theme-choice", "light");
    await expect.soft(html).toHaveAttribute("data-theme", "light");

    await buttonTheme.click();
    await expect.soft(html).toHaveAttribute("data-theme-choice", "dark");
    await expect.soft(html).toHaveAttribute("data-theme", "dark");

    await buttonTheme.click();
    await expect.soft(html).toHaveAttribute("data-theme-choice", "system");
});

test("Проверка переключения темы на странице №2", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await expect
        .soft(page.locator("html"))
        .toHaveAttribute("data-theme-choice", "system");
    await page
        .getByRole("button", {
            name: "Switch between dark and light",
        })
        .click();

    await expect
        .soft(page.locator("html"))
        .toHaveAttribute("data-theme-choice", "light");

    await expect
        .soft(page.locator("html"))
        .toHaveAttribute("data-theme", "light");

    await page
        .getByRole("button", {
            name: "Switch between dark and light",
        })
        .click();

    await expect
        .soft(page.locator("html"))
        .toHaveAttribute("data-theme-choice", "dark");

    await expect
        .soft(page.locator("html"))
        .toHaveAttribute("data-theme", "dark");
});

test("Проверка отображения и корректности названий карточек из секции с установкой", async ({
    page,
}) => {
    await page.goto("https://playwright.dev/");

    await expect
        .soft(page.getByText("Playwright TestFull-featured"))
        .toBeVisible();
    await expect
        .soft(page.getByText("Playwright CLIToken-efficient"))
        .toBeVisible();
    await expect
        .soft(page.getByText("Playwright MCPModel Context"))
        .toBeVisible();

    await expect
        .soft(page.getByText("Playwright TestFull-featured"))
        .toContainText(
            "Playwright TestFull-featured test runner with auto-waiting, assertions, tracing, and parallelism across Chromium, Firefox, and WebKit.npm init playwright@latestTesting documentation",
        );

    await expect
        .soft(page.getByText("Playwright CLIToken-efficient"))
        .toContainText(
            "Playwright CLIToken-efficient browser automation for coding agents like Claude Code and GitHub Copilot. Skill-based workflows without large context overhead.npm i -g @playwright/cli@latestCLI documentation",
        );
    await expect
        .soft(page.getByText("Playwright MCPModel Context"))
        .toContainText(
            "Playwright MCPModel Context Protocol server that gives AI agents full browser control through structured accessibility snapshots.npx @playwright/mcp@latestMCP documentation",
        );
});

test("Проверка отображения, корректности названий ссылок внутри секции с фичами", async ({
    page,
}) => {
    await page.goto("https://playwright.dev/");
    await expect
        .soft(page.getByRole("link", { name: "Test generator" }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "Trace Viewer" }))
        .toBeVisible();
    await expect
        .soft(page.getByRole("link", { name: "VS Code extension" }))
        .toBeVisible();

    await expect
        .soft(page.getByRole("link", { name: "Test generator" }))
        .toContainText("Test generator");
    await expect
        .soft(page.getByRole("link", { name: "Trace Viewer" }))
        .toContainText("Trace Viewer");
    await expect
        .soft(page.getByRole("link", { name: "VS Code extension" }))
        .toContainText("VS Code extension");

    await expect
        .soft(page.getByRole("link", { name: "Test generator" }))
        .toHaveAttribute("href", "docs/codegen");
    await expect
        .soft(page.getByRole("link", { name: "Trace Viewer" }))
        .toHaveAttribute("href", "docs/trace-viewer-intro");
    await expect
        .soft(page.getByRole("link", { name: "VS Code extension" }))
        .toHaveAttribute("href", "docs/getting-started-vscode");
});
