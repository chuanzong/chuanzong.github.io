<?php
/**
 * Curl版本
 * 使用方法：
 * $post_string = "app=request&version=beta";
 * request_by_curl('http://www.jb51.net/restServer.php', $post_string);
 */
function request_by_curl($remote_server, $post_string) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $remote_server);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $post_string);//传递一个作为HTTP “POST”操作的所有数据的字符串。
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //设定是否显示头信息
  // curl_setopt($ch, CURLOPT_USERAGENT, "jb51.net's CURL Example beta");在HTTP请求中包含一个”user-agent”头的字符串
  $data = curl_exec($ch);
  curl_close($ch);
 
  return $data;
}


//使用方法
// $post_data = array(
//   'username' => 'stclair2201',
//   'password' => 'handan'
// );
 $post_string = http_build_query($_POST);
 $post_url = $_GET['murl'];




// $post_string = "userid=0&pub_platform=web&pub_channel=woshop&ver=1&tag=0&showtime=0&zone=0&sort=0&skip=0&base_time=";
// $mres = request_by_curl('http://h5.graphmovie.com/gmspanel/interface/zh-cn/3.1/M_MainMvList.php', $post_string);
$mres = request_by_curl($post_url, $post_string);
// var_dump($mres);
echo $mres;


?>