export function submitFailure(fieldList) {
    return (errors) => {
        // Field Error(s). We need to step through fieldList to guarantee ordering (since redux-form returns an errors object, not array or map)
        fieldList.find((field) => {
            console.log("field: " + field)
            console.log("element: " + document.querySelector(`input[name=${field}], select[name=${field}]`))
            if (errors[field]) {
                console.log("error field: " + field)
                const elem = document.querySelector(`input[name=${field}], select[name=${field}]`);
                if (elem) {
                    elem.focus();
                    return true;
                }
            }
            // continue stepping through fieldList
            return false;
        });
    }
}