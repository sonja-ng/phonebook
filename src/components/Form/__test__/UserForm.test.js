import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserForm from '../UserForm'

test("Should render a form on screen", () => {
    render(<UserForm />)
    expect(screen.getByText("Form")).toBeInTheDocument()
})

test("Should have 3 text input fields", ()=>{
    render(<UserForm />)
    const textBoxes = screen.getAllByRole("textbox")
    expect(textBoxes).toHaveLength(3)
})

test('Should have an input for first name', ()=>{
    render(<UserForm />)

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
})

test('Should have an input for last name', ()=>{
    render(<UserForm />)

    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
})

test('Should have an input for phone number', ()=>{
    render(<UserForm />)

    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
})

test('Should have a submit button', ()=>{
    render(<UserForm />)
    
    expect(screen.getByRole("button", {name: /submit/i})).toBeInTheDocument()
})

test('Input fields should update as user types', () =>{
    render(<UserForm />)
    // const inputEl = screen.getByPlaceholderText(/first name/i)

    // // expect(inputEl.value).toBe("No")

    // fireEvent.change(inputEl, { target: { value: "Yes" } })

    // expect(inputEl.value).toBe("Yes");
})

test('button has correct initial color and initial text', ()=>{
    render(<UserForm/>)
    const colorBtn = screen.getByRole('button', { name: /Change to blue/i })
    expect(colorBtn).toHaveClass('red')

    fireEvent.click(colorBtn);

    expect(colorBtn).toHaveClass('blue')
    expect(colorBtn.textContent).toMatch(/Change to red/i)
});

test('initial conditions of button should be enabled and checkbox should not be checked', ()=>{
    render(<UserForm />)
    const colorBtn = screen.getByRole('button', { name: /Change to blue/i })
    const checkboxEl = screen.getByRole('checkbox', { name: /change button status/i})

    expect(colorBtn).toBeEnabled()
    expect(checkboxEl).not.toBeChecked()
})

test('button is disabled on first checkbox click and enabled on second click', ()=>{
    render(<UserForm />)

    const colorBtn = screen.getByRole('button', { name: /Change to blue/i })
    const checkboxEl = screen.getByRole('checkbox', { name: /change button status/i})

    fireEvent.click(checkboxEl);
    expect(colorBtn).toBeDisabled()
    
    fireEvent.click(checkboxEl);
    expect(colorBtn).toBeEnabled()
})