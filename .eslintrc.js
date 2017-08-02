module.exports = {
    'extends': 'airbnb',
    'rules': {
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'indent': [
            'error',
            4
        ],
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'no-param-reassign': [
            'error', {
                'props': false
            }
        ]
    }
};