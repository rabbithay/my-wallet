import ModalAlert from '../components/ModalAlert';

export default function handleError(error) {
  let title = '';
  switch (error?.response?.status) {
    case 404:
      title = 'usuário ou senha inválidos, tente novamente';
      break;
    default:
      title = 'ocorreu um erro. por favor, recarregue a página';
  }
  const modalObj = {
    icon: 'error',
    title,
  };
  ModalAlert(modalObj);
}
