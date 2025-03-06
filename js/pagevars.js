const navbarHTML = `
<nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-1 py-3 py-lg-0">
    <a href="index.html" class="navbar-brand p-0">
        <h1 class="m-0 text-uppercase text-primary">
            <img src="img/logo.png"><img src="img/title.png">
        </h1>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 me-n3">
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="program.html" class="nav-item nav-link">Programs</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Announcements</a>
                <div class="dropdown-menu m-0">
                    <a href="reels.html" class="dropdown-item">റീൽസ് മത്സരം</a>
                    <a href="orgcomfly.html" class="dropdown-item">സ്വാഗതസംഘ രൂപീകരണം</a>
                </div>
            </div>
            <a href="location.html" class="nav-item nav-link">Location</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Gallery</a>
                <div class="dropdown-menu m-0">
                    <a href="orgcom.html" class="dropdown-item">സ്വാഗതസംഘം രൂപീകരണം</a>
                </div>
            </div>
            <a href="team.html" class="nav-item nav-link">Our Team</a>
            <a href="contact.html" class="nav-item nav-link">Contact Us</a>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<div class="container-fluid bg-dark text-secondary p-5">
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Quick Links</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-secondary mb-2" href="index.html"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-secondary mb-2" href="team.html"><i class="bi bi-arrow-right text-primary me-2"></i>Our team</a>
                    <a class="text-secondary mb-2" href="program.html"><i class="bi bi-arrow-right text-primary me-2"></i>Programs</a>
                    <a class="text-secondary mb-2" href="location.html"><i class="bi bi-arrow-right text-primary me-2"></i>How to reach</a>
                    <a class="text-secondary" href="contact.html"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Get In Touch</h3>
                <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>SPSS EKM Jilla Committe</p>
                <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>yuvavedi.ekm@gmail.com</p>
                <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+91-00000 00000</p>
            </div>
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Follow Us</h3>
                <div class="d-flex">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                        href="https://www.youtube.com/@YuvavediErnakulam" target="_blank"><i class="fab fa-youtube fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-secondary text-center border-top py-4 px-5"
        style="border-color: rgba(256, 256, 256, .1) !important;">
        <p class="m-0">&copy; <a class="text-secondary border-bottom" href="#">Your Site Name</a>. All Rights Reserved.
            Designed by <a class="text-secondary border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
    </div>
`;

document.getElementById("navbar-container").innerHTML = navbarHTML;
document.getElementById("footer-container").innerHTML = footerHTML;