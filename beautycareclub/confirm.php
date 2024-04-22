<?php

include("conexao.php");
	
	$nome=$_POST['nome'];
	$nome_usu=$_POST['nome_usu'];
	$email =  $_POST['email'];
	$senha =  $_POST['senha'];
	$conf_senha =  $_POST['conf_senha'];
	
	$sql="INSERT INTO tes(nome,  nome_usu, email, senha, conf_senha)
	VALUES ('$nome', '$nome_usu', '$email', '$senha', '$conf_senha')";
	if(mysqli_query($conexao, $sql)){
		header("Location: index.html");
	}else{
		echo "Erro". mysqli_connect_error($conexao);
	}
	
	mysqli_close($conexao);