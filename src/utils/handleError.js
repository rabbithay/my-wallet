import ModalAlert from './ModalAlert';

function generateErrorMessage(status) {
  const message = {
    404: 'o endereço que você procura não existe :/',
    422: 'dados inválidos :/ tente novamente',
    500: 'ocorreu um erro interno do servidor :( sentimos muito, tente novamente mais tarde',
    405: 'essa é uma rota privada, você precisa se autenticar para acessar',
    401: 'oops, acesso não autorizado',
    409: 'email e/ou senha invalidos',
  };
  return message[status] || '';
}

export default function handleError(error) {
  const title = generateErrorMessage(error?.response?.status);

  const modalObj = {
    icon: 'error',
    title,
  };
  ModalAlert(modalObj);
}
