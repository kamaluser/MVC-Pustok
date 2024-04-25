namespace Pustok_MVC.wwwroot.js
{
    public class main
    {
        document.addEventListener("DOMContentLoaded", function() {
            const bookModals = document.querySelectorAll(".book-modal");

            bookModals.forEach(function (modal) {
                modal.addEventListener("click", function (e) {
                    e.preventDefault();
                    const url = this.getAttribute("href");

                    fetch(url)
                        .then(response => response.text())
                        .then(data => {
                            document.querySelector("#quickModal .modal-dialog").innerHTML = data;
                        });

                    document.querySelector("#quickModal").classList.add("show");
                });
            });
        });
    }
}
