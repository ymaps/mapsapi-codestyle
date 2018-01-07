module.exports = {
    // Add additional rules from https://github.com/buzinas/tslint-eslint-rules
    'rulesDirectory': 'tslint-eslint-rules',
    'rules': {
        // TypeScript specific
        'no-empty-interface': true,
        'no-internal-module': true,
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                'parameter': 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            }
        ],
        'array-type': [true, 'array'],
        'class-name': true,

        // https://github.com/buzinas/tslint-eslint-rules#possible-errors
        'trailing-comma': [true, {multiline: 'never', singleline: 'never'}],
        'no-conditional-assignment': true,
        'no-console': [
            true,
            // Need manually specify all disallowed functions.
            'assert',
            'dir',
            'error',
            'info',
            'log',
            'time',
            'timeEnd',
            'trace',
            'warn'
        ],
        'no-constant-condition': [true, {checkLoops: false}],
        'no-control-regex': true,
        'no-debugger': true,
        'no-duplicate-case': true,
        'no-empty-character-class': true,
        'no-ex-assign': true,
        'no-extra-semi': true,
        'no-extra-boolean-cast': true,
        'no-inner-declarations': [true, 'both'],
        'no-invalid-regexp': true,
        'no-irregular-whitespace': true,
        'no-regex-spaces': true,
        'no-sparse-arrays': true,
        'no-unexpected-multiline': true,
        'no-unsafe-finally': true,
        'use-isnan': true,

        // https://github.com/buzinas/tslint-eslint-rules#best-practices
        'curly': true,
        'triple-equals': true,
        'no-arg': true,
        'no-empty': [true, 'allow-empty-catch'],
        'no-eval': true,
        'no-multi-spaces': true,
        'no-duplicate-variable': [true, "check-parameters"],
        'no-string-throw': true,
        'no-unused-expression': false,
        'radix': true,
        'no-unused-variable': true,
        'no-use-before-declare': true,

        // https://github.com/buzinas/tslint-eslint-rules#variables
        'array-bracket-spacing': [true, 'never'],
        'brace-style': [true, '1tbs'],
        'variable-name': [true, 'ban-keywords'],
        'eofline': true,
        'ter-indent': [true, 4, {SwitchCase: 1}],
        'linebreak-style': [true, 'LF'],
        'ter-max-len': [true, {code: 120, ignoreUrls: true}],
        'new-parens': true,
        'indent': [true, 'spaces'],
        'no-consecutive-blank-lines': true,
        'no-trailing-whitespace': true,
        'object-curly-spacing': [true, 'never'],
        'one-variable-per-declaration': true,
        'object-literal-key-quotes': [true, 'as-needed'],
        'quotemark': [true, 'single'],
        'semicolon': [true, 'always'],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type'
        ],
        'comment-format': [true, 'check-space'],
        'ban': [
            true,
            {"name": ["describe", "only"], "message": "Don't focus tests"},
            {"name": ["it", "only"], "message": "Don't focus tests"}
        ],

        // https://github.com/buzinas/tslint-eslint-rules#stylistic-issues
        'ter-arrow-parens': [true, 'always'],
        'ter-arrow-spacing': [true],
        'no-var-keyword': true,
        'ter-prefer-arrow-callback': [true, {
            'allowNamedFunctions': true
        }],
        'prefer-const': true,
        'prefer-object-spread': true
    }
};
