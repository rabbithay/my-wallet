/* eslint-disable no-unused-expressions */
import Swal from 'sweetalert2';

function ModalAlert({
  icon,
  title,
  description,
  buttonOptions,
  functionOnConfirm,
  share,
}) {
  const viewportWidth = window.innerWidth;
  const obj = {
    title: `<span style="color:#222; font-family: Raleway; font-weight: 300; font-size:22px">${title}</span>`,
    backdrop: '#FFFFFFE2',
    background: '#bbbbcd',
    reverseButtons: true,
    cancelButtonColor: '#FFFFFF',
    confirmButtonColor: '#fb76b5',
  };
  viewportWidth > 600 ? (obj.width = 600) : (obj.width = '60%');
  icon !== undefined ? (obj.icon = icon) : '';
  description !== undefined
    ? (obj.html = `<span style="color:#FFFFFF" font-family: lato;>${description}<span>`)
    : '';
  if (buttonOptions) {
    obj.showConfirmButton = true;
    obj.showCancelButton = true;
    obj.confirmButtonText = `<span style="font-family: lato; font-weight: 700;">${
      share ? 'Yes, share' : 'Yes, delete'
    }</span>`;
    obj.cancelButtonText = '<span style="color:#1877F2; font-family: lato; font-weight: bold;">No, cancel<span>';
  }

  Swal.fire(obj).then((result) => {
    if (result.isConfirmed && buttonOptions === true) {
      functionOnConfirm();
    }
  });
}

export default ModalAlert;
