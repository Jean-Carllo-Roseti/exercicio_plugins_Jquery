$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            eMail: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },  
            end: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone.',
            eMail: 'Por favor, insira seu e-mail.',
            cep: 'Por favor, insira seu cep.',
            cpf: 'Por favor, insira seu cpf.',
            end: 'Por favor, insira seu endereço.',
        }
    })
})
