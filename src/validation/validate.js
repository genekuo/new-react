const validate = fn => data =>
    data ? fn(data) : throw new Error(`Recieved invalid data ${data}`)

export default validate

