import { Fragment, useEffect } from "react"
import otherElements from "./otherElements";
import formStyles from "./styles/formStyles";
import targetElements from "./targetElements";

const FormBlock = ({block, state, idList, event}) => {
    idList = idList.current;
    // 'block' MUST be an object
    if (typeof block !== 'object' || Array.isArray(block))
        throw new Error('You have a block that is not a valid object.')

    const {id, block: tag, children, ...props} = block;

    useEffect(() => {
        if (id) {
            if (idList.has(id))
                throw new Error(`You have more than one instance of ${id} .Every ID must be unique.`)
            idList.add(id)
        }
    }, [])

    // 'block' property must exist in every block and MUST not be null
    if (!tag) throw new Error(`Every block must have a 'block' property.`)

    let content = !targetElements.has(tag.toLowerCase()) ? 
        otherElements(tag.toLowerCase(), props, children) : null;
    
    switch (tag.toLowerCase()) {
        case 'input':
            if (!id) throw new Error
                (`Every 'form element' MUST have a unique ID. (It is used in state management)`)

            const template = ((args) => <input {...args} />).bind({})

            switch (props.type?.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    break;
                
                case 'button':
                case 'submit':
                    content = template({onChange: () => {}, ...styleFormatter(props), 
                                        ...event[id]})
                    break;
            
                default:
                    content = template({
                        ...styleFormatter(props), 
                        value: state.state[id] || '', 
                        onChange: (e) => state.setState(prevState => ({
                            ...prevState,
                            [id]: e.target.value
                        }))
                    })
                    break;  // text
            }
            break;

        case 'textarea':
            content = template({
                ...styleFormatter(props), 
                value: state.state[id] || '', 
                onChange: (e) => state.setState(prevState => ({
                    ...prevState,
                    [id]: e.target.value
                }))
            })
        break;

        case 'button':
            content = template({...styleFormatter(props), ...event[id]})
            break;

        default:
            break;
    }

    return (
        <Fragment>
            {content && content}
        </Fragment>
    )

    // Handles adding styles in order of precedence
    function styleFormatter(props) {
        const {style, type='text', ...otherProps} = props
        if (style && typeof style === 'object') {
            let {auto, ...customStyles} = style
            let autoStyles = {}
            if (auto) {
                autoStyles = formStyles[tag][type][auto]
            }
            return {type, ...otherProps, style:{...autoStyles, ...customStyles}}
        }
        else if (typeof style === 'string') {
            return {type, ...otherProps, style:{...formStyles[tag][type][style]}}
        }

        return props
    }
}

export default FormBlock