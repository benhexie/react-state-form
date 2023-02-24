import { useRef, useState } from "react"
import FormBlock from "./FormBlock"
import FormBundler from "./FormBundler"

const FormformJSONer = (formJSON, formArgs) => {

    if (!Array.isArray(formJSON)) {
        throw new Error('First argument must be an array!')
        return
    }
    const [state, setState] = useState({})
    const idList = useRef(new Set())

    const Form = Array.isArray(formJSON[0]) ? 
        formJSON.map((form, index) => <FormBundler 
                key={form.id || index} 
                form={form}
                state={{state, setState}}
                idList={idList}
                formArgs={formArgs}
            />) : 
        <form {...formArgs}>
            {formJSON.map((block, index) => <FormBlock 
                key={block.id || index} 
                block={block}
                state={{state, setState}}
                idList={idList}
            />)}
        </form>

    return [Form, {state, setState}]
}

export default FormformJSONer