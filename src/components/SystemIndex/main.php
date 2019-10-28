<?php
header("Content-type: text/html; charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
$host = "localhost";
$port = 6340;
$i=0;
set_time_limit(0);
function decodeUnicode($str){ 
return preg_replace_callback('/\\\\u([0-9a-f]{4})/i', @create_function('$matches', 'return iconv("UCS-2BE","UTF-8",pack("H*", $matches[1]));'), $str); 
}
$commonProtocol = getprotobyname("tcp");
$socket = socket_create(AF_INET, SOCK_STREAM, $commonProtocol);
if(!$socket) echo "can't creat socket";
$result = socket_connect($socket, $host, $port) or die(socket_strerror());
if($result){
        $output="hello";
        socket_write($socket, $output);
        $input = socket_read($socket, 4, PHP_NORMAL_READ);
        $length = (int)$input;
        $data = socket_read($socket, $length, PHP_NORMAL_READ);
        /*$str = mb_convert_encoding($input, "Big5");*/
        /*$str = json_decode( $input );*/
        /*$ascii = ord($input);*/
        //echo ($data);
        echo decodeUnicode($data);
        //echo ($data);
        /*echo($str);*/
        /*echo($ascii);*/
        /*echo gettype($input);
        /*echo gettype($str);*/
        /*echo($output);
        /*echo("Receive");*/
}
else{
	echo("Error");
}
?>
