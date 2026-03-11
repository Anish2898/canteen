<?php

include "db.php";

$data=json_decode(file_get_contents("php://input"),true);

$name=$data['name'];
$email=$data['email'];
$password=$data['password'];

$sql="INSERT INTO users(name,email,password)
VALUES('$name','$email','$password')";

if($conn->query($sql)){

echo json_encode(["message"=>"Registration successful"]);

}
else{

echo json_encode(["message"=>"Error"]);

}

?>