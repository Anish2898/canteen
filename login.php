<?php

include "db.php";

$data=json_decode(file_get_contents("php://input"),true);

$email=$data['email'];
$password=$data['password'];

$sql="SELECT * FROM users WHERE email='$email' AND password='$password'";

$result=$conn->query($sql);

if($result->num_rows>0){

$user=$result->fetch_assoc();

echo json_encode(["message"=>"Login success","user"=>$user]);

}
else{

echo json_encode(["message"=>"Invalid login"]);

}

?>