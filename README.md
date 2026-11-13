# Rahul Shetty Client App - Playwright Automation

This project is a Data-Driven test automation framework built for the Rahul Shetty Client App using Playwright and ES6 modules.

## Framework Features
- **Data-Driven Testing:** Uses external JSON files for separating test logic from test data.
- **Tagging & Execution Control:** Supports `@smoke` and `@regression` execution.
- **Soft Assertions:** Captures multiple validation errors in negative scenarios without stopping the test.
- **Automated Screenshots:** Captures full-page screenshots on failure.

## Prerequisites
1. Install Node.js
2. Install dependencies: `npm install`
3. Install Playwright browsers: `npx playwright install`

## How to Run the Tests
- **Run Smoke Tests (Positive Flow):** 
  `npx playwright test --grep "@smoke"`

- **Run Regression Tests (Positive + Negative Flows):** 
  `npx playwright test --grep "@regression"`

- **Run in UI Mode:** 
  `npx playwright test --ui`