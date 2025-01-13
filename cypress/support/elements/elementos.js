class elementos {
    user = () => { return '[name="username"]' }
    passWord = () => { return '[name="password"]' }
    btnLogin = () => { return '#menuUser' }
    btnLogar = () => { return '#sign_in_btn' }
    nomeUsuario = () => { return '#menuUserLink' }
    produtoTelaHome = () => { return '#laptopsImg' }
    scrooll = () => { return '.select' }
    elementoLaptop = () => { return '#10' }
    nameProduct = () => { return 'h1.roboto-regular.screen768.ng-binding' }
    btnCriarNovaConta = () => { return '.create-new-account' }
    campoDeUserName = () => { return ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine' }
    campoDeEmail = () => { return '[sec-name="userEmail"] > .inputContainer > .ng-pristine' }
    campoDeSenha = () => { return ':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine' }
    campoConfirmaSenha = () => { return '[a-hint="Confirm password"] > .inputContainer > label' }
    checkBox = () => { return '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine' }
    btnCriarConta = () => { return '#register_btn' }
    btnAddToCart = () => { return '.fixedBtn > .roboto-medium' }
    btnCheckoutPopUp = () => { return '#checkOutPopUp' }
    nomeProduto = () => { return 'h3.ng-binding' }
    btnNext = () => { return '.mobileBtnHandler > #next_btn' }
    btnCheckBoxCard = () => { return '[data-ng-click="imgRadioButton = 2; checkedRadio = 2"] > input' }
    campoNumeroCartao = () => { return '#creditCard' }
    campoCvv = () => { return '.creditCard > .inputContainer > .ng-pristine' }
    campoNomeCartao = () => { return '[a-hint="Cardholder name"] > .inputContainer > .ng-pristine' }
    textoValorTotal = () => { return 'span.roboto-medium.totalValue.ng-binding' }
    btnPagar = () => { return '#pay_now_btn_ManualPayment' }
    textoValorTotalResumo = () => { return 'span.roboto-medium.totalValue.ng-binding' }
}

export default elementos;