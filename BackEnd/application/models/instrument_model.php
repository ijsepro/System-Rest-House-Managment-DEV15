<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/22/2018
 * Time: 4:14 PM
 */

class Instrument_model extends CI_Model
{

	public function getAll(){
		$query = $this->db->get('instrument');
		return json_encode($query->result());
	}
	public function getInstrument($instumentId = ''){
		$this->db->select('*');
		$query = $this->db->get_where('instrument',['instumentId' => $instumentId]);
		return json_encode($query->result());

//		if ($instumentId === null){
//			$query = $this->db->get('instrument');
//		}else{
//			$this->db->get_where('instrument',['instumentId' => $instumentId]);
//		}
//		return $query->result_array();
	}

	public function insert($data){
		$this->db->insert('instrument',$data);
		return $this->db->insert_id();
	}
}
