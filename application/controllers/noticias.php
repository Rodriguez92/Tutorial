<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Noticias extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('noticiasmodel');
	}

	public function ver()
	{
			$data['tittle'] = 'Bienvenido | Diego Rodriguez';
			$data['noticias'] = $this->noticiasmodel->obtener_noticias();

			$this->load->view('/templates/head', $data);
			$this->load->view('/templates/header');
			$this->load->view('/templates/sidebar');
			$this->load->view('/noticias/catalogo', $data);
			$this->load->view('/templates/quick-sidebar');
			$this->load->view('/templates/footer');
	}

	public function crear($accion = 'formulario')
	{
		switch ($accion) {
			case 'formulario':
				$data['tittle'] = 'Bienvenido | Diego Rodriguez';

				$this->load->view('/templates/head', $data);
				$this->load->view('/templates/header');
				$this->load->view('/templates/sidebar');
				$this->load->view('/noticias/formulario');
				$this->load->view('/templates/quick-sidebar');
				$this->load->view('/templates/footer');
			break;

			case 'insertar':
				$noticia = array(
					'titulo' => $this->input->post('titulo'),
					'contenido' => $this->input->post('contenido'),
					'fecha' => $this->input->post('fecha')
				);

				if($this->noticiasmodel->insertar_noticias($noticia)){
					$respuesta = array('exito' => TRUE,'msg' => "Exito al insertar la noticia");
				}else{
					$respuesta = array('exito' => FALSE,'msg' => "Error no se inserto" );
				}

				$this->output->set_content_type('json')->set_output(json_encode($respuesta));
			break;

			default:
				show_404();
			break;
		}
	}

}

/* End of file noticias.php */
/* Location: ./application/controllers/noticias.php */