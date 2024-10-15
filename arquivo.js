'use strict'

//Abrir tela de cadastro
const abrirTela = () => document.getElementById('tela_cadastro_js').classList.add('active')
//Fechar tela de cadastro
const closeTela = () => {
    limparCampos()
    document.getElementById('tela_cadastro_js').classList.remove('active')
}

//localStorage
const getLocalStorage = () =>  JSON.parse(localStorage.getItem('db_usur')) ?? []
const setLocarStorage = (db_usur) => localStorage.setItem("db_usur", JSON.stringify(db_usur))

//DELETE
const deleteUsuario = (indexUsuario) => {
    const db_usur = readUsuario() 
    db_usur.splice(indexUsuario, 1)
    setLocarStorage(db_usur)
}

//READ
const readUsuario = () => getLocalStorage()

//CREATE
const createUsuario = (usuario) => {
    const db_usur = getLocalStorage()
    db_usur.push (usuario)
    setLocarStorage(db_usur)
}

//Validar os campos de cadastro
const campoValido = () => {
    return document.getElementById('tela_cadastro_form').reportValidity()
}

const limparCampos = () => {
    const campos = document.querySelectorAll('.campo_cadastro')
    campos.forEach(campo => campo.value = "")
}

//Interação com o html
const saveUsuario = () =>{
    if (campoValido()){
        const usuario = {
            nome     : document.getElementById('nome_usuario').value,
            dataNasc : document.getElementById('nasc_usuario').value,
            telefone : document.getElementById('tel_usuario').value,
            email    : document.getElementById('email_usuario').value
        }
        createUsuario(usuario)
        console.log("Usuário cadastrado.")
        limparCampos()
        updateTabela()
        closeTela()
    } 
}

//Criar linhas na tabela
const criarLinha = (usuario, indexUsuario) =>{
    const newLinha = document.createElement('tr')
    newLinha.innerHTML = `
        <td>${usuario.nome}</td>
        <td>${usuario.dataNasc}</td>
        <td>${usuario.telefone}</td>
        <td>${usuario.email}</td>
        <td>
            <button type="button" class="botao_consultar" id="consultar-${indexUsuario}">Consultar</button>
            <button type="button" class="botao_deletar" id="deletar-${indexUsuario}">Deletar</button>
        </td>
    `
    document.querySelector('#tabela_user>tbody').appendChild(newLinha)
}

//Limpar a tabela antes de acontecer o update/atualização
const limparTabela = () => {
    const rows = document.querySelectorAll('#tabela_user>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

//Atualizar tabela
const updateTabela = () => {
    const db_usur = readUsuario()
    limparTabela()
    db_usur.forEach(criarLinha)
}

//Pegar info do usuario
const viewUsuario = (usuario) => {
    document.getElementById('nome_usuario').value = usuario.nome
    document.getElementById('nasc_usuario').value = usuario.dataNasc
    document.getElementById('tel_usuario').value = usuario.telefone
    document.getElementById('email_usuario').value = usuario.email
}

//Consultar usuário
const consultUsuario = (index) => {
    const usuario = readUsuario()[index]
    viewUsuario(usuario)
    console.log("Consultando usuário.")
    abrirTela()
}

//Consultar e deletar
const consultarDeletar = (evento) => {
    if (evento.target.type == 'button'){
        const [action, index] = evento.target.id.split('-')
        if (action == 'consultar'){
            consultUsuario(index)
        }else{
            const usuario = readUsuario()[index]
            const response = confirm (`Deseja realmente deletar o usuário ${usuario.nome}?`)
            if (response){
                deleteUsuario(index)
                console.log("Usuário deletado.")
                updateTabela()
            }
        }
    }
}

updateTabela()

//Ações de click
document.querySelector('#tabela_user>tbody').addEventListener('click', consultarDeletar)