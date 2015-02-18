<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class NoticiasModel extends CI_Model {

	public function __construct()
	{
		$this->load->database();
	}

	public function obtener_noticias($id=NULL)
	{
		//Validacion para saber si obtendremos todas las noticias o solo una
		if(empty($id)){
			$todas_noticias = $this->db->get('noticias');
			return $todas_noticias->result_array();
		}else{

		}
	}

	public function insertar_noticias($noticia)
	{
		return $this->db->insert('noticias', $noticia);
	}

}

/* End of file noticiasModel.php */
/* Location: ./application/models/noticiasModel.php */