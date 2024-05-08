<?php
// Recopilar datos del formulario
$nombre = $_POST['nombre'];
$contacto = $_POST['contacto'];
$producto = $_POST['producto'];
$personalizacion = $_POST['personalizacion'];

// Dirección de correo electrónico receptora
$correo_destino = "alanvazquezsoto56@gmail.com";

// Asunto del correo
$asunto = "Nuevo pedido personalizado de $nombre";

// Construir mensaje
$mensaje = "Nombre: $nombre\n";
$mensaje .= "Contacto: $contacto\n";
$mensaje .= "Producto: $producto\n";
$mensaje .= "Detalles de personalización:\n$personalizacion";

// Enviar correo electrónico
mail($correo_destino, $asunto, $mensaje);

// Redirigir al usuario a una página de confirmación
header("Location: confi.html");
exit;
?>
