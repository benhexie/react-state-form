import Stylesheet from 'reactjs-stylesheet'

export default {
    input: {
        text: {
            ...Stylesheet.create({
                'old': {
                    backgroundColor: 'gold'
                },
                'pale': {
                    backgroundColor: '#db7093',
                    width: '100%'
                }
            }), 
        }
    }
}