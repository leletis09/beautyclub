<?php

include("conexao.php");
	
	$primeiro_nome=$_POST['primeiro_nome'];
	$sobrenome=$_POST['sobrenome'];
	$email =  $_POST['email'];
	$celular =  $_POST['celular'];
	$senha_hash =  $_POST['senha_hash'];
	$conf_senha_hash =  $_POST['conf_senha_hash'];
	$genero =  $_POST['genero'];

	if ($senha_hash !== $conf_senha_hash) {
		echo "As senhas não coincidem.";
		exit;
	}

	$sql="INSERT INTO cadastros(primeiro_nome,  sobrenome, email, celular, senha_hash, conf_senha_hash, genero)
	VALUES ('$primeiro_nome', '$sobrenome', '$email', '$celular', '$senha_hash', '$conf_senha_hash', '$genero')";
	if(mysqli_query($conexao, $sql)){
		header("Location: index.html");
	}else{
		echo "Erro". mysqli_connect_error($conexao);
	}
	
	mysqli_close($conexao);