import Swal from 'sweetalert2';

class AlertModals {
  static showSuccessModal(title, message) {
    Swal.fire({
      title: `${title}`,
      text: `${message}`,
      icon: 'success',
    });
  }

  static showErrorModal(message) {
    Swal.fire({
      title: 'ERROR',
      text: `${message}`,
      icon: 'error',
    });
  }

  static showLoadingModal() {
    Swal.fire({
      title: 'Loading...',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}

export default AlertModals;
