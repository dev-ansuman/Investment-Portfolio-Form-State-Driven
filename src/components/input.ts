const createInput = (label: string, placeholder: string): HTMLDivElement => {
    const inputDiv = document.createElement('div') as HTMLDivElement
    inputDiv.classList.add('inputDiv')

    const inputLabel = document.createElement('label') as HTMLLabelElement
    inputLabel.textContent = label

    const input = document.createElement('input') as HTMLInputElement
    input.placeholder = placeholder

    inputDiv.append(inputLabel, input)

    return inputDiv;
}

const createDropdown = (label: string, options: string[]) => {
    const dropdownDiv = document.createElement('div') as HTMLDivElement
    dropdownDiv.classList.add('dropdownDiv')

    const dropdownLabel = document.createElement('label') as HTMLLabelElement
    dropdownLabel.textContent = label

    const select = document.createElement('select') as HTMLSelectElement
    for(let i = -1; i < options.length; i++) {
        const option = document.createElement('option') as HTMLOptionElement
        if(i === -1) {
            option.textContent = '-- Select --'
            select.appendChild(option)
            continue
        }
        option.textContent = options[i]
        select.appendChild(option)
    }

    dropdownDiv.append(dropdownLabel, select)

    return dropdownDiv;
}

const createRadio = (label: string, options: string[]) => {
    const radioDiv = document.createElement('div') as HTMLDivElement
    radioDiv.classList.add('radioDiv')

    const radioDivLabel = document.createElement('label') as HTMLLabelElement
    radioDivLabel.textContent = label

    for(let i = 0; i < options.length; i++) {
        const label = document.createElement('label') as HTMLLabelElement
        label.id = i.toString()

        const radioInput = document.createElement('input') as HTMLInputElement
        radioInput.type = 'radio'
        radioInput.setAttribute('for', `${i}`)

        radioInput.textContent = options[i]
        // select.appendChild(option)
    }

}

export { createInput, createDropdown, createRadio }