<!doctype html>
<html lang="en">

    <head>
         <meta charset="utf-8">
<title>Login | Inferno Drainer</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta content="Inferno Drainer Panel" name="description">
<meta content="Inferno Team" name="author">

<meta property="og:title" content="Inferno Drainer Panel">
<meta property="og:type" content="website" />
<meta property="og:url" content="https://inferno-drainer.com">

<!-- App favicon -->
<link rel="shortcut icon" href="/assets/images/infernoicon.svg" type="image/svg+xml"> 
                <!-- Bootstrap Css -->
        <link href="/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    </head>

    <body>
        <div class="account-pages my-5 pt-sm-5">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8 col-lg-6 col-xl-5">
				<div class="card overflow-hidden">
					<div class="bg-primary bg-soft">
						<div class="row">
							<div class="col-7">
								<div class="text-primary p-4">
									<h5 class="text-primary">
										Welcome back to Inferno Drainer Panel
									</h5>
									<p>Please sign-in to your account and start the adventure.</p>
								</div>
							</div>
							<div class="col-5 align-self-end">
								<img
									src="/assets/images/profile-img.png"
									alt=""
									class="img-fluid"
								/>
							</div>
						</div>
					</div>
					<div class="card-body pt-0">
						<div class="auth-logo">
							<a href="/" class="auth-logo-light">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img
											src="/assets/images/infernoicon.svg"
											alt=""
											class="rounded-circle"
											height="34"
										/>
									</span>
								</div>
							</a>

							<a href="/" class="auth-logo-dark">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img
											src="/assets/images/infernoicon.svg"
											alt=""
											class="rounded-circle"
											height="78"
										/>
									</span>
								</div>
							</a>
						</div>
						 
						<div class="p-2">
							<form
								class="form-horizontal"
								action="/auth-validate"
								method="post"
							>
								<div id="error"></div>
								<div class="mb-3">
									<label for="customerId" class="form-label">Customer ID</label>
									<input
										type="text"
										class="form-control"
										name="customerId"
										id="customerId"
										placeholder="Enter Customer ID"
									/>
								</div>

								<div class="mb-3">
									<label class="form-label">Password</label>
									<div class="input-group auth-pass-inputgroup">
										<input
											type="password"
											class="form-control"
											placeholder="Enter password"
											aria-label="Password"
											name="password"
											aria-describedby="password-addon"
										/>
										<button
											class="btn btn-light"
											type="button"
											id="password-addon"
										>
											<i class="mdi mdi-eye-outline"></i>
										</button>
									</div>
								</div>

								<div class="mt-3 d-grid">
									<button
										class="btn btn-primary waves-effect waves-light"
										type="submit"
									>
										Log In
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="mt-5 text-center">
					<div>
						<p>
							©
							<script>
								document.write(new Date().getFullYear());
							</script>
							Inferno. Crafted with <i class="mdi mdi-heart text-danger"></i>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


        <!-- JAVASCRIPT -->
<script src="/assets/libs/jquery/jquery.min.js"></script>
<script src="/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/libs/metismenu/metisMenu.min.js"></script>
<script src="/assets/libs/simplebar/simplebar.min.js"></script>
<script src="/assets/libs/node-waves/waves.min.js"></script>
        

        <!-- App js -->
        <script src="/assets/js/app.js"></script>

    </body>
    </html>