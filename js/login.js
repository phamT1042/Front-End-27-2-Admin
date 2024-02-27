function Validator(options) {
    var formElement = document.querySelector(options.form)
    var selectorRules = {}

    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = inputElement.closest('.form-group').querySelector('.form-message')
        var rules = selectorRules[rule.selector]

        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break
        }

        if (errorMessage) {
            inputElement.closest('.form-group').classList.add('invalid')
            errorElement.innerText = errorMessage
        }
        else {
            inputElement.closest('.form-group').classList.remove('invalid')
            errorElement.innerText = ''
        }

        return !!errorMessage // Convert data type to boolean
    }

    if (formElement) {
        // Handle when pressing submit, check all fields
        formElement.addEventListener('submit', (e) => {
            // Remove the default event when pressing submit
            e.preventDefault()

            var isFormValid = true

            // Validate each rule, regardless of the 'blur' event
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)

                var isInvalid = validate(inputElement, rule)
                if (isInvalid) isFormValid = false
            })
            

            if (isFormValid) {
                // If we want to submit our code
                if (typeof options.onSubmit === 'function') {
                    // Tag has "name" attribute
                    var enableInputs = formElement.querySelectorAll('[name]')

                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        values[input.name] = input.value
                        return values
                    }, {})

                    options.onSubmit(formValues)
                    
                    location.href = "./page/dashboard.html"     
                }
                // If we want to submit default
                else {
                    formElement.submit()
                }
            }
            else console.log('Form Invalid')
        })

        // Loop through the rule for each field and handle the event
        options.rules.forEach(function(rule) {
            if (selectorRules[rule.selector]) 
                selectorRules[rule.selector].push(rule.test)
            else
                selectorRules[rule.selector] = [rule.test]

            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach(function(inputElement) {
                // Handles blur from input
                inputElement.addEventListener('blur', () => {
                    validate(inputElement, rule)
                })
    
                // Handle when user enters, the error field is hidden
                inputElement.addEventListener('input', () => {
                    inputElement.closest('.form-group').classList.remove('invalid')
                    var errorElement = inputElement.closest('.form-group').querySelector('.form-message')
                    errorElement.innerText = ''
                })
            })
        })
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

