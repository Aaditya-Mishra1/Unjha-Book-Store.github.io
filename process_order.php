<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $address = $_POST['address'];
    $pincode = $_POST['pincode'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $mobile = $_POST['mobile'];
    $paymentMethod = $_POST['paymentMethod']; // UPI or Cash on Delivery

    // Construct email message
    $to = "aadityamishraa2002@gmail.com";
    $subject = "New Order Details";
    $message = "Customer Name: $name\n";
    $message .= "Address: $address, $city, $state - $pincode\n";
    $message .= "Mobile Number: $mobile\n";
    $message .= "Payment Method: $paymentMethod\n";

    // Send email
    $headers = "From: your-email@example.com";
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request.";
}
?>
