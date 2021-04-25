# Desafio 1 - PFA Docker FullCycle</h2>

<b>Comandos para executar:</b>

<ol>
  <li>docker network create pfa</li>
  <li>docker run -d --network=pfa --name db hssantos/pfa-docker-desafio1-mysql</li>
  <li>docker exec -it db bash</li>
  <li>mysql -uroot -proot < create-schema.sql</li>
  <li>exit</li>

  <li>docker run -d --network=pfa --name=nodecontainer -v $(pwd)/node:/usr/src/app hssantos/pfa-docker-desafio1-node</li>

  <li>docker run -d --network=pfa --name=nginxcontainer -p 8080:80 hssantos/pfa-docker-desafio1-nginx</li>
</ol>
