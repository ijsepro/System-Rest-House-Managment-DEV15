<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 05/21/2018
 * Time: 8:57 PM
 */
class AddCity_models extends CI_Model {
    function addCity($name){
        $this->db->select('cityID');
        $query = $this->db->get_where('addcity',['']);
    }
}