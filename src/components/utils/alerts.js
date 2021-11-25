import Swal from 'sweetalert2';

export function tenMintesLeft() {
  Swal.fire('10 minutes left');
}

export function fiveMinutesLeft() {
  Swal.fire('5 minutes left');
}

export function timeUp() {
  Swal.fire('Time is up, please save your work');
}
