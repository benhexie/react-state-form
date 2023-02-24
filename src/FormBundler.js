import FormBlock from "./FormBlock"
const FormBundler = ({form, state, idList, formArgs}) => {
    const Blocks = form.map((block, index) => <FormBlock 
                                                key={block.id || index} 
                                                block={block} 
                                                state={state}
                                                idList={idList}
                                              />)
    return (
        <form {...formArgs}>
            {Blocks}
        </form>
    )
}

export default FormBundler