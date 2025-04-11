export function inputError(errors, type) {
    for (let i = 0; i < errors?.length; i++) {
        let errorType = errors[i].key
        let errorMessage = errors[i]?.errors[0]
        if (errorType === type) return errorMessage
        else return null
    }
}