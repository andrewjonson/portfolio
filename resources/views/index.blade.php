<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />

        <!-- Styles -->
        <link href="{{ asset('css/welcome.css') }}" rel="stylesheet" />
    </head>
    <body>
        <div id="app">
            <main class="py-4">
                <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top" id="sideNav">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">
                        <span class="d-block d-lg-none">Andrew Jonson</span>
                        <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="{{ asset('images/andrew.png') }}" alt="" /></span>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/login">Portfolio</a></li>
                        </ul>
                    </div>
                </nav>
                <!-- Page Content-->
                <div class="container-fluid p-0">
                    <!-- About-->
                    <section class="resume-section" id="about">
                        <div class="resume-section-content">
                            <h1 class="mb-0">
                                Andrew
                                <span class="text-primary">Jonson</span>
                            </h1>
                            <div class="subheading mb-5">
                                Kamias Street Barangay Sampaloc Tanay Rizal Philippines<br>
                                Email: <a href="mailto:andrew_jonson09@yahoo.com">andrew_jonson09@yahoo.com</a><br>
                                Contact #: +63 9184262078
                            </div>
                            <p class="lead mb-5">I am experienced in web and mobile application and leveraging agile frameworks to provide a robust synopsis for high level overviews.</p>
                            <div class="social-icons">
                                <a class="social-icon" target="_blank" href="https://www.linkedin.com/in/andrew-jonson-696016189/"><i class="fab fa-linkedin-in"></i></a>
                                <a class="social-icon" target="_blank" href="#"><i class="fab fa-github"></i></a>
                                <a class="social-icon" target="_blank" href="https://www.facebook.com/andrew.jonson.58"><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </section>
                    <hr class="m-0" />
                    <!-- Experience-->
                    <section class="resume-section" id="experience">
                        <div class="resume-section-content">
                            <h2 class="mb-5">Experience</h2>
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="mb-0">Web Application Developer</h3>
                                    <div class="subheading mb-3">University of Rizal System</div>
                                    <p>Developed an Online Library System with barcode integration. Developed an Online Web Application Database System for uploading and downloading confidential and non-confidential documents in support to the ISO Certification. Developed an Online Research, Projects and Inventory Monitoring System.</p>
                                </div>
                                <div class="flex-shrink-0"><span class="text-primary">August 2015 - Present</span></div>
                            </div>
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="mb-0">Data Processor</h3>
                                    <div class="subheading mb-3">M&M Data Processing Corporation</div>
                                    <p>Processed a US based projects which encodes all the data gathered from a Highschool and College Basketball Games.</p>
                                </div>
                                <div class="flex-shrink-0"><span class="text-primary">October 2014 - April 2015</span></div>
                            </div>
                        </div>
                    </section>
                    <hr class="m-0" />
                    <!-- Education-->
                    <section class="resume-section" id="education">
                        <div class="resume-section-content">
                            <h2 class="mb-5">Education</h2>
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="mb-0">STI College</h3>
                                    <div class="subheading mb-3">Bachelor of Information Technology</div>
                                </div>
                                <div class="flex-shrink-0"><span class="text-primary">June 2008 - April 2012</span></div>
                            </div>
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="mb-0">University of Rizal System</h3>
                                    <div class="subheading mb-3">Secondary</div>
                                </div>
                                <div class="flex-shrink-0"><span class="text-primary">June 2004 - April 2008</span></div>
                            </div>
                            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="flex-grow-1">
                                    <h3 class="mb-0">Camp Mateo Capinpin Elementary School</h3>
                                    <div class="subheading mb-3">Primary</div>
                                </div>
                                <div class="flex-shrink-0"><span class="text-primary">June 1998 - April 2004</span></div>
                            </div>
                        </div>
                    </section>
                    <hr class="m-0" />
                    <!-- Skills-->
                    <section class="resume-section" id="skills">
                        <div class="resume-section-content">
                            <h2 class="mb-5">Skills</h2>
                            <div class="subheading mb-3">Programming Languages, Tools and Frameworks</div>
                            <ul class="list-inline dev-icons">
                                <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                                <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                                <li class="list-inline-item"><i class="fab fa-php"></i></li>
                                <li class="list-inline-item"><i class="fab fa-laravel"></i></li>
                                <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                                <li class="list-inline-item"><i class="fab fa-vuejs"></i></li>
                                <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                                <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                                <li class="list-inline-item"><i class="fab fa-less"></i></li>
                                <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                                <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                            </ul>
                            <div class="subheading mb-3">Workflow</div>
                            <ul class="fa-ul mb-0">
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Web and Mobile Application, Responsive Design
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Progressive Web Application
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Single Page Application
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Cross Browser Testing & Debugging
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Cross Functional Teams
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Agile Development & Scrum
                                </li>
                            </ul>
                        </div>
                    </section>
                    <hr class="m-0" />
                    <!-- Interests-->
                    <section class="resume-section" id="interests">
                        <div class="resume-section-content">
                            <h2 class="mb-5">Interests</h2>
                            <p>Apart from being a web developer, I enjoy most of my time being outdoors playing basketball.</p>
                            <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                        </div>
                    </section>
                    <hr class="m-0" />
                    <!-- Awards-->
                    <section class="resume-section" id="awards">
                        <div class="resume-section-content">
                            <h2 class="mb-5">Awards & Certifications</h2>
                            <ul class="fa-ul mb-0">
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    Best in Thesis
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    Privacy Safety, Security and Trust Online Certification
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    Network Administration Certification
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    DOST-STARBOOKS Online Database Training and Seminar Certification
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    Software Development Workshop Certification
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    A.K.L.A.T.S Training and Seminar for KOHA Library System Certification
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    Orientation and Workshop in Utilizing KOHA Library System Certification
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                    Training and Orientation on Integrated Philippine e-Library Online Databases Certification
                                </li>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <!-- Core theme JS-->
        <script src="{{ asset('js/welcome.js') }}"></script>
    </body>
</html>
    