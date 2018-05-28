<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/22/2018
 * Time: 3:55 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Instrument extends CI_Controller
{
	public function __construct()
	{
		parent::_construct();
		$this->load->model('instrument_model');
	}

	public function getInstrument($instumentId = ''){
		$data = $this->instrument_model->getInstrument($instumentId);
		print_r($data);

		$this->output->enable_profiler();
	}

	public function insert(){
		$result = $this->instrument_model->insert([
			'instumentId' => 'instrumentName',
			'instrumentFee'
		]);
		print_r($result);
	}

	public function update(){

	}

	public function delete(){

	}
}
