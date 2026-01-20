import { createInput, createDropdown } from './input.ts'

const form: HTMLDivElement | null = document.createElement('div') as HTMLDivElement;

const portfolioNameInput: HTMLDivElement | null = createInput('Portfolio Name', 'Enter Portfolio Name')

const investmentGoal: HTMLDivElement | null = createDropdown('Investment Goal', ['Income Generation', 'Capital Preservation', 'Tax Saving', 'Diversification', 'Beating Inflation', 'Risk Management', 'Capital Appreciation'])

const investmentHorizon: HTMLDivElement | null = createDropdown('Investment Horizon', ['Short-Term Investment Horizon', 'Medium-Term Investment Horizon', 'Long-Term Investment Horizon'])

form.append(portfolioNameInput, investmentGoal, investmentHorizon)

export { form }