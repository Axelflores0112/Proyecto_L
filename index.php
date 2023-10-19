<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/style.css">
    <!--bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
    <body>
        <div class="container m-auto">
            <div class="row">
                    <div class="col-12 col-sm-8 col-md-6 m-auto ">
                        <div class="card border-dark p-3">
                            <div class="card-body">
                                <img src="images/login-icon1.png" alt="" class="img-fluid mx-auto d-block">
                                <h2 class="text-center pt-3 fw-bolder">Bienvenido</h2>
                                <h5 class="mb-3">Por favor logeate para continuar.</h5>
                            <form action="login" id="form">
                                <div class="mb-4">
                                    <div class="form-floating" id="grupo_correo">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                                        <label for="email" class="form-label ">Email</label>
                                    </div>
                                    <p id="email_vacio" style="display: none;">Ingrese un email valido</p>
                                </div>
                                <div class="mb-4">
                                    <div class="form-floating" id="grupo_password">
                                        <input type="password" class="form-control" name="password" id="password" placeholder="Contraseña">
                                        <label for="password" class="form-label">Password</label>
                                    </div>
                                    <p id="clave_vacia" style="display: none;" class="">Ingrese una contraseña valida</p>
                                </div>
                                <div class="mb-4 form-check" id="grupo_contra">
                                    <input type="checkbox" name="connected" id="" class="form-check-input">
                                    <label for="connected" class="form-check-label">Mantener conectado</label>
                                </div>
                            <div class="text-center d-grid">
                                <button type="submit" class="bt btn-primary border-dark btn-lg " id="boton">Iniciar sesion</button>
                            </div>
                            <div class="my-3 text-center">
                                <span>No tienes cuenta? </span><a href="PHP/Form.php" class="text-decoration-none">Crear cuenta</a>
                            </div>
                            </form>
                            </div>
                        </div>

                    </div>


            </div>
       
        </div>
       
    </body>
    <script src="JAVASCRIPT/scripts.js"></script>
</html>