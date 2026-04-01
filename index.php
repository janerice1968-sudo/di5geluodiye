<?php
// ======================================
// 🔥 终极配置区：10窗口 + 按星期几分配IP
// ======================================
$nm_key      = "你的NodeMaven密钥";
$country     = "DE";

// ==============================
// 10个窗口 星期分配规则（自己改数字）
// 0=周日,1=周一,2=周二,3=周三,4=周四,5=周五,6=周六
// ==============================
$week_limit = [
    // 窗口1
    1 => [1=>180, 2=>160, 3=>190, 4=>150, 5=>140, 6=>130, 0=>120],
    // 窗口2
    2 => [1=>180, 2=>160, 3=>190, 4=>150, 5=>140, 6=>130, 0=>120],
    // 窗口3
    3 => [1=>180, 2=>160, 3=>190, 4=>150, 5=>140, 6=>130, 0=>120],
    // 窗口4
    4 => [1=>180, 2=>160, 3=>190, 4=>150, 5=>140, 6=>130, 0=>120],
    // 窗口5
    5 => [1=>180, 2=>160, 3=>190, 4=>150, 5=>140, 6=>130, 0=>120],
    // 窗口6（备用）
    6 => [1=>0, 2=>0, 3=>0, 4=>0, 5=>0, 6=>0, 0=>0],
    // 窗口7（备用）
    7 => [1=>0, 2=>0, 3=>0, 4=>0, 5=>0, 6=>0, 0=>0],
    // 窗口8（备用）
    8 => [1=>0, 2=>0, 3=>0, 4=>0, 5=>0, 6=>0, 0=>0],
    // 窗口9（备用）
    9 => [1=>0, 2=>0, 3=>0, 4=>0, 5=>0, 6=>0, 0=>0],
    // 窗口10（备用）
   10 => [1=>0, 2=>0, 3=>0, 4=>0, 5=>0, 6=>0, 0=>0],
];

// 10个任务链接（备用窗口链接可以随便填）
$task_urls = [
  1 => "https://任务1",
  2 => "https://任务2",
  3 => "https://任务3",
  4 => "https://任务4",
  5 => "https://任务5",
  6 => "https://备用6",
  7 => "https://备用7",
  8 => "https://备用8",
  9 => "https://备用9",
 10 => "https://备用10",
];

// ======================================
// 1. 获取IP
// ======================================
$api = "https://api.nodemaven.com/proxy/get?key=$nm_key&country=$country&protocol=socks5&count=1";
$res = @file_get_contents($api);
$data = json_decode($res, true);

if (!isset($data['data'][0])) {
    exit("获取IP失败");
}

$ip    = $data['data'][0]['ip'];
$proxy = $data['data'][0]['proxy'];
$org   = strtolower($data['data'][0]['org'] ?? '');

// ======================================
// 2. 过滤机房IP
// ======================================
$is_bad =
    str_contains($org,'host') || str_contains($org,'data') ||
    str_contains($org,'server') || str_contains($org,'datacenter') ||
    str_contains($org,'ovh') || str_contains($org,'leaseweb') ||
    str_contains($org,'digitalocean');

if ($is_bad) {
    exit("机房IP，重新生成");
}

// ======================================
// 3. IP去重
// ======================================
$today = date('Y-m-d');
$w = date('w'); // 星期几 0-6

$ip_log  = (array)json_decode(@file_get_contents('ip_log.json'), true);
$day_log = (array)json_decode(@file_get_contents('day_log.json'), true);

if (($day_log['date'] ?? '') != $today) {
    $ip_log = [];
    $day_log = [
        'date' => $today,
        'count' => [1=>0,2=>0,3=>0,4=>0,5=>0,6=>0,7=>0,8=>0,9=>0,10=>0]
    ];
}

$ip_key = $ip . '_' . $today;
if (isset($ip_log[$ip_key])) {
    exit("今日IP重复");
}

// ======================================
// 4. 分配10个窗口（按星期限制）
// ======================================
$tid = -1;
for ($i=1; $i<=10; $i++) {
    $max = $week_limit[$i][$w] ?? 0;
    $now = $day_log['count'][$i] ?? 0;
    if ($now < $max) {
        $tid = $i;
        break;
    }
}

if ($tid == -1) {
    exit("今日已满");
}

// 记录
$ip_log[$ip_key] = 1;
$day_log['count'][$tid]++;

file_put_contents('ip_log.json', json_encode($ip_log));
file_put_contents('day_log.json', json_encode($day_log));

// ======================================
// 输出
// ======================================
echo $proxy . '|' . $task_urls[$tid];
?>
