<?

if (isset($_GET['sub'])) include '/var/www/vhosts/kashirin.net/httpdocs/inc/'.$_GET['page'].'.'.$_GET['sub'].'.inc';

else {

	$sql = 'SELECT DATE_FORMAT(`time`, "%Y-%m-01") `mon`, SUM(`amount`) `income`
					FROM `operations` 
					GROUP BY DATE_FORMAT(`time`, "%Y-%m")
					ORDER BY `time`';
	$r = $DB->Query($sql,'olga');

	while ($opt = $r->fetch_assoc()) $provider[] = '{ "category": "'.$opt['mon'].'", "column-1": "'.$opt['income'].'" }';
	
	$data['dataProvider'] = join(',',$provider);
	
/*
'{
							"category": "Dec 2021",
							"column-1": "90000"
						},
						{
							"category": "Jan 2022",
							"column-1": "120000"
						},
						{
							"category": "Feb 2022",
							"column-1": "170000"
						}';
*/						
	$dt['content'] = $TPL->html('income', $data, true);
}