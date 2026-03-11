<?php

include "db.php";

$data=json_decode(file_get_contents("php://input"),true);

$user_id=$data['user_id'];
$food_name=$data['food_name'];
$price=$data['price'];

$sql="INSERT INTO orders(user_id,food_name,price,status)
VALUES('$user_id','$food_name','$price','Preparing')";

if($conn->query($sql)){

echo json_encode(["message"=>"Order placed"]);

}

?>