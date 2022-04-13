const toastTrigger = document.querySelector("#liveToastBtn");
const toastLiveExample = document.querySelector("#liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}
