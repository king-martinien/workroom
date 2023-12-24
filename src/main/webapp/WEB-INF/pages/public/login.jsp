<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Workroom - Login</title>
    <link rel="stylesheet" href="<c:url value="/assets/css/style.css"/>">
</head>
<body>
<main class="main">
    <div class="login-form">
        <div class="info">
            <div class="logo"><img src="<c:url value="/assets/images/workroom-logo-white.png"/>" alt="workroom Logo">
            </div>
            <h1>Your place to work <br>Plan. Create. Control.</h1>
            <div class="illustration"><img src="<c:url value="/assets/images/illustration.png"/>" alt="illustration">
            </div>
        </div>
        <div class="form-content">
            <div class="logo">
                <img src="<c:url value="/assets/images/workroom-logo.png"/>" alt="workroom Logo">
            </div>
            <form action="" method="post" class="form">
                <h3>Sign In to Workroom</h3>

                <div class="entry">
                    <label for="email">Email Address</label>
                    <div class="entry-field">
                        <input type="text" name="email" id="email" placeholder="youremail@gmail.com">
                    </div>
                </div>

                <div class="entry">
                    <label for="password">Password</label>
                    <div class="entry-field">
                        <input type="password" name="password" id="password" placeholder="Password">
                        <button type="button" class="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12 3C8.6202 3 5.66131 4.63249 3.14546 7.31606C2.28113 8.23802 1.5305 9.22245 0.894336
                                      10.2075L0.655978 10.5849C0.398798 11.0018 0.214904 11.3341 0.105573 11.5528C-0.0351909
                                      11.8343 -0.0351909 12.1657 0.105573 12.4472L0.217516 12.6618C0.36935 12.943 0.595382
                                      13.3296 0.894336 13.7925C1.5305 14.7776 2.28113 15.762 3.14546 16.6839C5.66131 19.3675
                                      8.6202 21 12 21C15.3798 21 18.3387 19.3675 20.8545 16.6839C21.7189 15.762 22.4695 14.7776
                                      23.1057 13.7925L23.344 13.4151C23.6012 12.9982 23.7851 12.6659 23.8944 12.4472C24.0352 12.1657
                                      24.0352 11.8343 23.8944 11.5528L23.7825 11.3382C23.6306 11.057 23.4046 10.6704 23.1057
                                      10.2075C22.4695 9.22245 21.7189 8.23802 20.8545 7.31606C18.3387 4.63249 15.3798 3 12
                                      3ZM12 5C14.7452 5 17.2238 6.36751 19.3955 8.68394C20.1718 9.51198 20.8508 10.4026
                                      21.4256 11.2925L21.5707 11.5209L21.7054 11.7399L21.858 12L21.7054 12.2601C21.6191
                                      12.4028 21.5259 12.5522 21.4256 12.7075C20.8508 13.5974 20.1718 14.488 19.3955 15.3161C17.2238
                                       17.6325 14.7452 19 12 19C9.2548 19 6.77619 17.6325 4.60454 15.3161C3.82825 14.488 3.14919
                                       13.5974 2.57441 12.7075L2.42925 12.4791L2.29461 12.2601L2.141 12L2.29461 11.7399C2.38085
                                       11.5972 2.47415 11.4478 2.57441 11.2925C3.14919 10.4026 3.82825 9.51198 4.60454 8.68394C6.77619
                                        6.36751 9.2548 5 12 5ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16
                                        14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046
                                        14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                                      fill="#7D8592"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="entry-line">
                    <div class="entry entry-checkbox">
                        <input type="checkbox" name="rememberMe" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="<c:url value="forgot-password"/>">Forgot password?</a>
                </div>

                <button class="btn btn-primary">
                    <span>Sign In</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M19.7903 11.3871L19.7071 11.2929L14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289C12.9324 6.65338 12.9047 7.22061 13.2097 7.6129L13.2929 7.70711L16.585 11H5C4.44772 11 4 11.4477 4 12C4 12.5128 4.38604 12.9355 4.88338 12.9933L5 13H16.585L13.2929 16.2929C12.9324 16.6534 12.9047 17.2206 13.2097 17.6129L13.2929 17.7071C13.6534 18.0676 14.2206 18.0953 14.6129 17.7903L14.7071 17.7071L19.7071 12.7071C20.0676 12.3466 20.0953 11.7794 19.7903 11.3871Z"
                              fill="white"></path>
                    </svg>
                </button>
                <p>Don't have an account ? <a href="<c:url value="/signup"/>">Sign up</a></p>
            </form>
        </div>
    </div>
</main>
</body>
</html>