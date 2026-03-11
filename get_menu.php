<?php

include "db.php";

$sql="SELECT * FROM foods";

$result=$conn->query($sql);

$foods=[];

while($row=$result->fetch_assoc()){

$foods[]=$row;

}

echo json_encode($foods);

?>