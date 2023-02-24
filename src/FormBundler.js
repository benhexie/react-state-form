import FormBlock from "./FormBlock"
const FormBundler = ({form, state, idList, formArgs, event}) => {
    const Blocks = form.map((block, index) => <FormBlock 
                                                key={block.id || index} 
                                                block={block} 
                                                state={state}
                                                idList={idList}
                                                event={event}
                                              />)
    return (
        <form {...formArgs}>
            {Blocks}
        </form>
    )
}

export default FormBundler