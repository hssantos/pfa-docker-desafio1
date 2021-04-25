# Desafio 1 - PFA Docker FullCycle</h2>

<p>
  <b>Imagens Docker:</b>
  <ul>
    <li>docker pull hssantos/pfa-docker-desafio1-mysql</li>
    <li>docker pull hssantos/pfa-docker-desafio1-node</li>
    <li>docker pull hssantos/pfa-docker-desafio1-nginx</li>
  </ul>
</p>

<p>
  <b>Comandos para executar:</b>
  <ol>
    <li>docker network create pfa</li>
    <li>docker run -d --network=pfa --name dbcontainer hssantos/pfa-docker-desafio1-mysql</li>
    <li>docker exec -it dbcontainer bash</li>
    <li>mysql -uroot -proot < create-schema.sql</li>
    <li>exit</li>

    <li>docker run -d --network=pfa --name=nodecontainer hssantos/pfa-docker-desafio1-node</li>

    <li>docker run -d --network=pfa --name=nginxcontainer -p 8080:80 hssantos/pfa-docker-desafio1-nginx</li>
  </ol>
</p>