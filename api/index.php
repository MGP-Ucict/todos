<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
	case 'GET':
		$sql = "SELECT * FROM todos";
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$todos = $stmt->fetchAll(PDO::FETCH_ASSOC);        
		echo json_encode($todos);
    break;
	case 'POST':
		$todo = json_decode(file_get_contents('php://input'));
		$sql = "INSERT INTO todos(id, name, created_at) 
		values(null, :name, :created_at)";
		$stmt = $db->prepare($sql);
		$date = date('Y-m-d');
		$stmt->bindParam(':name', $todo->name);
		$stmt->bindParam(':created_at', $date);
		if($stmt->execute()) {
			$data = ['status' => 1, 'message' => "Record successfully created"];
		} else {
			$data = ['status' => 0, 'message' => "Failed to create record."];
		}
		echo json_encode($data);
		break;
     case "DELETE":
        $sql = "DELETE FROM todos WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
?>